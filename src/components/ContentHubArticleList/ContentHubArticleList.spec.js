import React from 'react';
import { render } from '@testing-library/react';
import { ContentHubArticleList } from './ContentHubArticleList';
import { ContentHubArticleListFixture } from './ContentHubArticleList.fixture';

describe('<ContentHubArticleList />', () => {
  it('should render base component correctly with pattern 1', () => {
    const { container } = render(
      <ContentHubArticleList
        articles={ContentHubArticleListFixture.articles}
        pattern={1}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render base component correctly with pattern 0', () => {
    const { container } = render(
      <ContentHubArticleList
        articles={ContentHubArticleListFixture.articles}
        isFirstGroup={true}
        pattern={0}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
