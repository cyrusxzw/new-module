import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbsFixture } from './Breadcrumbs.fixture';

describe('<Breadcrumbs />', () => {
  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Breadcrumbs
        className={BreadcrumbsFixture.className}
        items={BreadcrumbsFixture.items}
        theme={BreadcrumbsFixture.theme}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return `null` if the length of the `items` prop is 0', () => {
    render(<Breadcrumbs items={[]} />);

    const breadcrumbs = screen.queryByTestId('data-testid-Breadcrumbs');

    expect(breadcrumbs).not.toBeInTheDocument();
  });

  it('should render the corrct number of items', async () => {
    render(<Breadcrumbs items={BreadcrumbsFixture.items} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });
});
