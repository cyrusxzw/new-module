import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should be defined', () => {
    expect(Loading).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Loading isLoading={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
