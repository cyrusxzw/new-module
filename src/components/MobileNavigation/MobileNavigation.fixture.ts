const MobileNavigationFixture = {
  secondaryItems: [
    {
      id: 'footer-stores',
      label: 'Stores',
      title: 'Stores',
      type: 'link' as const,
      url: '#footer-stores',
    },
    {
      id: 'footer-login',
      label: 'Login',
      onClick: () => undefined,
      title: 'Login',
      type: 'trigger' as const,
    },
    {
      id: 'footer-contact',
      label: 'Contact',
      title: 'Contact',
      type: 'link' as const,
      url: '#footer-contact',
    },
    {
      id: 'footer-sign-up',
      label: 'Sign up',
      onClick: () => undefined,
      title: 'Sign up',
      type: 'trigger' as const,
    },
  ],
  items: [
    {
      id: 'skin-care',
      label: 'Skin Care',
      title: 'Skin Care',
      type: 'collection' as const,
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

export { MobileNavigationFixture };
