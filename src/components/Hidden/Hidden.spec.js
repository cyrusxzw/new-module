import React from 'react';
import { render } from '@testing-library/react';
import { Hidden } from './Hidden';

describe('<Hidden />', () => {
  it('should be defined', () => {
    expect(Hidden).toBeDefined();
  });

  it('renders returned component correctly', () => {
    const { container } = render(
      <Hidden isSmall={true}>
        <span>Hidden content</span>
      </Hidden>,
    );

    expect(container).toMatchSnapshot();
  });
});
