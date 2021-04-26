export namespace ContentHubArticleListFixture {
  const articles: {
    id: string;
    category: string;
    longTitle: string;
    uri: string;
    verticalThumbnail: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    horizontalThumbnail: {
      altText: string;
      large: string;
      medium: string;
      small: string;
    };
    readingTime: string;
    onClick: () => void;
  }[];
}
