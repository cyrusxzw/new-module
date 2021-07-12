import React from 'react';
import { render } from '@testing-library/react';
import { ReadMore } from './ReadMore';
import { ReadMoreFixture } from './ReadMore.fixture';

describe('<ReadMore />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <ReadMore articles={ReadMoreFixture.articles} />,
    );

    expect(container).toMatchSnapshot();
  });
});
