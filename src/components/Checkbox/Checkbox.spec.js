import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('should render base component correctly', () => {
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

  it('should assign an id value if one is not provided', () => {
    const { getByRole } = render(<Checkbox content="Check me" />);

    const checkBox = getByRole('checkbox');

    expect(checkBox.id).toBeDefined();
  });
});
