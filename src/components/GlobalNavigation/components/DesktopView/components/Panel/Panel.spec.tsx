import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { MenuItemContextProvider } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { Panel } from './Panel';
import { PanelFixture } from './Panel.fixture';

const BaseComponentWithProviders = () => (
  <GlobalNavigationStateContextProvider>
    <GlobalNavigationContextProvider
      value={{
        actions: GlobalNavigationFixture.actions,
        collections: GlobalNavigationFixture.collections,
        read: GlobalNavigationFixture.read,
      }}
    >
      <MenuItemContextProvider id={PanelFixture.id} isActive={true}>
        <Panel
          backgroundColor={PanelFixture.backgroundColor}
          shouldOnlyMountWhenActive={PanelFixture.shouldOnlyMountWhenActive}
        >
          Panel content
        </Panel>
      </MenuItemContextProvider>
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<Panel />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
