declare const AddToCartButtonFixture: {
  className: string;
  copy: {
    cartAction: string;
    updateNotification: string;
    outOfStock: {
      label: string;
      title: string;
    };
  };
  dataTestRef: string;
  isEnabled: boolean;
  isFullWidth: boolean;
  theme: string;
  product: {
    size: string;
    sku: string;
    description: string;
    cartDisclaimer: string;
    definitionList: {
      term: string;
      id: string;
      description: string;
    }[];
    id: string;
    ingredients: string;
    keyIngredient: string;
    productName: string;
    upSellProduct: {
      image: {
        altText: string;
        small: string;
      };
      name: string;
      url: string;
    };
  };
  variants: {
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
  outOfStockVariant: {
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
  alternateActionVariant: {
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
};
export { AddToCartButtonFixture };
