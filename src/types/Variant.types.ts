type Variant = {
  alternateAction?: {
    url?: string;
    label?: string;
  };
  cartDisclaimer?: string;
  hasAgeVerificationRequirement?: boolean;
  id?: string;
  isInStock: boolean;
  isSellable?: boolean;
  image?: {
    altText?: string;
    sizes?: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
  price: string;
  size: string;
  sku: string;
  tracking?: any;
};

export type { Variant };
