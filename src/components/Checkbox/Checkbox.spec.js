import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <Checkbox
        content="Subscribe to communications about Aesop products, services, stores, events and matters of cultural interest."
        dataTestRef="test-data-ref"
        id="test-checkbox"
        isEnabled={false}
        theme="dark"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
