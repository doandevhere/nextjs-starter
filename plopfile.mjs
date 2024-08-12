import fs from 'fs';
import path from 'path';

export default function PlopConfig(plop) {
  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: function () {
      const indexFilePath = path.join('app/components/index.tsx');
      const actions = [
        {
          type: 'add',
          path: path.join('app/components/{{pascalCase name}}/{{pascalCase name}}.tsx'),
          templateFile: path.join('templates/component/component.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            'app/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
          ),
          templateFile: path.join('templates/component/module.scss.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            'app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          ),
          templateFile: path.join('templates/component/test.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join('app/components/{{pascalCase name}}/index.tsx'),
          templateFile: path.join('templates/component/index.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            'app/components/{{pascalCase name}}/{{pascalCase name}}.types.tsx',
          ),
          templateFile: path.join('templates/component/types.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            'app/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          ),
          templateFile: path.join('templates/component/stories.tsx.hbs'),
        },
      ];

      if (fs.existsSync(indexFilePath)) {
        actions.push({
          type: 'append',
          path: indexFilePath,
          template:
            "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
        });
      } else {
        actions.push({
          type: 'add',
          path: indexFilePath,
          template:
            "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
        });
      }

      return actions;
    },
  });
}
