import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentHubArticleList } from './ContentHubArticleList';
import { ContentHubArticleListFixture } from './ContentHubArticleList.fixture';

describe('<ContentHubArticleList />', () => {
  it('should display 2 top and 2 bottom articles on desktop if provided 4', () => {
    render(
      <ContentHubArticleList
        articles={ContentHubArticleListFixture.articles}
      />,
    );

    expect(
      screen.getAllByTestId('data-testid-ContentHubArticle-top').length,
    ).toEqual(2);

    expect(
      screen.getAllByTestId('data-testid-ContentHubArticle-bottom').length,
    ).toEqual(2);
  });

  it.todo('refector and test for mobile components');
});
