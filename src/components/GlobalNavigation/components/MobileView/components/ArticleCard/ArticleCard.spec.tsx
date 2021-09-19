import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleCard } from './ArticleCard';
import { ArticleCardFixture } from './ArticleCard.fixture';
import userEvent from '@testing-library/user-event';

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

    expect(container).toMatchSnapshot();
  });

  it('should navigate to the article card by tab clicking', () => {
    render(
      <>
        <TestBed />
      </>,
    );

    const focusableElements = screen.getAllByRole('link');
    const one = focusableElements[0];

    userEvent.tab();
    expect(one).not.toHaveAttribute('tabIndex');
    expect(one).toHaveFocus();
  });

  it('should not be able to be navigate to the article card by tab clicking', () => {
    render(<TestBed isVisible={false} />);

    const focusableElements = screen.getAllByRole('link');
    const one = focusableElements[0];
    userEvent.tab();

    expect(one).toHaveAttribute('tabIndex', '-1');
    expect(one).not.toHaveFocus();
  });
});
