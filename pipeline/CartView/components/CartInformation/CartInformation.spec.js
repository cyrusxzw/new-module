import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import CartInformation from './CartInformation';

configure({ adapter: new Adapter() });

describe('<CartInformation />', () => {
  it('should be defined', () => {
    expect(CartInformation).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(<CartInformation />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
