import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

describe('<Carousel.Pagination />', () => {
  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Pagination dots={[0]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return null if `dots` array is empty', () => {
    const { container } = render(<Pagination />);
    expect(container.firstChild).toBeNull();
  });
});
