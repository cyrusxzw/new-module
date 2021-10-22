import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleCard } from './ArticleCard';
import { ArticleCardFixture } from './ArticleCard.fixture';
import userEvent from '@testing-library/user-event';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

describe('<ArticleCard />', () => {
  const TestBed = ({ isVisible }: { isVisible?: boolean }) => (
    <ArticleCard
      id={ArticleCardFixture.id}
      isVisible={isVisible}
      label={ArticleCardFixture.label}
      metaLabel={ArticleCardFixture.metaLabel}
      title={ArticleCardFixture.title}
      url={ArticleCardFixture.url}
    />
  );
  it('should render base component correctly', () => {
    const { container } = render(<TestBed />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should navigate to the article card by tab clicking', () => {
    render(<TestBed />);

    const articleCardLink = screen.getByRole('link');

    userEvent.tab();
    expect(articleCardLink).not.toHaveAttribute('tabIndex');
    expect(articleCardLink).toHaveFocus();
  });

  it('should not be able to be navigate to the article card by tab clicking', () => {
    render(<TestBed isVisible={false} />);

    const articleCardLink = screen.getByRole('link');

    userEvent.tab();
    expect(articleCardLink).toHaveAttribute('tabIndex', '-1');
    expect(articleCardLink).not.toHaveFocus();
  });
});
