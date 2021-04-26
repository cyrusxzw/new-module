export namespace FooterBlockFixture {
  const actionLabel: string;
  namespace block {
    const heading: string;
    const copy: string;
  }
  namespace blockNoLink {
    const heading_1: string;
    export { heading_1 as heading };
    const copy_1: string;
    export { copy_1 as copy };
  }
  namespace navigation {
    const heading_2: string;
    export { heading_2 as heading };
    export const links: {
      text: string;
      id: string;
      url: string;
      openInANewWindow: boolean;
    }[];
  }
}
