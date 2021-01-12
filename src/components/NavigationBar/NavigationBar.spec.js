import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavigationBar } from './NavigationBar';

describe('<NavigationBar />', () => {
  const parentLink = {
    text: 'parentLink',
    url: '/',
  };

  const childLinks = [
    {
      text: 'childLink1',
      url: '/',
      hasTargetInNewWindow: true,
    },
    {
      text: 'childLink2',
      url: '/',
      hasTargetInNewWindow: false,
    },
  ];

  it('should not render the component if no links are provided', () => {
    render(<NavigationBar />);

    const navBar = screen.queryByTestId('data-testid-NavigationBar');

    expect(navBar).not.toBeInTheDocument();
  });

  it("should not render a parent link if it's not provided", () => {
    render(<NavigationBar childLinks={childLinks} />);

    const navBar = screen.queryByTestId('data-testid-NavigationBar');
    const parent = screen.queryByTestId('NAVIGATION_BAR_PARENT_LINK');
    const children = screen.getAllByRole('listitem');

    expect(navBar).toBeInTheDocument();
    expect(parent).not.toBeInTheDocument();
    expect(children).toHaveLength(2);
  });

  it('should render a parent link if it is provided', () => {
    render(<NavigationBar childLinks={childLinks} parentLink={parentLink} />);

    const navBar = screen.queryByTestId('data-testid-NavigationBar');
    const parent = screen.queryByTestId('NAVIGATION_BAR_PARENT_LINK');
    const children = screen.getAllByRole('listitem');

    expect(navBar).toBeInTheDocument();
    expect(parent).toBeInTheDocument();
    expect(children).toHaveLength(3);
  });
});
