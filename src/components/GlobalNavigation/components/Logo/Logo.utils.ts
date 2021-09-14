const dimensions = {
  mobile: {
    width: 70,
    height: 22,
  },
  tablet: {
    width: 80,
    height: 30,
  },
  desktop: {
    width: 120,
    height: 40,
  },
  none: {
    width: 0,
    height: 0,
  },
};

type Views = 'none' | 'mobile' | 'tablet' | 'desktop';

const getDimensionsByView = (view: Views) => dimensions[view];

export { getDimensionsByView };
