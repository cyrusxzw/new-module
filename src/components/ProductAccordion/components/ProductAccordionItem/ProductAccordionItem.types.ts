import type { ReactNode, ForwardedRef } from 'react';
import type { Themes, Variant } from '~/types';

type Media = {
  sizes?: {
    xSmall?: string;
    small?: string;
    medium?: string;
    large?: string;
    xLarge?: string;
  };
};

type Image = Media & { altText?: string };

type Video = Media & {
  fallbackImage?: {
    copy?: {
      altText?: string;
    };
    sizes?: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
};

type AddToCartCopy = {
  cartAction?: string;
  updateNotification?: string;
  outOfStock?: {
    label?: string;
    title?: string;
  };
};

type Background = 'Colour' | 'Image' | 'Video';

type State = {
  background?: Background;
  backgroundColour?: string;
  backgroundImage?: Image;
  backgroundVideo?: Video;
  copy?: ReactNode;
  eyebrow?: string;
  foregroundImage?: Image;
  hasSerifFont?: boolean;
  theme?: Themes;
  title?: string;
};

type ClosedState = State & {
  id?: string;
  openButtonText?: string;
};

type OpenState = State & {
  closeButtonText?: string;
  cta?: {
    text?: string;
    url?: string;
  };
  product: {
    variants: Variant[];
  };
};

type VisualState = 'compressed' | 'default' | 'expanded';

type ProductAccordionItem = {
  closedState?: ClosedState;
  id?: string;
  isCompressed?: boolean;
  isExpanded?: boolean;
  onPromoClick?: () => void;
  openState?: OpenState;
  theme?: Themes;
  visualState?: VisualState;
};

type ToggleAccordion = (index: number, isOpening: boolean) => any;

type ProductAccordionItemProps = ProductAccordionItem & {
  addToCartCopy?: AddToCartCopy;
  callbackWithRef?: (ref: ForwardedRef<HTMLDivElement>) => void;
  index?: number;
  resetAccordion?: () => void;
  toggleAccordion?: ToggleAccordion;
};

export type {
  ProductAccordionItemProps,
  AddToCartCopy,
  ProductAccordionItem,
  ToggleAccordion,
};
