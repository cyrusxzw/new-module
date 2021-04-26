export namespace ProductCommerceFixture {
  namespace cta {
    const text: string;
    const url: string;
  }
  namespace copy {
    const size: string;
  }
  const description: string;
  const eyebrow: string;
  const heading: string;
  namespace image {
    const altText: string;
    namespace sizes {
      const large: string;
      const medium: string;
      const small: string;
    }
  }
  const theme: string;
  const variantOptions: (
    | {
        size: string;
        sku: string;
        price: string;
        isInStock: boolean;
        image: {
          altText: string;
          sizes: {
            large: string;
            medium: string;
            small: string;
          };
        };
        alternateAction?: undefined;
      }
    | {
        alternateAction: {
          url: string;
          label: string;
        };
        size: string;
        sku: string;
        price: string;
        isInStock: boolean;
        image: {
          altText: string;
          sizes: {
            large: string;
            medium: string;
            small: string;
          };
        };
      }
  )[];
}
