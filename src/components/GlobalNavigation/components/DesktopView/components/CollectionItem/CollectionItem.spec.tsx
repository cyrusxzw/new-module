import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { GlobalNavigationStateContextProvider } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { MenuItemContextProvider } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionItem } from './CollectionItem';
import { CollectionItemFixture } from './CollectionItem.fixture';

const BaseComponentWithProviders = () => (
  <GlobalNavigationStateContextProvider>
    <MenuItemContextProvider id="collection-list-id" isActive={true}>
      <ul>
        <CollectionItem
          id={CollectionItemFixture.id}
          label={CollectionItemFixture.label}
          title={CollectionItemFixture.title}
          type={CollectionItemFixture.type}
          url={CollectionItemFixture.url}
        />
      </ul>
    </MenuItemContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<GlobalNavigation.DesktopView.CollectionList />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
