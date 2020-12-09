import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import * as Hyperlink from '~/components/Hyperlink';

describe('<NavigationBar />', () => {
  const MockHyperLink = jest.fn(() => null);

  const parentLink = {
    text: 'Martha',
    url: '/test',
  };
  const childLinks = [
    {
      text: 'Bruce',
      url: '/child1',
      hasTargetInNewWindow: true,
    },
    {
      text: 'Cornholio',
      url: '/child2',
      hasTargetInNewWindow: false,
    },
  ];

  beforeEach(() => {
    MockHyperLink.mockClear();
    jest.spyOn(Hyperlink, 'default').mockImplementation(MockHyperLink);
  });

  it('should not render the component if no links are provided', () => {
    const { queryByTestId } = render(<NavigationBar />);

    expect(queryByTestId('data-testid-NavigationBar')).not.toBeInTheDocument();
  });

  it("should not render a parent link if it's not provided", () => {
    const { queryByTestId, getAllByRole } = render(
      <NavigationBar childLinks={childLinks} />,
    );

    expect(queryByTestId('data-testid-NavigationBar')).toBeInTheDocument();
    expect(queryByTestId('NAVIGATION_BAR_PARENT_LINK')).not.toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('should render a parent link if it is provided', () => {
    const { queryByTestId, getAllByRole } = render(
      <NavigationBar childLinks={childLinks} parentLink={parentLink} />,
    );

    expect(queryByTestId('data-testid-NavigationBar')).toBeInTheDocument();
    expect(queryByTestId('NAVIGATION_BAR_PARENT_LINK')).toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(3);
  });
});
