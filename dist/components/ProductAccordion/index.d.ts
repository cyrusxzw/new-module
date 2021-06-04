import { ReactNode, ReactElement } from 'react';
import { O as OnAddToCartClick } from '../../sharedChunks/AddToCartContext.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { V as Variant } from '../../sharedChunks/Variant.types';

declare type Media = {
    sizes?: {
        xSmall?: string;
        small?: string;
        medium?: string;
        large?: string;
        xLarge?: string;
    };
};
declare type Image = Media & {
    altText?: string;
};
declare type Video = Media & {
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
declare type AddToCartCopy = {
    cartAction?: string;
    updateNotification?: string;
    outOfStock?: {
        label?: string;
        title?: string;
    };
};
declare type Background = 'Colour' | 'Image' | 'Video';
declare type State = {
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
declare type ClosedState = State & {
    id?: string;
    openButtonText?: string;
};
declare type OpenState = State & {
    closeButtonText?: string;
    cta?: {
        text?: string;
        url?: string;
    };
    product: {
        variants: Variant[];
    };
};
declare type VisualState = 'compressed' | 'default' | 'expanded';
declare type ProductAccordionItem = {
    closedState?: ClosedState;
    id?: string;
    isCompressed?: boolean;
    isExpanded?: boolean;
    onPromoClick?: () => void;
    openState?: OpenState;
    theme?: Themes;
    visualState?: VisualState;
};

declare type Product = ProductAccordionItem & {
    handleAddToCart: OnAddToCartClick;
};
declare type ProductAccordionProps = {
    className?: string;
    id?: string;
    addToCartCopy?: AddToCartCopy;
    openIndex?: string;
    products: Product[];
};

declare function ProductAccordion({ id, products, addToCartCopy, }: ProductAccordionProps): ReactElement;

export { ProductAccordion as HorizontalProductDisplayAccordion, ProductAccordion };
