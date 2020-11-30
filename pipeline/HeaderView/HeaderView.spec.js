// import React from 'react';
// import { MockedProvider } from '@apollo/react-testing';
// import renderer, { act } from 'react-test-renderer';
// import waitForExpect from 'wait-for-expect';
// import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
// import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
// import { resolvers } from '~/lib/apollo/clientSchema';
// import { Locale } from '~/types/Locale';
import HeaderView from './HeaderView';

describe('<HeaderView />', () => {
  // let locale;

  // beforeEach(() => {
  //   locale = LocaleContextFixture;
  // });

  it('should be defined', () => {
    expect(HeaderView).toBeDefined();
  });

  // it('should render the base component', async () => {
  //   const component = renderer.create(
  //     <LocaleContext.Provider value={locale}>
  //       <MockedProvider resolvers={resolvers}>
  //         <HeaderView />,
  //   );
  //
  //   await act(async () => {
  //     await waitForExpect(() => {
  //       const tree = component.toJSON();
  //       expect(container).toMatchSnapshot();
  //     })
  //   })
  // });
});
