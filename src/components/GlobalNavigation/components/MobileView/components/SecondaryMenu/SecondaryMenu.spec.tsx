import React from 'react';
import { render } from '@testing-library/react';
import { SecondaryMenu } from './SecondaryMenu';
import { SecondaryMenuFixture } from './SecondaryMenu.fixture';

import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';

jest.mock('~/components/GlobalNavigation/GlobalNavigation.context');

describe('<GlobalNavigation.MobileView.SecondaryMenu />', () => {
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

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalNavigationStateContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationStateContext,
    });
    (useGlobalNavigationContext as jest.Mock).mockReturnValue({
      ...testGlobalNavigationContext,
    });
  });

  const TestBed = ({ items }: { items?: any }) => {
    return (
      <GlobalNavigationStateContextProvider>
        <SecondaryMenu {...SecondaryMenuFixture} items={items} />
      </GlobalNavigationStateContextProvider>
    );
  };

  it('should render base component correctly', () => {
    const { container } = render(
      <TestBed items={SecondaryMenuFixture.items} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return null with no items passed', () => {
    const { container } = render(<TestBed />);

    expect(container).toBeEmptyDOMElement();
  });

  // TODO: Identify way to capture uncovered branches
});
