import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  it('should be defined', () => {
    expect(Accordion).toBeDefined();
  });

  it('should return `null` if the length of the `items` prop is 0', () => {
    const { container } = render(<Accordion items={[]} />);

    expect(container.firstChild).toBeNull();
  });
});
