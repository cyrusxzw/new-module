import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Checkbox
          content="Subscribe to communications about Aesop products, services, stores, events and matters of cultural interest."
          dataTestRef="test-data-ref"
          id="test-checkbox"
          isEnabled={false}
          theme="dark"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
