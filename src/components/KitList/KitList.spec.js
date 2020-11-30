import React from 'react';
import renderer from 'react-test-renderer';
import KitList from './KitList';
import KitListFixture from './KitList.fixture';

describe('<KitList />', () => {
  it('should be defined', () => {
    expect(KitList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<KitList items={KitListFixture.items} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
