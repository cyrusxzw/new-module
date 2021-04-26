export namespace FooterFixture {
  const blocks: (
    | {
        heading: string;
        links: {
          text: string;
          id: string;
          url: string;
          openInANewWindow: boolean;
        }[];
        copy?: undefined;
        isVisibleOnTabletAndMobile?: undefined;
      }
    | {
        heading: string;
        copy: string;
        links?: undefined;
        isVisibleOnTabletAndMobile?: undefined;
      }
    | {
        heading: string;
        isVisibleOnTabletAndMobile: boolean;
        links: {
          text: string;
          id: string;
          url: string;
          openInANewWindow: boolean;
        }[];
        copy?: undefined;
      }
  )[];
  const iconLinks: {
    id: string;
    altText: string;
    icon: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    target: string;
    hasTargetInNewWindow: boolean;
  }[];
}
