import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  colorPrimary: '#333',
  colorSecondary: '#333',
  brandTitle: 'Aesop Global Experience Language',
  brandUrl: 'https://aesop.github.io/aesop-gel/',
  brandImage:
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg',
});

addons.setConfig({
  theme,
});
