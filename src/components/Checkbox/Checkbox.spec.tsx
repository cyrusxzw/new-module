import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
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
    render(<Checkbox content="Check me" />);

    const checkBox = screen.getByRole('checkbox');

    expect(checkBox.id).toBeDefined();
  });

  it('should render the error message if it is provided', () => {
    render(<Checkbox content="Check me" errorMessage="ERROR!" />);

    const errorMessage = screen.getByText('ERROR!');

    expect(errorMessage).toHaveClass('errorMessage');
  });
});
