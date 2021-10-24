import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { TabletViewContextProvider } from '../../TabletView.context';
import { SelectionPanel } from './SelectionPanel';

const BaseComponentWithProviders = () => (
  <GlobalNavigationStateContextProvider>
    <GlobalNavigationContextProvider
      value={{
        actions: GlobalNavigationFixture.actions,
        collections: GlobalNavigationFixture.collections,
        read: GlobalNavigationFixture.read,
        trackingCallbacks: GlobalNavigationFixture.trackingCallbacks,
      }}
    >
      <TabletViewContextProvider>
        <SelectionPanel isActive={true}>
          <div>Content</div>
        </SelectionPanel>
      </TabletViewContextProvider>
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<GlobalNavigation.TabletView.SelectionPanel />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
