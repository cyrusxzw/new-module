import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { MenuItemContextProvider } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionLayout } from './CollectionLayout';
import { CollectionLayoutFixture } from './CollectionLayout.fixture';

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
        <CollectionLayout
          articles={CollectionLayoutFixture.articles}
          articlesListHeading={CollectionLayoutFixture.articlesListHeading}
          id={CollectionLayoutFixture.id}
          image={CollectionLayoutFixture.image}
          items={CollectionLayoutFixture.items}
          promotion={CollectionLayoutFixture.promotion}
          topLevelCollectionLabel={
            CollectionLayoutFixture.topLevelCollectionLabel
          }
          type={CollectionLayoutFixture.type}
        />
      </MenuItemContextProvider>
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<CollectionLayout />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
