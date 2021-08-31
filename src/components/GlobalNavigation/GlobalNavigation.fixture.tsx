import React from 'react';
import type { GlobalNavigationContextType } from './GlobalNavigation.types';

const GlobalNavigationFixture: GlobalNavigationContextType = {
  onClose: (): void => console.log('Clicked: close'), // eslint-disable-line no-console
  onOpen: (): void => console.log('Clicked: open'), // eslint-disable-line no-console
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
    cart: {
      dataTestRef: 'NAV_CART',
      id: 'actions-cart',
      label: 'Cart',
      onClick: (): void => console.log('Clicked: cart'), // eslint-disable-line no-console
      title: 'open the cart component',
      type: 'trigger' as const,
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
    account: {
      dataTestRef: 'NAV_LOGIN',
      id: 'actions-account',
      label: 'Log in',
      onClick: (): void => console.log('Clicked: log-in'), // eslint-disable-line no-console
      title: 'Log in',
      type: 'trigger' as const,
    },
    stores: {
      dataTestRef: 'NAV_STORES',
      id: 'actions-stores',
      label: 'Stores',
      onClick: (): void => console.log('Clicked: stores'), // eslint-disable-line no-console
      title: 'Stores',
      type: 'trigger' as const,
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
          },
          {
            id: 'foundation',
            label: 'Foundation',
            title: 'Foundation',
            type: 'link' as const,
            url: '#foundation',
          },
          {
            id: 'contact-us',
            label: 'Contact Us',
            title: 'Contact Us',
            type: 'link' as const,
            url: '#contact-us',
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
          },
          {
            id: 'products',
            label: 'Products',
            title: 'Products',
            type: 'link' as const,
            url: '#products',
          },
        ],
      },
      {
        id: 'taxonomy-of-design',
        label: 'Taxonomy of Design',
        title: 'Taxonomy of Design',
        type: 'link' as const,
        url: '#taxonomy-of-design',
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
          id: 'exfoliate',
          label: 'Exfoliate',
          title: 'Exfoliate',
          type: 'link' as const,
          url: '#exfoliate',
        },
        {
          id: 'treat-and-masque',
          label: 'Treat & Masque',
          title: 'Treat & Masque',
          type: 'link' as const,
          url: '#treat-and-masque',
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
          id: 'eyes-and-lips',
          label: 'Eys & Lips',
          title: 'Eys & Lips',
          type: 'link' as const,
          url: '#eyes-and-lips',
        },
        {
          id: 'shave',
          label: 'Shave',
          title: 'Shave',
          type: 'link' as const,
          url: '#shave',
        },
        {
          id: 'sun-care',
          label: 'Sun Care',
          title: 'Sun Care',
          type: 'link' as const,
          url: '#sun-care',
        },
        {
          id: 'skin-care-kits',
          label: 'Skin Care Kits',
          title: 'Skin Care Kits',
          type: 'link' as const,
          url: '#skin-care-kits',
        },
        {
          id: 'skin-care-bundles',
          label: 'Skin Care Bundles',
          title: 'Skin Care Bundles',
          type: 'link' as const,
          url: '#skin-care-bundles',
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
            {
              id: 'oily',
              label: 'Oily',
              title: 'Oily',
              type: 'link' as const,
              url: '#oily',
            },
            {
              id: 'combination',
              label: 'Combination',
              title: 'Combination',
              type: 'link' as const,
              url: '#combination',
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
            },
            {
              id: 'range-skin-care-plus',
              label: 'Skin Care +',
              title: 'Skin Care +',
              type: 'link' as const,
              url: '#range-skin-care-plus',
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
          id: 'hand',
          label: 'Hand',
          title: 'Hand',
          type: 'link' as const,
          url: '#hand',
        },
        {
          id: 'body',
          label: 'Body',
          title: 'Body',
          type: 'link' as const,
          url: '#body',
        },
        {
          id: 'personal-care',
          label: 'Personal Care',
          title: 'Personal Care',
          type: 'link' as const,
          url: '#personal-care',
        },
        {
          id: 'body-hand-care-bundles',
          label: 'Body & Hand Care Bundles',
          title: 'Body & Hand Care Bundles',
          type: 'link' as const,
          url: '#body-hand-care-bundles',
        },
        {
          id: 'body-hand-care-gifts',
          label: 'Body & Hand Care Gifts',
          title: 'Body & Hand Care ',
          type: 'link' as const,
          url: '#body-hand-care-gifts',
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
        },
        {
          id: 'cleanse',
          label: 'Cleanse',
          title: 'Cleanse',
          type: 'link' as const,
          url: '#cleanse',
        },
        {
          id: 'condition',
          label: 'Condition',
          title: 'Condition',
          type: 'link' as const,
          url: '#condition',
        },
        {
          id: 'treat',
          label: 'Treat',
          title: 'Treat',
          type: 'link' as const,
          url: '#treat',
        },
        {
          id: 'groom',
          label: 'Groom',
          title: 'Groom',
          type: 'link' as const,
          url: '#groom',
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
      type: 'collection' as const,
      promotion: {
        id: 'classic-hair-care-trio',
        label: 'Introducing Rōzu',
        title: 'Introducing Rōzu: a fragrance of tender intensity',
        type: 'promotion' as const,
        url: '#see-all-skin-care-card',
        heading: 'Floral, green, woody',
        image: {
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
        },
        {
          id: 'miraceti',
          label: 'Miraceti',
          title: 'Miraceti',
          type: 'link' as const,
          url: '#miraceti',
        },
        {
          id: 'karst',
          label: 'Karst',
          title: 'Karst',
          type: 'link' as const,
          url: '#karst',
        },
        {
          id: 'eremia',
          label: 'Erémia',
          title: 'Erémia',
          type: 'link' as const,
          url: '#eremia',
        },
        {
          id: 'rozu',
          label: 'Rōzu',
          title: 'Rōzu',
          type: 'link' as const,
          url: '#rozu',
        },
        {
          id: 'hwyl',
          label: 'Hwyl',
          title: 'Hwyl',
          type: 'link' as const,
          url: '#rozu',
        },
        {
          id: 'marrakech',
          label: 'Marrakech',
          title: 'Marrakech',
          type: 'link' as const,
          url: '#marrakech',
        },
        {
          id: 'tacit',
          label: 'Tacit',
          title: 'Tacit',
          type: 'link' as const,
          url: '#tacit',
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
            },
            {
              id: 'fresh',
              label: 'Fresh',
              title: 'Fresh',
              type: 'link' as const,
              url: '#fresh',
            },
            {
              id: 'woody',
              label: 'Woody',
              title: 'Woody',
              type: 'link' as const,
              url: '#woody',
            },
            {
              id: 'opulent',
              label: 'Opulent',
              title: 'Opulent',
              type: 'link' as const,
              url: '#opulent',
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
            './assets/images/GlobalNavigation/collection-creative-home.png',
        },
      },
      backgroundColor: '#f6efea',
      backLabel: 'All Collections',
      id: 'home',
      label: 'Home',
      title: 'Home',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-home',
          label: 'See all Home',
          title: 'See all Home',
          type: 'link' as const,
          url: '#see-all-home',
        },
        {
          id: 'literature',
          label: 'Literature',
          title: 'Literature',
          type: 'link' as const,
          url: '#literature',
        },
        {
          id: 'home-gifts',
          label: 'Home Gifts',
          title: 'Home Gifts',
          type: 'link' as const,
          url: '#home-gifts',
        },
      ],
    },
    {
      image: {
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
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-kits-and-travel',
          label: 'See all Kits & Travel',
          title: 'See all Kits & Travel',
          type: 'link' as const,
          url: '#see-all-kits-and-travel',
        },
        {
          id: 'gift-kits',
          label: 'Gift Kits',
          title: 'Gift Kits',
          type: 'link' as const,
          url: '#gift-kits',
        },
        {
          id: 'skin-care-kits',
          label: 'Skin Care Kits',
          title: 'Skin Care Kits',
          type: 'link' as const,
          url: '#skin-care-kits',
        },
        {
          id: 'body-and-hand-care-kits',
          label: 'Body & Hand Care Kits',
          title: 'Body & Hand Care Kits',
          type: 'link' as const,
          url: '#body-and-hand-care-kits',
        },
        {
          id: 'travel',
          label: 'Travel',
          title: 'Travel',
          type: 'link' as const,
          url: '#travel',
        },
      ],
    },
    {
      image: {
        altText: 'alt text',
        sizes: {
          large:
            './assets/images/GlobalNavigation/collection-creative-gifts.png',
        },
      },
      backgroundColor: '#e8e7db',
      backLabel: 'All Collections',
      topLevelCollectionLabel: 'Gift Guide',
      id: 'gift-guide',
      label: 'Gifts',
      title: 'Gifts',
      type: 'collection' as const,
      items: [
        {
          id: 'see-all-gifts',
          label: 'See all Gifts',
          title: 'See all Gifts',
          type: 'link' as const,
          url: '#see-all-gifts',
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
