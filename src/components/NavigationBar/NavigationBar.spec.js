import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import * as Hyperlink from '~/components/Hyperlink';
// import styles from './NavigationBar.module.css';

describe('<NavigationBar />', () => {
  const MockHyperLink = jest.fn(() => null);

  // const parentLink = {
  //   text: 'Martha',
  //   url: '/test',
  // };
  // const childLinks = [
  //   {
  //     text: 'Bruce',
  //     url: '/child1',
  //     hasTargetInNewWindow: true,
  //   },
  //   {
  //     text: 'Cornholio',
  //     url: '/child2',
  //     hasTargetInNewWindow: false,
  //   },
  // ];

  beforeEach(() => {
    MockHyperLink.mockClear();
    jest.spyOn(Hyperlink, 'default').mockImplementation(MockHyperLink);
  });

  it('should not render the component if no links are provided', () => {
    render(<NavigationBar />);

    const child = screen.queryByTestId('data-testid-NavigationBar');

    expect(child).not.toBeInTheDocument();
  });

  it.todo("should not render a parent link if it's not provided");
  // mount(<NavigationBar childLinks={childLinks} />);
  //
  // expect(MockHyperLink.mock.calls[0][0].className).not.toContain(
  //   styles.hasChildren,
  // );

  it.todo('should not render the separator if child links are not provided');
  // mount(<NavigationBar parentLink={parentLink} />);
  //
  // expect(MockHyperLink.mock.calls[0][0].className).not.toContain(
  //   styles.hasChildren,
  // );

  it.todo('should mark only the selected url as active');
  // mount(
  //   <NavigationBar
  //     childLinks={childLinks}
  //     parentLink={parentLink}
  //     selectedUrl="/child1"
  //   />,
  // );
  //
  // expect(MockHyperLink.mock.calls[0][0].className).not.toContain(
  //   styles.isActive,
  // ); // parent
  // expect(MockHyperLink.mock.calls[1][0].className).toContain(styles.isActive); // active child
  // expect(MockHyperLink.mock.calls[2][0].className).not.toContain(
  //   styles.isActive,
  // ); // inactive child
});
