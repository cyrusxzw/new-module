// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { axe } from 'jest-axe';
// import {
//   GlobalNavigationContextProvider,
//   GlobalNavigationStateContextProvider,
// } from '~/components/GlobalNavigation/GlobalNavigation.context';
// import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
// import { PrimaryMenu } from './PrimaryMenu';
//
// const handleOnClose = jest.fn();

// const BaseComponentWithProviders = () => (
//   <GlobalNavigationStateContextProvider>
//     <GlobalNavigationContextProvider
//       value={{
//         actions: GlobalNavigationFixture.actions,
//         collections: GlobalNavigationFixture.collections,
//         read: GlobalNavigationFixture.read,
//       }}
//     >
//       <PrimaryMenu onClose={handleOnClose} />
//     </GlobalNavigationContextProvider>
//   </GlobalNavigationStateContextProvider>
// );

describe('<GlobalNavigation.DesktopView.PrimaryMenu />', () => {
  it.todo('should be accessible');
  // , async () => {
  //   const { container } = render(<BaseComponentWithProviders />);
  //   const results = await axe(container);
  //
  //   expect(results).toHaveNoViolations();
  // });
});
