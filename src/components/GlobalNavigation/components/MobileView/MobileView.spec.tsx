import React from 'react';
import { render } from '@testing-library/react';
// import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Link } from '~/components/GlobalNavigation/GlobalNavigation.types';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { MobileView } from './MobileView';
import { MobileViewContextProvider } from './MobileView.context';

/* TODO{issue-7-nonFixture}: Improve fixture to be more reflective of tracking data */
const collections = [
  {
    id: 'skin-care',
    label: 'Skin Care',
    title: 'Skin Care',
    type: 'collection' as const,
    backLabel: 'back',
    items: [
      {
        id: 'by-skin-type',
        label: 'By Skin Type',
        title: 'By Skin Type',
        type: 'nested-collection' as const,
        items: [
          {
            id: 'normal',
            label: 'Normal',
            title: 'Normal',
            type: 'link' as const,
            url: '#normal',
            menuType: 'Shop' as Link['menuType'],
            panel: 'Panel 1' as Link['panel'],
          },
          {
            id: 'dry',
            label: 'Dry',
            title: 'Dry',
            type: 'link' as const,
            url: '#dry',
            menuType: 'Shop' as Link['menuType'],
            panel: 'Panel 1' as Link['panel'],
          },
        ],
      },
    ],
  },
];

describe('<GlobalNavigation.MobileView />', () => {
  it('should render all items within nested elements', () => {
    render(
      <GlobalNavigationStateContextProvider>
        <GlobalNavigationContextProvider
          value={{
            actions: GlobalNavigationFixture.actions,
            read: GlobalNavigationFixture.read,
            collections: collections,
            trackingCallbacks: GlobalNavigationFixture.trackingCallbacks,
          }}
        >
          <MobileViewContextProvider>
            <MobileView />
          </MobileViewContextProvider>
        </GlobalNavigationContextProvider>
      </GlobalNavigationStateContextProvider>,
    );

    // expect(
    //   screen.getByRole('navigation', { name: 'primary' }),
    // ).toBeInTheDocument();

    // expect correct number of lists to be in the document

    // expect list items and buttons / links to be in the document
  });

  it.todo('should only show active menu on user interaction');

  it.todo('should reveal the correct sub list on click');

  it('should be accessible', async () => {
    // const { container } = render(
    //   <GlobalNavigationStateContextProvider>
    //     <GlobalNavigationContextProvider
    //       value={{
    //         actions: GlobalNavigationFixture.actions,
    //         articles: GlobalNavigationFixture.articles,
    //         collections: collections,
    //       }}
    //     >
    //       <MobileViewContextProvider>
    //         <MobileView />
    //       </MobileViewContextProvider>
    //     </GlobalNavigationContextProvider>
    //   </GlobalNavigationStateContextProvider>,
    // );
    //
    // const results = await axe(container);
    //
    // expect(results).toHaveNoViolations();
  });

  it.todo('should be keyboard accessible');
});
