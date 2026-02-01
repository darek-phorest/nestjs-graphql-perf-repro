const { spawn } = require('child_process');
const http = require('http');

const PORT = 3000;
const ITERATIONS = 10;
const MODULES_TO_QUERY = 20;

function generateQuery(moduleCount) {
  const queries = [];
  for (let i = 1; i <= moduleCount; i++) {
    const paddedIndex = i.toString().padStart(3, '0');
    queries.push(`  module${paddedIndex}Items { id name computedField }`);
  }
  return `query BenchmarkQuery {\n${queries.join('\n')}\n}`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForServer(maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      const req = http.request({ hostname: 'localhost', port: PORT, path: '/graphql', method: 'GET' }, (res) => {
        resolve();
      });
      req.on('error', () => {
        attempts++;
        if (attempts >= maxAttempts) {
          reject(new Error('Server did not start'));
        } else {
          setTimeout(check, 1000);
        }
      });
      req.end();
    };
    check();
  });
}

async function runQuery(query) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ query });

    const options = {
      hostname: 'localhost',
      port: PORT,
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
        const duration = Number(end - start) / 1e6;
        resolve({ duration, status: res.statusCode });
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runBenchmark(label) {
  const query = generateQuery(MODULES_TO_QUERY);
  const times = [];

  console.log(`\nRunning ${ITERATIONS} iterations...`);

  // Warmup
  await runQuery(query);

  for (let i = 1; i <= ITERATIONS; i++) {
    const result = await runQuery(query);
    times.push(result.duration);
    process.stdout.write(`  ${i}/${ITERATIONS}: ${result.duration.toFixed(1)}ms\r`);
  }
  console.log('');

  const avg = times.reduce((a, b) => a + b, 0) / times.length;
  const sorted = [...times].sort((a, b) => a - b);
  const p50 = sorted[Math.floor(times.length * 0.5)];
  const p90 = sorted[Math.floor(times.length * 0.9)];

  return { label, avg, p50, p90, min: Math.min(...times), max: Math.max(...times) };
}

function startServer(withFix) {
  const mainFile = withFix ? 'dist/src/main-with-fix.js' : 'dist/src/main.js';

  const server = spawn('node', [mainFile], {
    stdio: ['ignore', 'pipe', 'pipe'],
    cwd: process.cwd(),
  });

  server.stdout.on('data', (data) => {
    const msg = data.toString();
    if (msg.includes('[PATCH]')) {
      console.log('  ' + msg.trim());
    }
  });

  return server;
}

async function main() {
  console.log('='.repeat(60));
  console.log('NestJS GraphQL Performance Comparison');
  console.log('='.repeat(60));
  console.log(`\nQuery: ${MODULES_TO_QUERY} modules, each returning 5 items with computedField`);
  console.log(`Total request-scoped resolver calls per request: ~${MODULES_TO_QUERY * 5}`);
  console.log(`Iterations: ${ITERATIONS}`);

  // Test WITHOUT fix
  console.log('\n' + '-'.repeat(60));
  console.log('Testing WITHOUT fix (original behavior)...');
  console.log('-'.repeat(60));

  let server = startServer(false);
  await waitForServer();
  const withoutFix = await runBenchmark('Without Fix');
  server.kill('SIGTERM');
  await sleep(2000);  // Give more time for port to be released

  // Test WITH fix
  console.log('\n' + '-'.repeat(60));
  console.log('Testing WITH fix (cached InternalCoreModule lookup)...');
  console.log('-'.repeat(60));

  server = startServer(true);
  await waitForServer();
  const withFix = await runBenchmark('With Fix');
  server.kill();

  // Results
  console.log('\n' + '='.repeat(60));
  console.log('RESULTS');
  console.log('='.repeat(60));

  console.log('\n| Metric | Without Fix | With Fix | Improvement |');
  console.log('|--------|-------------|----------|-------------|');

  const avgImprovement = ((withoutFix.avg - withFix.avg) / withoutFix.avg * 100).toFixed(1);
  const p50Improvement = ((withoutFix.p50 - withFix.p50) / withoutFix.p50 * 100).toFixed(1);
  const p90Improvement = ((withoutFix.p90 - withFix.p90) / withoutFix.p90 * 100).toFixed(1);

  console.log(`| Avg    | ${withoutFix.avg.toFixed(1)}ms | ${withFix.avg.toFixed(1)}ms | **-${avgImprovement}%** |`);
  console.log(`| P50    | ${withoutFix.p50.toFixed(1)}ms | ${withFix.p50.toFixed(1)}ms | **-${p50Improvement}%** |`);
  console.log(`| P90    | ${withoutFix.p90.toFixed(1)}ms | ${withFix.p90.toFixed(1)}ms | **-${p90Improvement}%** |`);
  console.log(`| Min    | ${withoutFix.min.toFixed(1)}ms | ${withFix.min.toFixed(1)}ms | |`);
  console.log(`| Max    | ${withoutFix.max.toFixed(1)}ms | ${withFix.max.toFixed(1)}ms | |`);

  console.log('\n' + '='.repeat(60));
}

main().catch(console.error);