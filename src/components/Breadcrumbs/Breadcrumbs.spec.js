import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';
import BreadcrumbsFixture from './Breadcrumbs.fixture';

describe('<Breadcrumbs />', () => {
  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  it('renders base component correctly', () => {
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

    const child = screen.queryByTestId('data-testid-Breadcrumbs');

    expect(child).not.toBeInTheDocument();
  });

  it('should render the corrct number of items', async () => {
    const { getAllByRole } = render(
      <Breadcrumbs items={BreadcrumbsFixture.items} />,
    );

    const listItems = getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });
});
