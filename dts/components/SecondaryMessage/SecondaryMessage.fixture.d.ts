export namespace SecondaryMessageFixture {
  const className: string;
  const id: string;
  const items: (
    | {
        className: string;
        copy: string;
        heading: string;
        id: string;
        link: {
          title: string;
          url: string;
        };
      }
    | {
        className: string;
        copy: string;
        heading: string;
        id: string;
        link?: undefined;
      }
  )[];
}
