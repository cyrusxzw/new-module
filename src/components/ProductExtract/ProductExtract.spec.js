import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductExtract } from './ProductExtract';
import { ProductExtractFixture } from './ProductExtract.fixture';

describe('<ProductExtract />', () => {
  it('should be defined', () => {
    expect(ProductExtract).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <ProductExtract
        dataTestRef={ProductExtractFixture.dataTestRef}
        product={ProductExtractFixture.product}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return null product prop is not a populated object', () => {
    render(
      <ProductExtract
        dataTestRef={ProductExtractFixture.dataTestRef}
        product={{}}
      />,
    );

    const child = screen.queryByTestId(/data-testid-ProductExtract/i);

    expect(child).not.toBeInTheDocument();
  });
});
