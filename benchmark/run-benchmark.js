const http = require('http');

// Generate query that hits multiple modules
function generateQuery(moduleCount = 20) {
  const queries = [];
  for (let i = 1; i <= moduleCount; i++) {
    const paddedIndex = i.toString().padStart(3, '0');
    queries.push(`  module${paddedIndex}Items { id name computedField }`);
  }
  return `query BenchmarkQuery {\n${queries.join('\n')}\n}`;
}

async function runQuery(query) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ query });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const start = process.hrtime.bigint();

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const end = process.hrtime.bigint();
        const duration = Number(end - start) / 1e6; // Convert to ms
        resolve({ duration, status: res.statusCode, data });
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runBenchmark() {
  console.log('NestJS GraphQL Performance Benchmark');
  console.log('=====================================\n');

  const query = generateQuery(20); // Query 20 modules, each returning 5 items with computed fields
  // This will trigger 20 * 5 = 100 request-scoped resolver calls

  console.log('Query hits 20 modules, each returning 5 items with computedField');
  console.log('Total request-scoped resolver calls per request: ~100\n');

  const iterations = 10;
  const times = [];

  console.log(`Running ${iterations} iterations...\n`);

  // Warmup
  console.log('Warmup request...');
  await runQuery(query);

  for (let i = 1; i <= iterations; i++) {
    const result = await runQuery(query);
    times.push(result.duration);
    console.log(`  Request ${i}: ${result.duration.toFixed(2)}ms`);
  }

  const avg = times.reduce((a, b) => a + b, 0) / times.length;
  const sorted = [...times].sort((a, b) => a - b);
  const p50 = sorted[Math.floor(times.length * 0.5)];
  const p90 = sorted[Math.floor(times.length * 0.9)];
  const p99 = sorted[Math.floor(times.length * 0.99)] || sorted[sorted.length - 1];

  console.log('\nResults:');
  console.log('--------');
  console.log(`  Average: ${avg.toFixed(2)}ms`);
  console.log(`  P50:     ${p50.toFixed(2)}ms`);
  console.log(`  P90:     ${p90.toFixed(2)}ms`);
  console.log(`  P99:     ${p99.toFixed(2)}ms`);
  console.log(`  Min:     ${Math.min(...times).toFixed(2)}ms`);
  console.log(`  Max:     ${Math.max(...times).toFixed(2)}ms`);

  console.log('\n---');
  console.log('To profile, run with: node --inspect dist/main.js');
  console.log('Then open chrome://inspect and record a CPU profile while running the benchmark');
  console.log('Look for "registerContextProvider" in the flame chart - it should be the top offender');
}

runBenchmark().catch(console.error);