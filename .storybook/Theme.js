import { create } from '@storybook/theming';

export default create({
  fontBase:
    'Montserrat, "Helvetica Neue", Helvetica, Arial, Tahoma, sans-serif',
  fontCode:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  colorPrimary: '#6c757d',
  colorSecondary: '#007bff',

  base: 'light',
  brandTitle: 'Hello world',
  brandUrl: '/?path=/story/getting-started--page',
  brandTarget: '_self',
});
