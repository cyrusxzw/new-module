import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

jest.mock('uuid', () => {
  let value = 0;
  return {
    v4: () => value++,
  };
});

describe('<Icon />', () => {
  it('should be defined', () => {
    expect(Icon).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(<Icon name="rightArrow" />);

    expect(container).toMatchSnapshot();
  });

  it('renders SVG with provided title prop correctly', () => {
    const { container } = render(<Icon name="rightArrow" title="aesop" />);

    expect(container).toMatchSnapshot();
  });
});

describe('<Icon /> error handling.', () => {
  it('should return `null` if svg name is not found', () => {
    render(<Icon name="foo" />);

    const child = screen.queryByTestId('data-testid-Icon');

    expect(child).not.toBeInTheDocument();
  });
});
