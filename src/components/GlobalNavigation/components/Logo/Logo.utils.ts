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

type Dimensions = {
  width: number;
  height: number;
};

const getDimensionsByView = (view: Views): Dimensions => dimensions[view];

export { getDimensionsByView };
