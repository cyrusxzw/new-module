import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleCard } from './ArticleCard';
import { ArticleCardFixture } from './ArticleCard.fixture';

describe('<ArticleCard />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <ArticleCard
        id={ArticleCardFixture.id}
        label={ArticleCardFixture.label}
        metaLabel={ArticleCardFixture.metaLabel}
        title={ArticleCardFixture.title}
        url={ArticleCardFixture.url}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should navigate to the article card by tab clicking', () => {
    render(
      <>
        <ArticleCard
          id={ArticleCardFixture.id}
          label={ArticleCardFixture.label}
          metaLabel={ArticleCardFixture.metaLabel}
          title={ArticleCardFixture.title}
          url={ArticleCardFixture.url}
        />
      </>,
    );

    const focusableElements = screen.getAllByRole('link');
    const one = focusableElements[0];

    expect(one).not.toHaveAttribute('tabIndex');
  });

  it('should not be able to be navigate to the article card by tab clicking', () => {
    render(
      <ArticleCard
        id={ArticleCardFixture.id}
        isVisible={false}
        label={ArticleCardFixture.label2}
        metaLabel={ArticleCardFixture.metaLabel}
        title={ArticleCardFixture.title}
        url={ArticleCardFixture.url}
      />,
    );

    const focusableElements = screen.getAllByRole('link');
    const one = focusableElements[0];

    expect(one).toHaveAttribute('tabIndex', '-1');
  });
});
