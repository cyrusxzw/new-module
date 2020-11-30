import React from 'react';
import renderer from 'react-test-renderer';
import BynderWidget from './BynderWidget';

describe('<BynderWidget />', () => {
  it('should be defined', () => {
    expect(BynderWidget).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <BynderWidget
          heading="Media Releases"
          id="6E8E63F9-7A54-442B-861E291124E19D94"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
