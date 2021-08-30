import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { GlobalNavigationFixture } from '~/components/GlobalNavigation/GlobalNavigation.fixture';
import { SecondaryNavigation } from './SecondaryNavigation';

const actions = {
  ...GlobalNavigationFixture.actions,
  cart: {
    id: 'cart',
    label: 'Cart',
    onClick: () => null,
    title: 'Action Cart',
    type: 'trigger' as const,
  },
  account: {
    id: 'account',
    label: 'Account',
    onClick: () => null,
    title: 'Action Account',
    type: 'trigger' as const,
  },
};

const BaseComponentWithProviders = () => (
  <GlobalNavigationStateContextProvider>
    <GlobalNavigationContextProvider
      value={{
        actions,
        collections: GlobalNavigationFixture.collections,
        read: GlobalNavigationFixture.read,
      }}
    >
      <SecondaryNavigation />
    </GlobalNavigationContextProvider>
  </GlobalNavigationStateContextProvider>
);

describe('<SecondaryNavigation />', () => {
  it('should render two items with ', () => {
    render(<BaseComponentWithProviders />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(
      screen.getByRole('button', { name: 'Action Account' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Action Cart' }),
    ).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    const { container } = render(<BaseComponentWithProviders />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
