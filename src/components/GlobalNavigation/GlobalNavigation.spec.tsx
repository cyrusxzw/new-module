import React from 'react';
import { render } from '@testing-library/react';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from './GlobalNavigation.context';
import { GlobalNavigation } from './GlobalNavigation';
import { GlobalNavigationFixture } from './GlobalNavigation.fixture';

describe('<GlobalNavigation />', () => {
  it('should assert something', () => {
    render(
      <GlobalNavigationStateContextProvider>
        <GlobalNavigationContextProvider
          value={{
            actions: GlobalNavigationFixture.actions,
            articles: GlobalNavigationFixture.articles,
            collections: GlobalNavigationFixture.collections,
            isVisuallyObstructed: false,
          }}
        >
          <GlobalNavigation />
        </GlobalNavigationContextProvider>
      </GlobalNavigationStateContextProvider>,
    );
  });
});
