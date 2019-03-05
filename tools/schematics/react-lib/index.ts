import {
  chain,
  externalSchematic,
  Rule,
  Tree
} from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/schematics', 'lib', {
      directory: '',
      name: schema.name,
      style: 'scss',
      framework: 'none',
      tags: '',
      unitTestRunner: 'jest'
    }),
    (host: Tree) => {
      const content = host.read(`libs/${schema.name}/tsconfig.json`);
      const json = JSON.parse(content.toString());
      json.compilerOptions.jsx = 'react';
      json.include = ['**/*.ts'];
      host.overwrite(
        `libs/${schema.name}/tsconfig.json`,
        JSON.stringify(json, null, 2)
      );
    }
  ]);
}
