import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SubNav } from './SubNav';
import { SubNavFixture } from './SubNav.fixture';

describe('<SubNav />', () => {
  it('should be defined', () => {
    expect(SubNav).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <SubNav
        heading={SubNavFixture.heading}
        id={SubNavFixture.id}
        links={SubNavFixture.links}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with corrent number of items and heading if passed', () => {
    render(
      <SubNav
        heading="test heading"
        id={SubNavFixture.id}
        links={SubNavFixture.links}
      />,
    );

    const heading = screen.getByRole('heading', { label: /heading/i });
    const items = screen.getAllByRole('listitem');

    expect(heading).toBeInTheDocument();
    expect(items).toHaveLength(SubNavFixture.links.length);
  });

  it('should render without heading if no `heading` prop is passed', () => {
    render(<SubNav links={SubNavFixture.links} />);

    const heading = screen.queryByRole('heading', { label: /heading/i });

    expect(heading).not.toBeInTheDocument();
  });

  it('should render a select if isSelect is passed', () => {
    // Force matchMedia to evaluate to true
    window.matchMedia = () => ({
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    });

    render(
      <SubNav id="test-nav" isSelect={true} links={SubNavFixture.links} />,
    );

    const nav = screen.getByRole('navigation');
    const select = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');

    expect(nav).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(SubNavFixture.links.length); // 2
  });

  it('should change window location on nav select change', () => {
    // Force matchMedia to evaluate to true
    window.matchMedia = () => ({
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    });

    const mockResponse = jest.fn();

    render(
      <SubNav id="test-nav" isSelect={true} links={SubNavFixture.links} />,
    );

    Object.defineProperty(window, 'location', {
      value: {
        hash: {
          endsWith: mockResponse,
          includes: mockResponse,
        },
        assign: mockResponse,
      },
      writable: true,
    });

    const select = screen.getByRole('combobox');

    userEvent.selectOptions(select, 'https://aesop.com/');

    expect(window.location.href).toBe('https://aesop.com/');
  });
});
