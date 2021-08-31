// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { axe } from 'jest-axe';
// import {
//   GlobalNavigationContextProvider,
//   GlobalNavigationStateContextProvider,
// } from '~/components/GlobalNavigation/GlobalNavigation.context';
// import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
// import { CloseButton } from './CloseButton';
// import { CloseButtonFixture } from './CloseButton.fixture';

// const BaseComponentWithProviders = () => (
//   <GlobalNavigationStateContextProvider activeCollectionId="home" isOpen={true}>
//     <GlobalNavigationContextProvider
//       value={{
//         actions: GlobalNavigationFixture.actions,
//         collections: GlobalNavigationFixture.collections,
//         read: GlobalNavigationFixture.read,
//       }}
//     >
//       <CloseButton onClose={CloseButtonFixture.onClose} />
//     </GlobalNavigationContextProvider>
//   </GlobalNavigationStateContextProvider>
// );

describe('<GlobalNavigation.DesktopView.CloseButton />', () => {
  it.todo('should be accessible');
  // , async () => {
  // const { container } = render(<BaseComponentWithProviders />);
  //
  // screen.debug();
  //
  // const results = await axe(container);
  //
  // expect(results).toHaveNoViolations();
  // });
});
