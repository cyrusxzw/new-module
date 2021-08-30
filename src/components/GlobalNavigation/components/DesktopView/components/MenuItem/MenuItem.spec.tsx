import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { MenuItem } from './MenuItem';
import { MenuItemFixture } from './MenuItem.fixture';

const BaseComponentWithProviders = () => (
  <GlobalNavigationStateContextProvider>
    <GlobalNavigationContextProvider
      value={{
        actions: GlobalNavigationFixture.actions,
        collections: GlobalNavigationFixture.collections,
        read: GlobalNavigationFixture.read,
      }}
    >
      <ul>
        <MenuItem
          dataTestRef={MenuItemFixture.dataTestRef}
          id={MenuItemFixture.id}
          label={MenuItemFixture.label}
          onClick={MenuItemFixture.onClick}
          title={MenuItemFixture.title}
          type={MenuItemFixture.type}
          url={MenuItemFixture.url}
        />
      </ul>
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<MenuItem />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
