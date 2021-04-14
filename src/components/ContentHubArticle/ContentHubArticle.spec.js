import React from 'react';
import { render } from '@testing-library/react';
import { ContentHubArticle } from './ContentHubArticle';
import { ContentHubArticleFixture } from './ContentHubArticle.fixture';

describe('<ContentHubArticle />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <ContentHubArticle
        category={ContentHubArticleFixture.category}
        dataTestRef={ContentHubArticleFixture.dataTestRef}
        horizontalThumbnail={ContentHubArticleFixture.horizontalThumbnail}
        id={ContentHubArticleFixture.id}
        isHorizontal={true}
        isInFirstGroup={true}
        isMenuItem={false}
        isReadMore={false}
        longTitle={ContentHubArticleFixture.longTitle}
        onClick={ContentHubArticleFixture.onClick}
        readingTime={ContentHubArticleFixture.readingTime}
        uri={ContentHubArticleFixture.uri}
        verticalThumbnail={ContentHubArticleFixture.verticalThumbnail}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
