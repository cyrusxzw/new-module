import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import QuantitySelect from './QuantitySelect';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<QuantitySelect />', () => {
  it('should be defined', () => {
    expect(QuantitySelect).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <QuantitySelect
          name="selectName"
          onChange={e => mockFn(e)}
          options={[
            {
              value: 'fabulist',
              label: 'Fabulist',
            },
            {
              value: 'ledger',
              label: 'Ledger',
            },
          ]}
          testReference="select"
          value="select"
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
