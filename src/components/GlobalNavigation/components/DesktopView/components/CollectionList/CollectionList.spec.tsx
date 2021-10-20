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
        trackingCallbacks: {
          desktop: {
            desktopMenuItemClickOrHover: (menuItemTrackingProps) =>
              console.log('Menu is being tracked'),
            desktopCategoryItemClickOrHover: (categoryItemTrackingProps) =>
              console.log('Menu is being tracked'),
          },
          tablet: {
            tabletMenuItemClick: (tabletMenuItemTrackingProps) =>
              console.log('Tablet Menu is being tracked'),
            tabletCategoryItemClick: (categoryItemTrackingProps) =>
              console.log('Tablet Category is being tracked'),
          },
          mobile: {
            mobileMenuItemClick: (tabletMenuItemTrackingProps) =>
              console.log('Mobile Menu is being tracked'),
            mobileCategoryItemClick: (mobileCategoryItemTrackingProps) =>
              console.log('Mobile Category is being tracked'),
          },
          common: {
            promotionCardClick: (promotionCardTrackingProps) =>
              console.log('Promotion Card Click tracking'),
            promotionCardImpression: (promotionCardTrackingProps) =>
              console.log('Promotion Card Impression tracking'),
          },
        },
      }}
    >
      <MenuItemContextProvider id="collection-list-id" isActive={true}>
        <CollectionList
          eyebrow={CollectionListFixture.eyebrow}
          heading={CollectionListFixture.heading}
          items={CollectionListFixture.items}
          menuSubnav={CollectionListFixture.menuSubnav}
          menuType={'Shop'}
          panel={'Panel 1'}
        />
      </MenuItemContextProvider>
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

/* TODO{issue-6-nonFixture}: Fix test */
describe('<GlobalNavigation.DesktopView.CollectionList />', () => {
  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
