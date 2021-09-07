import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentHubArticle } from './ContentHubArticle';
import { ContentHubArticleFixture } from './ContentHubArticle.fixture';

describe('<ContentHubArticle />', () => {
  it('should render a component with correct hyperlinks and heading', () => {
    render(
      <ContentHubArticle
        category={ContentHubArticleFixture.category}
        dataTestRef={ContentHubArticleFixture.dataTestRef}
        horizontalThumbnail={ContentHubArticleFixture.horizontalThumbnail}
        id={ContentHubArticleFixture.id}
        isHorizontal={true}
        isInFirstGroup={true}
        isMenuItem={false}
        isReadMore={false}
        longTitle={'title'}
        onClick={ContentHubArticleFixture.onClick}
        readingTime={ContentHubArticleFixture.readingTime}
        uri={ContentHubArticleFixture.uri}
        verticalThumbnail={ContentHubArticleFixture.verticalThumbnail}
      />,
    );

    expect(screen.getAllByRole('link', { name: 'title' }).length).toEqual(3);
  });
});
