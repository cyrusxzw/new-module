import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BreadcrumbsFixture from './Breadcrumbs.fixture';
import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<Breadcrumbs items={BreadcrumbsFixture.items} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return `null` if the length of the `items` prop is 0', () => {
    const { container } = render(<Breadcrumbs items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render the corrct number of items', async () => {
    const { getAllByRole } = render(
      <Breadcrumbs items={BreadcrumbsFixture.items} />,
    );
    const listItems = getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });
});
