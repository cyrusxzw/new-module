const MobileNavigationFixture = {
  secondaryItems: [
    {
      label: 'Stores',
      title: 'Stores',
      id: 'footer-stores',
      url: '#footer-stores',
      type: 'link' as const,
    },
    {
      label: 'Login',
      title: 'Login',
      id: 'footer-login',
      onClick: () => undefined,
      type: 'trigger' as const,
    },
    {
      label: 'Contact',
      title: 'Contact',
      id: 'footer-contact',
      url: '#footer-contact',
      type: 'link' as const,
    },
    {
      label: 'Sign up',
      title: 'Sign up',
      id: 'footer-sign-up',
      onClick: () => undefined,
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
          label: 'See all Skin Care',
          title: 'See all Skin Care',
          id: 'see-all-skin-care',
          url: '#see-all-skin-care',
          type: 'link' as const,
        },
        {
          label: 'Cleanse',
          title: 'Cleanse',
          id: 'cleanse',
          url: '#cleanse',
          type: 'link' as const,
        },
        {
          label: 'Tone',
          title: 'Tone',
          id: 'tone',
          url: '#tone',
          type: 'link' as const,
        },
        {
          label: 'Hydrate',
          title: 'Hydrate',
          id: 'hydrate',
          url: '#hydrate',
          type: 'link' as const,
        },
        {
          type: 'nested-collection' as const,
          id: 'by-skin-type',
          label: 'By Skin Type',
          title: 'By Skin Type',
          items: [
            {
              label: 'Normal',
              title: 'Normal',
              id: 'normal',
              url: '#normal',
              type: 'link' as const,
            },
            {
              label: 'Dry',
              title: 'Dry',
              id: 'dry',
              url: '#dry',
              type: 'link' as const,
            },
          ],
        },
        {
          label: 'Skin Care Gifts',
          title: 'Skin Care Gifts',
          id: 'skin-care-gifts',
          url: '#skin-care-gifts',
          type: 'link' as const,
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
          label: 'See all Body & Hand',
          title: 'See all Body & Hand',
          id: 'see-all-body-hand',
          url: '#see-all-body-hand',
          type: 'link' as const,
        },
        {
          label: 'Body & Hand Care',
          title: 'Body & Hand Care',
          id: 'body-hand-care',
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
          label: 'Body & Hand Gift Kits',
          title: 'Body & Hand Gift Kits',
          id: 'body-hand-gift-kits',
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
