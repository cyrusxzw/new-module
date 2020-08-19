import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

export const parameters = {
  backgrounds: {
    default: '#fff',
    values: [
      {
          name: 'alabaster',
          value: '#fffef0'
      },
      {
          name: 'charcoal',
          value: '#333'
      },
    ],
  }
}

addDecorator(withA11y);
addDecorator(withKnobs);
