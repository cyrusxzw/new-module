import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { SubNav } from './SubNav';

describe('<SubNav />', () => {
  it('should render with corrent number of items and heading if passed', () => {
    render(
      <SubNav
        heading="test heading"
        id="sub-nav"
        links={[
          {
            id: 'link id 1',
            style: 'External No Icon Link',
            children: 'link children 1',
            url: 'link url 1',
          },
          {
            id: 'link id 2',
            style: 'External No Icon Link',
            children: 'link children 2',
            url: 'link url 2',
          },
        ]}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'test heading' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should render without heading if no `heading` prop is passed', () => {
    render(
      <SubNav
        id="sub-nav"
        links={[
          {
            id: 'link id',
            style: 'External No Icon Link',
            children: 'link children',
            url: '/',
          },
        ]}
      />,
    );

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('should be accesible as a list', async () => {
    const { container } = render(
      <SubNav
        id="sub-nav"
        isSelect={true}
        links={[
          {
            id: 'link id',
            style: 'External No Icon Link',
            children: 'link children',
            url: '/',
          },
        ]}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

describe('<SubNav isSelect />', () => {
  beforeAll(() => {
    // Force matchMedia to evaluate to true
    window.matchMedia = () => ({
      matches: true,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: jest.fn(),
      media: '',
      onchange: null,
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  it('should render a select if isSelect is passed', () => {
    render(
      <SubNav
        id="sub-nav"
        isSelect={true}
        links={[
          {
            id: 'link id 1',
            style: 'External No Icon Link',
            children: 'link children 1',
            url: 'link url 1',
          },
          {
            id: 'link id 2',
            style: 'External No Icon Link',
            children: 'link children 2',
            url: 'link url 2',
          },
        ]}
      />,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('should change window location on nav select change', () => {
    const mockResponse = jest.fn();

    render(
      <SubNav
        id="sub-nav"
        isSelect={true}
        links={[
          {
            id: 'link id 1',
            style: 'External No Icon Link',
            children: 'link children 1',
            url: 'link url 1',
          },
          {
            id: 'link id 2',
            style: 'External No Icon Link',
            children: 'link children 2',
            url: 'link url 2',
          },
        ]}
      />,
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

    userEvent.selectOptions(screen.getByRole('combobox'), 'link url 2');

    expect(window.location.href).toBe('link url 2');
  });
});

describe('<SubNav isSelect /> Accessibility', () => {
  beforeAll(() => {
    // https://github.com/nickcolley/jest-axe/issues/147
    window.getComputedStyle = () => undefined;
  });

  it('should be accesible as a nav select', async () => {
    const { container } = render(
      <SubNav
        id="sub-nav"
        isSelect={true}
        links={[
          {
            id: 'link id',
            style: 'External No Icon Link',
            children: 'link children',
            url: '/',
          },
        ]}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
