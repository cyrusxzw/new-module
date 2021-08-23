import type { GlobalNavigationContextType } from './GlobalNavigation.types';

const GlobalNavigationFixture: GlobalNavigationContextType = {
  articles: [
    {
      id: 'article',
      label: 'Article Card Label',
      title: 'See all Skin Care Card',
      type: 'article' as const,
      url: '#article',
      metaLabel: 'Article Card  •  Meta Label',
      image: {
        altText: 'Image of Article Card',
        sizes: {
          large:
            'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
          medium:
            'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
          small:
            'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
        },
      },
    },
  ],
  actions: {
    logo: {
      dataTestRef: 'NAV_LOGO',
      id: 'actions-logo',
      label: 'home',
      title: 'link to the home page',
      type: 'link' as const,
      url: '#home',
    },
    search: {
      dataTestRef: 'NAV_SEARCH',
      id: 'actions-search',
      label: 'search',
      onClick: (): void => console.log('Clicked: search'), // eslint-disable-line no-console
      title: 'open the search component',
      type: 'trigger' as const,
    },
    cart: {
      dataTestRef: 'NAV_CART',
      id: 'actions-cart',
      label: 'Cart',
      onClick: (): void => console.log('Clicked: cart'), // eslint-disable-line no-console
      title: 'open the cart component',
      type: 'trigger' as const,
    },
    menu: {
      closeLabel: 'close the menu',
      closeTitle: 'click to close the menu',
      dataTestRef: 'NAV_HAMBURGER',
      id: 'actions-menu',
      label: 'open the menu',
      title: 'click to open the menu',
      type: 'trigger' as const,
    },
    read: {
      dataTestRef: 'NAV_READ',
      id: 'actions-read',
      label: 'Read',
      onClick: (): void => console.log('Clicked: read'), // eslint-disable-line no-console
      title: 'Read',
      type: 'trigger' as const,
    },
    account: {
      dataTestRef: 'NAV_LOGIN',
      id: 'actions-account',
      label: 'Log in',
      onClick: (): void => console.log('Clicked: footer-log-in'), // eslint-disable-line no-console
      title: 'Log in',
      type: 'trigger' as const,
    },
    visit: {
      dataTestRef: 'NAV_VISIT',
      id: 'actions-visit',
      label: 'Stores',
      onClick: (): void => console.log('Clicked: footer-stores'), // eslint-disable-line no-console
      title: 'Stores',
      type: 'trigger' as const,
    },
    support: {
      dataTestRef: 'NAV_LIVE_ASSISTANCE',
      id: 'actions-support',
      label: 'Live Assistance',
      onClick: (): void => console.log('Clicked: live-assistance'), // eslint-disable-line no-console
      title: 'Live Assistance',
      type: 'trigger' as const,
    },
  },
  collections: [
    {
      backgroundColor: '#',
      backLabel: 'All Collections',
      id: 'skin-care',
      label: 'Skin Care',
      title: 'Skin Care',
      type: 'collection' as const,
      promotion: {
        id: 'see-all-skin-care-card',
        label: 'See all Skin Care Card Label',
        title: 'See all Skin Care Card',
        type: 'promotion' as const,
        url: '#see-all-skin-care-card',
        heading: 'See all Skin Care Card Heading',
        image: {
          altText: 'Image of See all Skin Care',
          sizes: {
            large:
              'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
            medium:
              'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
            small:
              'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
          },
        },
      },
      items: [
        {
          id: 'see-all-skin-care',
          label: 'See all Skin Care',
          title: 'See all Skin Care',
          type: 'link' as const,
          url: '#see-all-skin-care',
        },
        {
          id: 'cleanse',
          label: 'Cleanse',
          title: 'Cleanse',
          type: 'link' as const,
          url: '#cleanse',
        },
        {
          id: 'tone',
          label: 'Tone',
          title: 'Tone',
          type: 'link' as const,
          url: '#tone',
        },
        {
          id: 'hydrate',
          label: 'Hydrate',
          title: 'Hydrate',
          type: 'link' as const,
          url: '#hydrate',
        },
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
            },
            {
              id: 'dry',
              label: 'Dry',
              title: 'Dry',
              type: 'link' as const,
              url: '#dry',
            },
          ],
        },
        {
          id: 'skin-care-gifts',
          label: 'Skin Care Gifts',
          title: 'Skin Care Gifts',
          type: 'link' as const,
          url: '#skin-care-gifts',
        },
      ],
    },
    {
      backLabel: 'All Collections',
      id: 'body-and-hand',
      label: 'Body & Hand',
      title: 'Body & Hand',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-body-hand',
          label: 'See all Body & Hand',
          title: 'See all Body & Hand',
          type: 'link' as const,
          url: '#see-all-body-hand',
        },
        {
          id: 'body-hand-care',
          label: 'Body & Hand Care',
          title: 'Body & Hand Care',
          type: 'nested-collection' as const,
          items: [
            {
              id: 'body',
              label: 'Body',
              title: 'Body',
              type: 'link' as const,
              url: '#body',
            },
            {
              id: 'hand',
              label: 'Hand',
              title: 'Hand',
              type: 'link' as const,
              url: '#hand',
            },
          ],
        },
        {
          id: 'body-hand-gift-kits',
          label: 'Body & Hand Gift Kits',
          title: 'Body & Hand Gift Kits',
          type: 'nested-collection' as const,
          items: [
            {
              id: 'body',
              label: 'Body',
              title: 'Body',
              type: 'link' as const,
              url: '#body',
            },
            {
              id: 'hand',
              label: 'Hand',
              title: 'Hand',
              type: 'link' as const,
              url: '#hand',
            },
          ],
        },
      ],
    },
  ],
};

const actionAccountAuthenticated = {
  dataTestRef: 'NAV_LOGIN',
  id: 'actions-accountAuthenticated',
  label: 'Aesop Customer',
  url: '#accountAuthenticated',
  title: 'Aesop Customer page',
  type: 'link' as const,
};

export { GlobalNavigationFixture, actionAccountAuthenticated };
