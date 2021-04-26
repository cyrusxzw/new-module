export namespace ProductDetailHeaderFixture {
  namespace breadcrumbs {
    const items: {
      label: string;
      id: string;
      url: string;
    }[];
  }
  const className: string;
  const theme: string;
  namespace product {
    const size: string;
    const sku: string;
    const description: string;
    const definitionList: {
      term: string;
      id: string;
      description: string;
      isExpandable: boolean;
    }[];
    const id: string;
    const flyinPanel: string;
    const productName: string;
    const imageSize: string;
    namespace upSellProduct {
      namespace image {
        const altText: string;
        const small: string;
      }
      const name: string;
      const url: string;
    }
    const variantOptions: {
      cartDisclaimer: string;
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
    }[];
  }
  const variantOutOfStock: {
    cartDisclaimer: string;
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
  }[];
  const variantAlternateAction: {
    alternateAction: {
      url: string;
      label: string;
    };
    cartDisclaimer: string;
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
  }[];
}
