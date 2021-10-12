import React from 'react';
import type { GlobalNavigationContextType } from './GlobalNavigation.types';

const actionAccountAuthenticated = {
  dataTestRef: 'NAV_LOGIN',
  id: 'actions-accountAuthenticated',
  label: 'Aesop Customer',
  url: '#accountAuthenticated',
  recentOrders: {
    url: '#recent-orders',
    label: 'Recent Orders',
    title: 'veiw recent orders',
  },
  title: 'Aesop Customer page',
  type: 'link' as const,
  isAuthenticated: true,
};

/* TODO{issue-1}: Improve fixture to be more reflective of tracking data
 * Currently implemented type to satisfy typescript for this fixture
 */
type NavTrackingPropsType = {
  menuType: 'Shop' | 'Read';
  panel: 'Panel 1' | 'Panel 2';
};

const navTrackingProps: NavTrackingPropsType = {
  menuType: 'Shop',
  panel: 'Panel 1',
};

const GlobalNavigationFixture: GlobalNavigationContextType = {
  onClose: (): void => console.log('Clicked: close'), // eslint-disable-line no-console
  onOpen: (): void => console.log('Clicked: open'), // eslint-disable-line no-console
  trackingCallbacks: {
    desktop: {
      menuItemClick: (menuItemTrackingProps) =>
        console.log('Menu is being tracked'),
      categoryItemClick: (categoryItemTrackingProps) =>
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
        console.log('Promotion Card click tracking'),
      promotionCardImpression: (promotionCardTrackingProps) =>
        console.log('Promotion Card Impression tracking'),
    },
  },
  actions: {
    account: {
      isAuthenticated: false,
      dataTestRef: 'NAV_LOGIN',
      id: 'actions-account',
      label: 'Log in',
      onClick: (): void => console.log('Clicked: log-in'), // eslint-disable-line no-console
      title: 'Log in',
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
    logo: {
      dataTestRef: 'NAV_LOGO',
      id: 'actions-logo',
      label: 'home',
      title: 'link to the home page',
      type: 'link' as const,
      url: '#home',
      ...navTrackingProps,
    },
    menu: {
      closeLabel: 'Close',
      closeTitle: 'click to close the menu',
      dataTestRef: 'NAV_MENU',
      id: 'actions-menu',
      label: 'Open',
      title: 'click to open the menu',
      type: 'trigger' as const,
    },
    search: {
      dataTestRef: 'NAV_SEARCH',
      id: 'search',
      label: 'search',
      onClick: (): void => console.log('Clicked: search'), // eslint-disable-line no-console
      title: 'open the search component',
      type: 'trigger' as const,
      isLegacyMenu: true,
      component: () => (
        <img
          alt="mock"
          src="./assets/images/GlobalNavigation/mock-search.png"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      ),
    },
    shop: {
      dataTestRef: 'NAV_SHOP',
      id: 'actions-shop',
      label: 'Shop',
      title: 'click to open the shop menu',
      type: 'trigger' as const,
    },
    stores: {
      dataTestRef: 'NAV_STORES',
      id: 'actions-stores',
      label: 'Stores',
      onClick: (): void => console.log('Clicked: stores'), // eslint-disable-line no-console
      title: 'Stores',
      type: 'trigger' as const,
      isLegacyMenu: true,
      component: () => (
        <img
          alt="mock this"
          src="./assets/images/GlobalNavigation/mock-store-locator.png"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      ),
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
  read: {
    articlesListHeading: 'Latest Editions',
    backgroundColor: '#fefef1',
    baseUrl: '#read-base-url',
    dataTestRef: 'NAV_READ',
    id: 'read-collection',
    label: 'Read',
    title: 'Read',
    topLevelCollectionLabel: 'The Athenaeum',
    type: 'read-collection' as const,
    image: {
      altText: 'alt text',
      sizes: {
        large: './assets/images/GlobalNavigation/read-creative.png',
      },
    },
    articles: [
      {
        id: 'article',
        label: 'Article Card Label',
        metaDuration: 'Ten-minute read',
        metaLabel: 'Article Card  •  Meta Label',
        title: 'See all Skin Care Card',
        type: 'article' as const,
        url: '#article',
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
        ...navTrackingProps,
      },
      {
        id: 'article-two',
        label: 'Article Two Card Label',
        metaDuration: 'Two-minute read',
        metaLabel: 'Article Card Two  •  Meta Label',
        title: 'See all Skin Care Two Card',
        type: 'article' as const,
        url: '#article-two',
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
        ...navTrackingProps,
      },
    ],
    items: [
      {
        id: 'the-athenaeum',
        label: 'The Athenaeum',
        alternateLabel: 'See All Articles',
        title: 'The Athenaeum',
        type: 'link' as const,
        url: '#the-athenaeum',
        ...navTrackingProps,
      },
      {
        id: 'about',
        label: 'About',
        title: 'About',
        type: 'nested-collection' as const,
        items: [
          {
            id: 'careers',
            label: 'Careers',
            title: 'Careers',
            type: 'link' as const,
            url: '#careers',
            ...navTrackingProps,
          },
          {
            id: 'foundation',
            label: 'Foundation',
            title: 'Foundation',
            type: 'link' as const,
            url: '#foundation',
            ...navTrackingProps,
          },
          {
            id: 'contact-us',
            label: 'Contact Us',
            title: 'Contact Us',
            type: 'link' as const,
            url: '#contact-us',
            ...navTrackingProps,
          },
        ],
      },
      {
        id: 'philosophy',
        label: 'Philosophy',
        title: 'Philosophy',
        type: 'nested-collection' as const,
        items: [
          {
            id: 'design',
            label: 'Design',
            title: 'Design',
            type: 'link' as const,
            url: '#design',
            ...navTrackingProps,
          },
          {
            id: 'products',
            label: 'Products',
            title: 'Products',
            type: 'link' as const,
            url: '#products',
            ...navTrackingProps,
          },
        ],
      },
    ],
  },
  collections: [
    {
      image: {
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-skin-care.png',
        },
      },
      backgroundColor: '#eeecdd',
      backLabel: 'All Collections',
      id: 'skin-care',
      label: 'Skin Care',
      title: 'Skin Care',
      topLevelCollectionLabel: 'Category',
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
          ...navTrackingProps,
        },
        {
          id: 'cleanse',
          label: 'Cleanse',
          title: 'Cleanse',
          type: 'link' as const,
          url: '#cleanse',
          ...navTrackingProps,
        },
        {
          id: 'exfoliate',
          label: 'Exfoliate',
          title: 'Exfoliate',
          type: 'link' as const,
          url: '#exfoliate',
          ...navTrackingProps,
        },
        {
          id: 'treat-and-masque',
          label: 'Treat & Masque',
          title: 'Treat & Masque',
          type: 'link' as const,
          url: '#treat-and-masque',
          ...navTrackingProps,
        },
        {
          id: 'tone',
          label: 'Tone',
          title: 'Tone',
          type: 'link' as const,
          url: '#tone',
          ...navTrackingProps,
        },
        {
          id: 'hydrate',
          label: 'Hydrate',
          title: 'Hydrate',
          type: 'link' as const,
          url: '#hydrate',
          ...navTrackingProps,
        },
        {
          id: 'eyes-and-lips',
          label: 'Eys & Lips',
          title: 'Eys & Lips',
          type: 'link' as const,
          url: '#eyes-and-lips',
          ...navTrackingProps,
        },
        {
          id: 'shave',
          label: 'Shave',
          title: 'Shave',
          type: 'link' as const,
          url: '#shave',
          ...navTrackingProps,
        },
        {
          id: 'sun-care',
          label: 'Sun Care',
          title: 'Sun Care',
          type: 'link' as const,
          url: '#sun-care',
          ...navTrackingProps,
        },
        {
          id: 'skin-care-kits',
          label: 'Skin Care Kits',
          title: 'Skin Care Kits',
          type: 'link' as const,
          url: '#skin-care-kits',
          ...navTrackingProps,
        },
        {
          id: 'skin-care-bundles',
          label: 'Skin Care Bundles',
          title: 'Skin Care Bundles',
          type: 'link' as const,
          url: '#skin-care-bundles',
          ...navTrackingProps,
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
              ...navTrackingProps,
            },
            {
              id: 'dry',
              label: 'Dry',
              title: 'Dry',
              type: 'link' as const,
              url: '#dry',
              ...navTrackingProps,
            },
            {
              id: 'oily',
              label: 'Oily',
              title: 'Oily',
              type: 'link' as const,
              url: '#oily',
              ...navTrackingProps,
            },
            {
              id: 'combination',
              label: 'Combination',
              title: 'Combination',
              type: 'link' as const,
              url: '#combination',
              ...navTrackingProps,
            },
          ],
        },
        {
          id: 'range',
          label: 'Range',
          title: 'Range',
          type: 'nested-collection' as const,
          items: [
            {
              id: 'range-parsley-seed',
              label: 'Parsley Seed',
              title: 'Parsley Seed',
              type: 'link' as const,
              url: '#range-parsley-seed',
              ...navTrackingProps,
            },
            {
              id: 'range-skin-care-plus',
              label: 'Skin Care +',
              title: 'Skin Care +',
              type: 'link' as const,
              url: '#range-skin-care-plus',
              ...navTrackingProps,
            },
          ],
        },
        {
          id: 'beloved-formulations',
          label: 'Beloved Formulations',
          title: 'Beloved Formulations',
          type: 'notable-nested-collection' as const,
          items: [
            {
              id: 'parsley-seed-facial-cleanser',
              label: 'Parsley Seed Facial Cleanser',
              title: 'Parsley Seed Facial Cleanser',
              type: 'link' as const,
              url: '#parsley-seed-facial-cleanser',
              ...navTrackingProps,
            },
          ],
        },
      ],
    },
    {
      image: {
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-body-and-hand.png',
        },
      },
      backgroundColor: '#eadfce',
      backLabel: 'All Collections',
      id: 'body-and-hand',
      label: 'Body & Hand',
      title: 'Body & Hand',
      topLevelCollectionLabel: 'Category',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-body-hand',
          label: 'See all Body & Hand',
          title: 'See all Body & Hand',
          type: 'link' as const,
          url: '#see-all-body-hand',
          ...navTrackingProps,
        },
        {
          id: 'hand',
          label: 'Hand',
          title: 'Hand',
          type: 'link' as const,
          url: '#hand',
          ...navTrackingProps,
        },
        {
          id: 'body',
          label: 'Body',
          title: 'Body',
          type: 'link' as const,
          url: '#body',
          ...navTrackingProps,
        },
        {
          id: 'personal-care',
          label: 'Personal Care',
          title: 'Personal Care',
          type: 'link' as const,
          url: '#personal-care',
          ...navTrackingProps,
        },
        {
          id: 'body-hand-care-bundles',
          label: 'Body & Hand Care Bundles',
          title: 'Body & Hand Care Bundles',
          type: 'link' as const,
          url: '#body-hand-care-bundles',
          ...navTrackingProps,
        },
        {
          id: 'body-hand-care-gifts',
          label: 'Body & Hand Care Gifts',
          title: 'Body & Hand Care ',
          type: 'link' as const,
          url: '#body-hand-care-gifts',
          ...navTrackingProps,
        },
        {
          id: 'body-and-hand-range',
          label: 'Range',
          title: 'Range',
          type: 'nested-collection' as const,
          items: [
            {
              id: 'geranium-leaf',
              label: 'Geranium Leaf',
              title: 'Geranium Leaf',
              type: 'link' as const,
              url: '#geranium-leaf',
              ...navTrackingProps,
            },
          ],
        },
      ],
    },
    {
      image: {
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-hair.png',
        },
      },
      backgroundColor: '#dad2ce',
      backLabel: 'All Collections',
      id: 'hair',
      label: 'Hair',
      title: 'Hair',
      topLevelCollectionLabel: 'Category',
      type: 'collection' as const,
      promotion: {
        id: 'classic-hair-care-trio',
        label: 'Classic Hair Care Trio',
        title: 'Classic Hair Care Trio',
        type: 'promotion' as const,
        url: '#classic-hair-care-trio',
        heading: 'Discover',
        image: {
          altText: 'Image of Hair Care Trio',
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
          id: 'see-all-hair',
          label: 'See all Hair',
          title: 'See all Hair',
          type: 'link' as const,
          url: '#see-all-hair',
          ...navTrackingProps,
        },
        {
          id: 'cleanse',
          label: 'Cleanse',
          title: 'Cleanse',
          type: 'link' as const,
          url: '#cleanse',
          ...navTrackingProps,
        },
        {
          id: 'condition',
          label: 'Condition',
          title: 'Condition',
          type: 'link' as const,
          url: '#condition',
          ...navTrackingProps,
        },
        {
          id: 'treat',
          label: 'Treat',
          title: 'Treat',
          type: 'link' as const,
          url: '#treat',
          ...navTrackingProps,
        },
        {
          id: 'groom',
          label: 'Groom',
          title: 'Groom',
          type: 'link' as const,
          url: '#groom',
          ...navTrackingProps,
        },
      ],
    },
    {
      image: {
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-fragrance.png',
        },
      },
      backgroundColor: '#f4e9e1',
      backLabel: 'All Collections',
      id: 'fragrance',
      label: 'Fragrance',
      title: 'Fragrance',
      topLevelCollectionLabel: 'Category',
      type: 'collection' as const,
      promotion: {
        id: 'classic-hair-care-trio',
        label: 'Introducing Rōzu',
        title: 'Introducing Rōzu: a fragrance of tender intensity',
        type: 'promotion' as const,
        url: '#see-all-skin-care-card',
        heading: 'Floral, green, woody',
        image: {
          id: 'introducing-rozu-a-fragrance-of-tender-intensity',
          creative: 'Thematic Product',
          altText: 'Introducing Rōzu: a fragrance of tender intensity',
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
          id: 'see-all-frangrance',
          label: 'See all Frangrance',
          title: 'See all Frangrance',
          type: 'link' as const,
          url: '#see-all-frangrance',
          ...navTrackingProps,
        },
        {
          id: 'miraceti',
          label: 'Miraceti',
          title: 'Miraceti',
          type: 'link' as const,
          url: '#miraceti',
          ...navTrackingProps,
        },
        {
          id: 'karst',
          label: 'Karst',
          title: 'Karst',
          type: 'link' as const,
          url: '#karst',
          ...navTrackingProps,
        },
        {
          id: 'eremia',
          label: 'Erémia',
          title: 'Erémia',
          type: 'link' as const,
          url: '#eremia',
          ...navTrackingProps,
        },
        {
          id: 'rozu',
          label: 'Rōzu',
          title: 'Rōzu',
          type: 'link' as const,
          url: '#rozu',
          ...navTrackingProps,
        },
        {
          id: 'hwyl',
          label: 'Hwyl',
          title: 'Hwyl',
          type: 'link' as const,
          url: '#rozu',
          ...navTrackingProps,
        },
        {
          id: 'marrakech',
          label: 'Marrakech',
          title: 'Marrakech',
          type: 'link' as const,
          url: '#marrakech',
          ...navTrackingProps,
        },
        {
          id: 'tacit',
          label: 'Tacit',
          title: 'Tacit',
          type: 'link' as const,
          url: '#tacit',
          ...navTrackingProps,
        },
        {
          id: 'fragrance-family',
          label: 'Fragrance Family',
          title: 'Fragrance Family',
          type: 'nested-collection' as const,
          items: [
            {
              id: 'floral',
              label: 'Floral',
              title: 'Floral',
              type: 'link' as const,
              url: '#floral',
              ...navTrackingProps,
            },
            {
              id: 'fresh',
              label: 'Fresh',
              title: 'Fresh',
              type: 'link' as const,
              url: '#fresh',
              ...navTrackingProps,
            },
            {
              id: 'woody',
              label: 'Woody',
              title: 'Woody',
              type: 'link' as const,
              url: '#woody',
              ...navTrackingProps,
            },
            {
              id: 'opulent',
              label: 'Opulent',
              title: 'Opulent',
              type: 'link' as const,
              url: '#opulent',
              ...navTrackingProps,
            },
          ],
        },
      ],
    },
    {
      image: {
        id: 'test-id',
        creative: 'Thematic Product',
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-home.png',
        },
      },
      backgroundColor: '#f6efea',
      backLabel: 'All Collections',
      id: 'home',
      label: 'Home',
      title: 'Home',
      topLevelCollectionLabel: 'Category',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-home',
          label: 'See all Home',
          title: 'See all Home',
          type: 'link' as const,
          url: '#see-all-home',
          ...navTrackingProps,
        },
        {
          id: 'literature',
          label: 'Literature',
          title: 'Literature',
          type: 'link' as const,
          url: '#literature',
          ...navTrackingProps,
        },
        {
          id: 'home-gifts',
          label: 'Home Gifts',
          title: 'Home Gifts',
          type: 'link' as const,
          url: '#home-gifts',
          ...navTrackingProps,
        },
      ],
    },
    {
      image: {
        id: 'test-id',
        creative: 'Thematic Product',
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-kits-and-travel.png',
        },
      },
      backgroundColor: '#e5eee0',
      backLabel: 'All Collections',
      id: 'kits-and-travel',
      label: 'Kits & Travel',
      title: 'Kits & Travel',
      topLevelCollectionLabel: 'Category',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-kits-and-travel',
          label: 'See all Kits & Travel',
          title: 'See all Kits & Travel',
          type: 'link' as const,
          url: '#see-all-kits-and-travel',
          ...navTrackingProps,
        },
        {
          id: 'gift-kits',
          label: 'Gift Kits',
          title: 'Gift Kits',
          type: 'link' as const,
          url: '#gift-kits',
          ...navTrackingProps,
        },
        {
          id: 'skin-care-kits',
          label: 'Skin Care Kits',
          title: 'Skin Care Kits',
          type: 'link' as const,
          url: '#skin-care-kits',
          ...navTrackingProps,
        },
        {
          id: 'body-and-hand-care-kits',
          label: 'Body & Hand Care Kits',
          title: 'Body & Hand Care Kits',
          type: 'link' as const,
          url: '#body-and-hand-care-kits',
          ...navTrackingProps,
        },
        {
          id: 'travel',
          label: 'Travel',
          title: 'Travel',
          type: 'link' as const,
          url: '#travel',
          ...navTrackingProps,
        },
      ],
    },
    {
      image: {
        id: 'test-id',
        creative: 'Thematic Product',
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-gifts.png',
        },
      },
      backgroundColor: '#e8e7db',
      backLabel: 'All Collections',
      id: 'gift-guide',
      label: 'Gifts',
      title: 'Gifts',
      topLevelCollectionLabel: 'Gift Guide',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-gifts',
          label: 'See all Gifts',
          title: 'See all Gifts',
          type: 'link' as const,
          url: '#see-all-gifts',
          ...navTrackingProps,
        },
      ],
    },
  ],
};

export { GlobalNavigationFixture, actionAccountAuthenticated };
