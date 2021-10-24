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
  const mockActions = {
    stores: { component: 'stores', id: 'stores' },
    search: { component: 'search', id: 'search' },
    cart: 'cart',
    menu: 'menu',
  };

  const testGlobalNavigationContext = {
    actions: mockActions,
    onOpen: jest.fn(),
    trackingCallbacks: {
      desktop: {
        desktopMenuItemClickOrHover: jest.fn(),
        desktopCategoryItemClickOrHover: jest.fn(),
      },
      tablet: {
        tabletMenuItemClick: jest.fn(),
        tabletCategoryItemClick: jest.fn(),
      },
      mobile: {
        mobileMenuItemClick: jest.fn(),
        mobileCategoryItemClick: jest.fn(),
      },
      common: {
        promotionCardClick: jest.fn(),
        promotionCardImpression: jest.fn(),
      },
    },
  };

  const testGlobalNavigationStateContext = {
    activeCollectionId: 'top',
    setActiveCollectionId: jest.fn(),
    isOpen: false,
    setIsOpen: jest.fn(),
    menuType: 'Shop',
    menuCategoryLabel: 'Category',
    setMenuType: jest.fn(),
    setCategoryLabel: jest.fn(),
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
    jest.spyOn(logoFile, 'Logo').mockImplementation(() => null);
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

    expect(container).not.toBeEmptyDOMElement();
  });

  it('should click menu button to close menu', () => {
    const mockOnCloseFn = jest.fn();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'top',
      setActiveCollectionId: jest.fn(),
      isOpen: true,
      setIsOpen: jest.fn(),
      menuType: 'Shop',
      menuCategoryLabel: 'Category',
      setMenuType: jest.fn(),
      setCategoryLabel: jest.fn(),
    });
    render(<TestBed onClose={mockOnCloseFn} />);

    const closeBtn = screen.getByTestId('NAV_MOBILE_MENU_BTN');

    closeBtn.click();

    expect(mockOnCloseFn).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to close product search menu', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'search',
      setActiveCollectionId: jest.fn(),
      isOpen: true,
      setIsOpen: jest.fn(),
      menuType: 'Shop',
      menuCategoryLabel: 'Category',
      setMenuType: jest.fn(),
      setCategoryLabel: jest.fn(),
    });

    const onClose = jest.fn();
    render(<TestBed onClose={onClose} />);

    const closeBtn = screen.getByTestId('NAV_MOBILE_MENU_BTN');

    closeBtn.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to close store search menu', () => {
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      activeCollectionId: 'stores',
      setActiveCollectionId: jest.fn(),
      isOpen: true,
      setIsOpen: jest.fn(),
      menuType: 'Shop',
      menuCategoryLabel: 'Category',
      setMenuType: jest.fn(),
      setCategoryLabel: jest.fn(),
    });

    const onClose = jest.fn();
    render(<TestBed onClose={onClose} />);

    const closeBtn = screen.getByTestId('NAV_MOBILE_MENU_BTN');

    closeBtn.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should click menu button to open menu', () => {
    const { onOpen } = useGlobalNavigationContext();
    const { setIsOpen } = useGlobalNavigationStateContext();

    render(<TestBed />);

    const openBtn = screen.getByTestId('NAV_MOBILE_MENU_BTN');

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

    const closeBtn = screen.getByTestId('NAV_MOBILE_MENU_BTN');

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

    // const buttons = screen.getAllByRole('button');
    const navSearchBtn = screen.getByTestId('NAV_SEARCH_BTN');
    const navCartBtn = screen.getByTestId('NAV_CART_BTN');
    const navMobileMenuBtn = screen.getByTestId('NAV_MOBILE_MENU_BTN');

    expect(navSearchBtn).toHaveAttribute(
      'data-test-ref',
      'Custom search dataTestRef',
    );
    expect(navCartBtn).toHaveAttribute(
      'data-test-ref',
      'Custom cart dataTestRef',
    );
    expect(navMobileMenuBtn).toHaveAttribute(
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

    const navSearchBtn = screen.getByTestId('NAV_SEARCH_BTN');

    navSearchBtn.click();

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

    const navCartBtn = screen.getByTestId('NAV_CART_BTN');

    navCartBtn.click();

    expect(actions.cart.onClick).toHaveBeenCalledTimes(1);
  });
});
