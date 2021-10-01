import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { ScreenReaderOnly } from './ScreenReaderOnly';

describe('<ScreenReaderOnly />', () => {
  it('should be accessible', async () => {
    const { container } = render(
      <ScreenReaderOnly>screen ready only text</ScreenReaderOnly>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
