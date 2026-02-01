import * as fs from 'fs';
import * as path from 'path';

const MODULE_COUNT = 100;
const MODULES_DIR = path.join(__dirname, '../src/modules');

function padNumber(n: number): string {
  return n.toString().padStart(3, '0');
}

function generateModule(index: number): void {
  const paddedIndex = padNumber(index);
  const moduleName = 'module' + paddedIndex;
  const className = 'Module' + paddedIndex;
  const moduleDir = path.join(MODULES_DIR, moduleName);

  fs.mkdirSync(moduleDir, { recursive: true });

  // Generate model
  const modelContent = `import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ${className}Entity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  computedField?: string;
}
`;
  fs.writeFileSync(path.join(moduleDir, moduleName + '.model.ts'), modelContent);

  // Generate loader (request-scoped)
  const loaderContent = `import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';

@Injectable({ scope: Scope.REQUEST })
export class ${className}Loader {
  private readonly loader = new DataLoader<string, string>(
    async (ids: readonly string[]) => {
      // Simulate async operation
      return ids.map(id => 'computed-' + id + '-${paddedIndex}');
    },
  );

  async load(id: string): Promise<string> {
    return this.loader.load(id);
  }

  async loadMany(ids: string[]): Promise<(string | Error)[]> {
    return this.loader.loadMany(ids);
  }
}
`;
  fs.writeFileSync(path.join(moduleDir, moduleName + '.loader.ts'), loaderContent);

  // Generate resolver
  const resolverContent = `import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { ${className}Entity } from './${moduleName}.model';
import { ${className}Loader } from './${moduleName}.loader';

@Resolver(() => ${className}Entity)
export class ${className}Resolver {
  constructor(private readonly loader: ${className}Loader) {}

  @Query(() => [${className}Entity], { name: '${moduleName}Items' })
  async getItems(): Promise<${className}Entity[]> {
    // Return 5 items to trigger multiple resolver calls
    return [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '3', name: 'Item 3' },
      { id: '4', name: 'Item 4' },
      { id: '5', name: 'Item 5' },
    ];
  }

  @ResolveField(() => String, { nullable: true })
  async computedField(@Parent() item: ${className}Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
`;
  fs.writeFileSync(path.join(moduleDir, moduleName + '.resolver.ts'), resolverContent);

  // Generate module
  const moduleFileContent = `import { Module } from '@nestjs/common';
import { ${className}Resolver } from './${moduleName}.resolver';
import { ${className}Loader } from './${moduleName}.loader';

@Module({
  providers: [${className}Resolver, ${className}Loader],
})
export class ${className}Module {}
`;
  fs.writeFileSync(path.join(moduleDir, moduleName + '.module.ts'), moduleFileContent);

  console.log('Generated module: ' + moduleName);
}

function generateAppModule(): void {
  const imports: string[] = [];
  const moduleNames: string[] = [];

  for (let i = 1; i <= MODULE_COUNT; i++) {
    const paddedIndex = padNumber(i);
    const moduleName = 'module' + paddedIndex;
    const className = 'Module' + paddedIndex;
    imports.push("import { " + className + "Module } from './modules/" + moduleName + "/" + moduleName + ".module';");
    moduleNames.push(className + 'Module');
  }

  const appModuleContent = `import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
${imports.join('\n')}

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: true,
      graphiql: true,
    }),
    ${moduleNames.join(',\n    ')},
  ],
})
export class AppModule {}
`;

  fs.writeFileSync(path.join(__dirname, '../src/app.module.ts'), appModuleContent);
  console.log('Generated app.module.ts');
}

// Clean existing modules
if (fs.existsSync(MODULES_DIR)) {
  fs.rmSync(MODULES_DIR, { recursive: true });
}
fs.mkdirSync(MODULES_DIR, { recursive: true });

// Generate modules
console.log('Generating ' + MODULE_COUNT + ' modules...\n');
for (let i = 1; i <= MODULE_COUNT; i++) {
  generateModule(i);
}

// Generate app.module.ts
console.log('\nGenerating app.module.ts...');
generateAppModule();

console.log('\nDone! Generated ' + MODULE_COUNT + ' modules with request-scoped DataLoaders.');