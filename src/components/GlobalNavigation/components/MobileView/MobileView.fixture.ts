const MobileViewFixture = {
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
  header: {
    logo: {
      url: '#home',
      label: 'home',
      title: 'link to the home page',
    },
    search: {
      onClick: (): void => console.log('Clicked: search'), // eslint-disable-line no-console
      label: 'search',
      title: 'open the search component',
    },
    cart: {
      label: 'Cart',
      onClick: (): void => console.log('Clicked: cart'), // eslint-disable-line no-console
      title: 'open the cart component',
    },
    menu: {
      openLabel: 'open the menu',
      closeLabel: 'close the menu',
      openTitle: 'click to open the menu',
      closeTitle: 'click to close the menu',
    },
  },
  secondaryItems: [
    {
      id: 'footer-read',
      label: 'Read',
      onClick: (): void => console.log('Clicked: footer-read'), // eslint-disable-line no-console
      title: 'Read',
      type: 'trigger' as const,
      dataTestRef: 'NAV_READ',
    },
    {
      id: 'footer-log-in',
      label: 'Log in',
      onClick: (): void => console.log('Clicked: footer-log-in'), // eslint-disable-line no-console
      title: 'Log in',
      type: 'trigger' as const,
      dataTestRef: 'NAV_LOGIN',
    },
    {
      id: 'footer-stores',
      label: 'Stores',
      onClick: (): void => console.log('Clicked: footer-stores'), // eslint-disable-line no-console
      title: 'Stores',
      type: 'trigger' as const,
      dataTestRef: 'NAV_VISIT',
    },
    {
      id: 'live-assistance',
      label: 'Live Assistance',
      onClick: (): void => console.log('Clicked: live-assistance'), // eslint-disable-line no-console
      title: 'Live Assistance',
      type: 'trigger' as const,
      dataTestRef: 'NAV_LIVE_ASSISTANCE',
    },
  ],
  items: [
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

export { MobileViewFixture };
