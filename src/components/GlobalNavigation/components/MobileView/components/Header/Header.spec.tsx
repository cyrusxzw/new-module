import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { HeaderFixture } from './Header.fixture';

import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

describe('<GlobalNavigation.MobileView.Header />', () => {
  it.todo('should assert something');

  const mockActions = {
    logo: 'logo',
    search: 'search',
    cart: 'cart',
    menu: 'menu',
  };

  const testGlobalNavigationContext = {
    activeCollectionId: 'top',
    setActiveCollectionId: jest.fn(),
    actions: mockActions,
    mobileViewClosedTheme: 'dark',
    onOpen: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
    });
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      isOpen: false,
      setIsOpen: jest.fn(),
    });
  });

  const TestBed = ({ onClose }: { onClose?: () => void }) => {
    return (
      <GlobalNavigationStateContextProvider>
        <Header {...HeaderFixture} onClose={onClose} />;
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
      mobileViewClosedTheme: null,
    });
    const { container } = render(<TestBed />);

    expect(container).toMatchSnapshot();
  });

  it('should click menu button to close menu', () => {
    const mockOnCloseFn = jest.fn();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      isOpen: true,
      setIsOpen: jest.fn(),
    });
    render(<TestBed onClose={mockOnCloseFn} />);

    const closeBtn = screen.getAllByRole('button')[2];
    closeBtn.click();

    expect(mockOnCloseFn).toHaveBeenCalledTimes(1);
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
      logo: { dataTestRef: 'Custom logo dataTestRef', url: '/' },
      search: { dataTestRef: 'Custom search dataTestRef', url: '/' },
      cart: { dataTestRef: 'Custom cart dataTestRef', url: '/' },
      menu: { dataTestRef: 'Custom menu dataTestRef', url: '/' },
    };

    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
      actions: actions,
    });

    render(<TestBed />);

    const navLogo = screen.getAllByRole('link')[0];
    const buttons = screen.getAllByRole('button');
    const navSearch = buttons[0];
    const navCart = buttons[1];
    const navMobileMenu = buttons[2];

    expect(navLogo).toHaveAttribute('data-test-ref', 'Custom logo dataTestRef');
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
