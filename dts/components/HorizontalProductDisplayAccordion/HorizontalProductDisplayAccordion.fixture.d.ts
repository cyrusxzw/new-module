export namespace HorizontalProductDisplayAccordionFixture {
  namespace addToCartCopy {
    const cartAction: string;
    const updateNotification: string;
    namespace outOfStock {
      const label: string;
      const title: string;
    }
  }
  const products: {
    handleAddToCart: (
      sku: any,
      addToCartDispatch: any,
      ADD_TO_CART_ACTION_TYPES: any,
    ) => Promise<void>;
    closedState: {
      addToCart: {
        cartAction: string;
        updateNotification: string;
        outOfStock: {
          label: string;
          title: string;
        };
      };
      background: string;
      backgroundColour: string;
      backgroundImage: {
        type: string;
        small: string;
        medium: string;
        large: string;
      };
      backgroundVideo: any;
      copy: string;
      eyebrow: string;
      foregroundImage: {
        altText: string;
        small: string;
        medium: string;
        large: string;
      };
      id: string;
      openButtonText: string;
      theme: string;
      title: string;
      typeface: string;
    };
    id: string;
    openState: {
      background: string;
      backgroundColour: string;
      backgroundVideo: any;
      backgroundImage: any;
      closeButtonText: string;
      copy: string;
      cta: {
        text: string;
        url: string;
      };
      eyebrow: string;
      foregroundImage: {
        altText: string;
        small: string;
        medium: string;
        large: string;
      };
      theme: string;
      title: string;
      product: {
        variants: {
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
    };
  }[];
}
