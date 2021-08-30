import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { MenuItemContextProvider } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionList } from './CollectionList';
import { CollectionListFixture } from './CollectionList.fixture';

const BaseComponentWithProviders = () => (
  <GlobalNavigationStateContextProvider>
    <GlobalNavigationContextProvider
      value={{
        actions: GlobalNavigationFixture.actions,
        collections: GlobalNavigationFixture.collections,
        read: GlobalNavigationFixture.read,
      }}
    >
      <MenuItemContextProvider id="collection-list-id" isActive={true}>
        <CollectionList
          eyebrow={CollectionListFixture.eyebrow}
          heading={CollectionListFixture.heading}
          items={CollectionListFixture.items}
        />
      </MenuItemContextProvider>
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<CollectionList />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
