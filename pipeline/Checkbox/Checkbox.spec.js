import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Checkbox />', () => {
  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <Checkbox
          checked={false}
          errorMessage="This is an error message"
          label="Checkbox label"
          name="checkbox"
          onChange={mockFn}
          onFocus={mockFn}
          testReference="checkbox"
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
