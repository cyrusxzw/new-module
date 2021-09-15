/* eslint-disable init-declarations */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { HeaderFixture } from './Header.fixture';

import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import {
  MobileViewContextProvider,
  useMobileViewContext,
} from '~/components/GlobalNavigation/components/MobileView/MobileView.context';

import * as logoFile from '../../../Logo/Logo';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');
jest.mock(
  '~/components/GlobalNavigation/components/MobileView/MobileView.context',
);

describe('<GlobalNavigation.MobileView.Header />', () => {
  let logoSpy: jest.SpyInstance;

  const mockActions = {
    stores: { component: 'stores', id: 'stores' },
    search: { component: 'search', id: 'search' },
    cart: 'cart',
    menu: 'menu',
  };

  const testGlobalNavigationContext = {
    actions: mockActions,
    onOpen: jest.fn(),
  };

  const testGlobalNavigationStateContext = {
    activeCollectionId: 'top',
    setActiveCollectionId: jest.fn(),
    isOpen: false,
    setIsOpen: jest.fn(),
  };

  const testMobileViewContext = {
    setActiveNestedCollectionIds: jest.fn(),
    onNestedCollectionClick: jest.fn(),
    activeNestedCollectionIds: ['by skin type'],
    closedTheme: 'dark',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
    });
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationStateContext,
    });
    (useMobileViewContext as jest.Mock).mockReturnValue({
      ...testMobileViewContext,
    });
    logoSpy = jest.spyOn(logoFile, 'Logo').mockImplementation(() => null);
  });

  const TestBed = ({ onClose }: { onClose?: () => void }) => {
    return (
      <GlobalNavigationStateContextProvider>
        <MobileViewContextProvider>
          <Header {...HeaderFixture} onClose={onClose} />;
        </MobileViewContextProvider>
      </GlobalNavigationStateContextProvider>
    );
  };

  it('should render base component correctly', () => {
    const { container } = render(<TestBed />);

    expect(container).toMatchSnapshot();
  });

  it('should use default theme', () => {
    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
    });
    (useMobileViewContext as jest.Mock).mockReturnValue({
      closedTheme: null,
    });
    const { container } = render(<TestBed />);

    expect(container).toMatchSnapshot();
  });

  it('should click menu button to close menu', () => {
    const mockOnCloseFn = jest.fn();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'top',
      setActiveCollectionId: jest.fn(),
      isOpen: true,
      setIsOpen: jest.fn(),
    });
    render(<TestBed onClose={mockOnCloseFn} />);

    const closeBtn = screen.getAllByRole('button')[2];
    closeBtn.click();

    expect(mockOnCloseFn).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to close product search menu', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'search',
      setActiveCollectionId: jest.fn(),
      isOpen: true,
      setIsOpen: jest.fn(),
    });
    render(<TestBed />);

    const { setActiveCollectionId } = useGlobalNavigationStateContext();
    const closeBtn = screen.getAllByRole('button')[2];
    closeBtn.click();

    expect(setActiveCollectionId).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to close store search menu', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'stores',
      setActiveCollectionId: jest.fn(),
      isOpen: true,
      setIsOpen: jest.fn(),
    });
    render(<TestBed />);

    const { setActiveCollectionId } = useGlobalNavigationStateContext();
    const closeBtn = screen.getAllByRole('button')[2];
    closeBtn.click();

    expect(setActiveCollectionId).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to open menu', () => {
    const { onOpen } = useGlobalNavigationContext();
    const { setIsOpen } = useGlobalNavigationStateContext();

    render(<TestBed />);

    const openBtn = screen.getAllByRole('button')[2];
    openBtn.click();

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to open menu while onOpen is not defined', () => {
    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
      onOpen: null,
    });
    const { onOpen } = useGlobalNavigationContext();
    const { setIsOpen } = useGlobalNavigationStateContext();

    render(<TestBed />);

    const closeBtn = screen.getAllByRole('button')[2];
    closeBtn.click();

    expect(onOpen).toEqual(null);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });

  it('should use default data test refs', () => {
    const actions = {
      search: { dataTestRef: 'Custom search dataTestRef', url: '/' },
      cart: { dataTestRef: 'Custom cart dataTestRef', url: '/' },
      menu: { dataTestRef: 'Custom menu dataTestRef', url: '/' },
    };

    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
      actions: actions,
    });

    render(<TestBed />);

    const buttons = screen.getAllByRole('button');
    const navSearch = buttons[0];
    const navCart = buttons[1];
    const navMobileMenu = buttons[2];

    expect(navSearch).toHaveAttribute(
      'data-test-ref',
      'Custom search dataTestRef',
    );
    expect(navCart).toHaveAttribute('data-test-ref', 'Custom cart dataTestRef');
    expect(navMobileMenu).toHaveAttribute(
      'data-test-ref',
      'Custom menu dataTestRef',
    );
  });

  it('should open product search on click', () => {
    const actions = {
      ...mockActions,
      search: {
        dataTestRef: 'Custom search dataTestRef',
        url: '/',
        onClick: jest.fn(),
      },
    };
    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
      actions: actions,
    });

    render(<TestBed />);

    const navSearch = screen.getAllByRole('button')[0];

    navSearch.click();

    expect(actions.search.onClick).toHaveBeenCalledTimes(1);
  });

  it('should open product cart on click', () => {
    const actions = {
      ...mockActions,
      cart: {
        dataTestRef: 'Custom cart dataTestRef',
        url: '/',
        onClick: jest.fn(),
      },
    };

    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
      actions: actions,
    });

    render(<TestBed />);

    const navCart = screen.getAllByRole('button')[1];

    navCart.click();

    expect(actions.cart.onClick).toHaveBeenCalledTimes(1);
  });
});
