import React from 'react';
import renderer from 'react-test-renderer';
import ReadMore from './ReadMore';
import ReadMoreFixture from './ReadMore.fixture';

describe('<ReadMore />', () => {
  it('should be defined', () => {
    expect(ReadMore).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<ReadMore articles={ReadMoreFixture.articles} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
