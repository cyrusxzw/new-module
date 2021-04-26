export namespace TwoColumnListFixture {
  const leftColumn: {
    id: string;
    heading: string;
    subHeading: string;
    items: {
      id: string;
      text: string;
      url: string;
    }[];
  }[];
  const rightColumn: {
    id: string;
    heading: string;
    subHeading: string;
    items: (
      | {
          id: string;
          text: string;
          url?: undefined;
        }
      | {
          id: string;
          text: string;
          url: string;
        }
    )[];
  }[];
}
