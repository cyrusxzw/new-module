import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Input from './Input';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Input />', () => {
  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <Input
          errorMessage="This is an error message"
          label="Input label"
          name="inputName"
          onChange={mockFn}
          onFocus={mockFn}
          testReference="input"
          value="input"
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
