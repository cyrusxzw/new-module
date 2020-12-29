import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

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

  it('should render render base component correctly', () => {
    const { container } = render(<Icon name="rightArrow" />);

    expect(container).toMatchSnapshot();
  });

  it('should render SVG with provided title prop correctly', () => {
    render(<Icon name="chevron" title="title" />);

    const icon = screen.getByRole('img', { name: /title/i });

    expect(icon).toBeInTheDocument();
  });

  it('should render SVG that has nested `g` tags correctly', () => {
    const { container } = render(<Icon name="muted" title="title" />);

    expect(container).toMatchSnapshot();
  });

  it('should return `null` if svg name is not found', () => {
    render(<Icon name="" />);

    const child = screen.queryByTestId(/data-testid-Icon/i);

    expect(child).not.toBeInTheDocument();
  });
});
