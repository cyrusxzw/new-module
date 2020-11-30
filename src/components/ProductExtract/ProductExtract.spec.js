import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProductExtract from './ProductExtract';
import ProductExtractFixture from './ProductExtract.fixture';

describe('<ProductExtract />', () => {
  it('should be defined', () => {
    expect(ProductExtract).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductExtract
          dataTestRef={ProductExtractFixture.dataTestRef}
          product={ProductExtractFixture.product}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return null product prop is not a populated object', () => {
    render(
      <ProductExtract
        dataTestRef={ProductExtractFixture.dataTestRef}
        product={{}}
      />,
    );

    const child = screen.queryByTestId('data-testid-ProductExtract');

    expect(child).not.toBeInTheDocument();
  });
});
