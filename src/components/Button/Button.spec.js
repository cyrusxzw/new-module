import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from './Button';

const mockFn = jest.fn();

describe('<Button />', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('renders base component correctly with `onClick` prop', () => {
    const tree = renderer
      .create(
        <Button className="aesop" onClick={mockFn} title="Aēsop">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return `null` if no children are passed', () => {
    render(<Button className="aesop" onClick={mockFn} title="Aēsop" />);

    const child = screen.queryByTestId('data-testid-Breadcrumbs');

    expect(child).not.toBeInTheDocument();
  });
});
