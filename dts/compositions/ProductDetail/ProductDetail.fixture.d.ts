export namespace ProductDetailFixture {
  const className: string;
  namespace product {
    const sku: string;
    const description: string;
    const cartDisclaimer: string;
    const definitionList: {
      term: string;
      id: string;
      description: string;
      isExpandable: boolean;
    }[];
    const id: string;
    const flyinPanel: string;
    const productName: string;
    const variantOptions: {
      cartDisclaimer: string;
      size: string;
      sku: string;
      price: string;
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
}
