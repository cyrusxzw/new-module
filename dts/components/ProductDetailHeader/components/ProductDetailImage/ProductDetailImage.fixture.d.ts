export namespace ProductDetailImageFixture {
  const className: string;
  const id: string;
  const theme: string;
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
