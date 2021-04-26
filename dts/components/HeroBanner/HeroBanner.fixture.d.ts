/// <reference types="react" />
declare const HeroBannerFixture: {
  copy: {
    default: {
      eyebrow: string;
      heading: string;
      subHeading: string;
      description: string;
    };
    wideHeader: {
      eyebrow: string;
      heading: string;
      description: JSX.Element;
    };
  };
  image: {
    default: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    fiftyFifty: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    articleHeader: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    wideHeader: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    foreground: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
  };
  linkButtonGroup: {
    textAlign: string;
    hasFitContent: boolean;
    children: JSX.Element;
  };
  hyperlink: {
    style: string;
    title: string;
    url: string;
    children: string;
  };
  subNav: {
    links: {
      id: string;
      style: string;
      children: string;
      url: string;
    }[];
  };
  video: {
    source: string;
  };
};
export { HeroBannerFixture };
