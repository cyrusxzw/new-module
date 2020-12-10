import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('<Carousel.Pagination />', () => {
  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<Pagination dots={[0]} />);

    expect(container).toMatchSnapshot();
  });

  it('should return null if `dots` array is empty', () => {
    render(<Pagination />);

    const child = screen.queryByTestId('data-testid-Carousel-Pagination');

    expect(child).not.toBeInTheDocument();
  });
});
