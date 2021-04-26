export namespace StoreDetailFixture {
  namespace storeImage {
    const altText: string;
    const large: string;
    const medium: string;
    const small: string;
  }
  namespace doubleMedia {
    namespace imageOne {
      export const type: string;
      const altText_1: string;
      export { altText_1 as altText };
      const large_1: string;
      export { large_1 as large };
      const medium_1: string;
      export { medium_1 as medium };
      const small_1: string;
      export { small_1 as small };
    }
    namespace imageTwo {
      const type_1: string;
      export { type_1 as type };
      const altText_2: string;
      export { altText_2 as altText };
      const large_2: string;
      export { large_2 as large };
      const medium_2: string;
      export { medium_2 as medium };
      const small_2: string;
      export { small_2 as small };
    }
  }
  const slides: {
    image: {
      altText: string;
      small: string;
      medium: string;
      large: string;
    };
  }[];
}
