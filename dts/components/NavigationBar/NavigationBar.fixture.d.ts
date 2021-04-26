export namespace NavigationBarFixture {
  namespace parentLink {
    const text: string;
    const url: string;
  }
  const childLinks: (
    | {
        text: string;
        url: string;
        hasTargetInNewWindow: boolean;
      }
    | {
        text: string;
        url: string;
        hasTargetInNewWindow?: undefined;
      }
  )[];
  const selectedUrl: string;
}
