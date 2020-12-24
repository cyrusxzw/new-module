const NavigationBarFixture = {
  parentLink: {
    text: 'All Body & Hand',
    url: '/parent',
  },
  childLinks: [
    {
      text: 'Hand',
      url: '/child1',
      hasTargetInNewWindow: false,
    },
    {
      text: 'Body',
      url: '/child2',
      hasTargetInNewWindow: false,
    },
    {
      text: 'Leg',
      url: '/child3',
    },
    {
      text: 'Arm',
      url: '/child4',
      hasTargetInNewWindow: false,
    },
    {
      text: 'Google',
      url: '//google.com',
      hasTargetInNewWindow: true,
    },
    {
      text: 'Reddit',
      url: '//reddit.com',
      hasTargetInNewWindow: true,
    },
  ],
  selectedUrl: '/child3',
};

export { NavigationBarFixture };
