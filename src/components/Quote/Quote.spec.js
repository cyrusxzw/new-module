import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';
import QuoteFixture from './Quote.fixture';

describe('<Quote />', () => {
  it('should be defined', () => {
    expect(Quote).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <Quote author={QuoteFixture.author} content={QuoteFixture.content} />,
    );

    expect(container).toMatchSnapshot();
  });
});
