import React from 'react';
import { render } from '@testing-library/react';
import { Quote } from './Quote';
import { QuoteFixture } from './Quote.fixture';

describe('<Quote />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <Quote author={QuoteFixture.author} content={QuoteFixture.content} />,
    );

    expect(container).toMatchSnapshot();
  });
});
