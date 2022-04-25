export default function (plop) {
  plop.setGenerator('component', {
    description: 'a react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/components/src/{{ name }}/{{ name }}.tsx',
        templateFile: '.plop/component/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/components/src/{{ name }}/index.ts',
        templateFile: '.plop/component/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'apps/storybook/stories/{{ name }}.stories.tsx',
        templateFile: '.plop/component/stories/component.stories.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('theme', {
    description: 'a theme',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'theme name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/themes/src/themes/{{ name }}.ts',
        templateFile: '.plop/theme/theme.ts.hbs',
      },
    ],
  });
}
