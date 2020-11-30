import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';
import QuoteFixture from './Quote.fixture';

describe('<Quote />', () => {
  it('should be defined', () => {
    expect(Quote).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Quote author={QuoteFixture.author} content={QuoteFixture.content} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
