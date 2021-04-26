export namespace ContentHubArticleFixture {
  const id: string;
  const category: string;
  const dataTestRef: string;
  const longTitle: string;
  namespace verticalThumbnail {
    const altText: string;
    const large: string;
    const medium: string;
    const small: string;
  }
  namespace horizontalThumbnail {
    const altText_1: string;
    export { altText_1 as altText };
    const large_1: string;
    export { large_1 as large };
    const medium_1: string;
    export { medium_1 as medium };
    const small_1: string;
    export { small_1 as small };
  }
  const uri: string;
  const readingTime: string;
  function onClick(): void;
}
