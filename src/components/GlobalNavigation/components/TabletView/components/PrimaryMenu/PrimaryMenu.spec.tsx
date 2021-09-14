// import React from 'react';
// import { render } from '@testing-library/react';
// import { axe } from 'jest-axe';
// import {
//   GlobalNavigationContextProvider,
//   GlobalNavigationStateContextProvider,
// } from '~/components/GlobalNavigation/GlobalNavigation.context';
// import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
// import { TabletViewContextProvider } from '../../TabletView.context';
// import { PrimaryMenu } from './PrimaryMenu';
//
// const handleOnClose = jest.fn();
//
// const BaseComponentWithProviders = () => (
//   <GlobalNavigationStateContextProvider>
//     <GlobalNavigationContextProvider
//       value={{
//         actions: GlobalNavigationFixture.actions,
//         collections: GlobalNavigationFixture.collections,
//         read: GlobalNavigationFixture.read,
//       }}
//     >
//       <TabletViewContextProvider>
//         <PrimaryMenu onClose={handleOnClose} />
//       </TabletViewContextProvider>
//     </GlobalNavigationContextProvider>
//   </GlobalNavigationStateContextProvider>
// );

describe('<GlobalNavigation.TabletView.PrimaryMenu />', () => {
  it.todo('should be accessible');
  // , async () => {
  //   const { container } = render(<BaseComponentWithProviders />);
  //   const results = await axe(container);
  //
  //   expect(results).toHaveNoViolations();
  // });
});
