/// <reference types="react" />
import React$1, { ReactElement, ReactNode, Dispatch, MouseEvent, CSSProperties, LegacyRef, ChangeEvent, MutableRefObject, MouseEventHandler, SetStateAction, RefObject } from 'react';
import PropTypes from 'prop-types';
import { Mode } from 'react-hook-form/dist/index.ie11';

declare type DefaultReactComponentReturn = ReactElement<any, any> | null;
declare type PropsWithChildren<P> = P & {
    children?: ReactNode;
};
declare type ComponentWithChildren<P = {}> = (props: PropsWithChildren<P>) => DefaultReactComponentReturn;
declare type ComponentWithoutChildren<P = {}> = (props: P) => DefaultReactComponentReturn;

declare type DefinitionListItem = {
    description?: ReactNode;
    id: string;
    term?: ReactNode;
};
declare type DefinitionListProps = {
    className?: string;
    hasBottomBorder?: boolean;
    isVisible?: boolean;
    items?: DefinitionListItem[];
    theme?: Themes;
};

declare type ProductDefinitionListItem = DefinitionListItem & {
    isExpandable?: boolean;
};
declare type UpSellProduct = {
    image?: {
        altText?: string;
        small?: string;
    };
    name?: string;
    url?: string;
};
declare type Product = {
    cartDisclaimer?: string;
    definitionList?: ProductDefinitionListItem[];
    description?: string;
    flyinPanel?: React.ReactNode;
    id?: string;
    image?: {
        altText?: string;
        sizes?: {
            large?: string;
            medium?: string;
            small?: string;
        };
    };
    imageSize?: string;
    productName: string;
    sku: string;
    upSellProduct?: UpSellProduct;
    variantOptions?: Variant[];
};

declare type Themes = 'dark' | 'light';

declare type Variant = {
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

declare type BreakpointNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2l' | 'x3l' | 'x4l';
declare type ViewportNames = BreakpointNames | 'xs only' | 'xs to sm only' | 'xs to md only' | 'xs to xl only' | 'sm only' | 'md only' | 'lg only' | 'lg to xl only' | 'lg to x2l only' | 'xl only';

declare type AddToCartActionType = 'fail' | 'fetching' | 'success';
declare type AddToCartAction = {
    type: AddToCartActionType;
    payload?: string;
};
declare type OnAddToCartClick = (sku: string, addToCartDispatch: Dispatch<AddToCartAction>) => any;
declare type AddToCartContextProps = {
    /**
      A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
      as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
      for an example. ___Required___
     */
    onClick?: OnAddToCartClick;
};
declare type AddToCartContextProviderType = ComponentWithChildren<AddToCartContextProps>;

type index_d_ComponentWithChildren<_0> = ComponentWithChildren<_0>;
type index_d_ComponentWithoutChildren<_0> = ComponentWithoutChildren<_0>;
type index_d_Product = Product;
type index_d_Themes = Themes;
type index_d_Variant = Variant;
type index_d_ViewportNames = ViewportNames;
type index_d_BreakpointNames = BreakpointNames;
type index_d_OnAddToCartClick = OnAddToCartClick;
declare namespace index_d {
  export {
    index_d_ComponentWithChildren as ComponentWithChildren,
    index_d_ComponentWithoutChildren as ComponentWithoutChildren,
    index_d_Product as Product,
    index_d_Themes as Themes,
    index_d_Variant as Variant,
    index_d_ViewportNames as ViewportNames,
    index_d_BreakpointNames as BreakpointNames,
    index_d_OnAddToCartClick as OnAddToCartClick,
  };
}

declare type AccordionItem = {
    content: ReactNode;
    heading: string;
    id: string;
};
declare type AccordionProps = {
    className?: string;
    id?: string;
    items?: AccordionItem[];
    theme?: Themes;
    wrapperClass?: string;
};

declare const Accordion: React$1.ForwardRefExoticComponent<AccordionProps & React$1.RefAttributes<HTMLDivElement>>;

declare type AddToCartButtonProps = {
    className?: string;
    copy?: {
        cartAction?: string;
        postTaxPrice?: string;
        updateNotification?: string;
        outOfStock?: {
            label?: string;
            title?: string;
        };
    };
    dataTestRef: string;
    isEnabled?: boolean;
    isFullWidth?: boolean;
    theme?: Themes;
};
declare type AddToCartButtonType = ComponentWithoutChildren<AddToCartButtonProps>;

declare const AddToCartButton: AddToCartButtonType;

declare type ProgressColor = 'orange' | 'green' | 'blue';
declare type AudioCopy = {
    downloadLabel?: string;
    downloadTitle?: string;
    loading?: string;
    pause?: string;
    play?: string;
    seekBackward?: string;
    seekForward?: string;
};
declare type AudioProps = {
    audioUrl?: string;
    artistName?: string;
    className?: string;
    copy?: AudioCopy;
    hasAutoPlay?: boolean;
    id?: string;
    progressColor?: ProgressColor;
    trackTitle?: string;
};
declare type AudioType = ComponentWithoutChildren<AudioProps>;

declare const Audio: AudioType;

declare type BodyCopyProps = {
    childrenClassNames?: {
        eyebrow?: string;
        heading?: string;
        subHeading?: string;
    };
    className?: string;
    content?: ReactNode;
    copy?: ReactNode;
    eyebrow?: string;
    hasFlushHeading?: boolean;
    hasSerifFontHeading?: boolean;
    heading?: string;
    id?: string;
    isHeroArticle?: boolean;
    subHeading?: string;
    theme?: Themes;
};

declare const BodyCopy: React$1.ForwardRefExoticComponent<BodyCopyProps & React$1.RefAttributes<HTMLElement>>;

declare type BreadcrumbItem = {
    label: string;
    id: string;
    url: string;
    title: string;
};
declare type BreadcrumbsProps = {
    className?: string;
    items?: BreadcrumbItem[];
    onHyperlinkClick?: (item: BreadcrumbItem) => void;
    theme?: Themes;
};
declare type BreadcrumbsType = ComponentWithoutChildren<BreadcrumbsProps>;

declare const Breadcrumbs: BreadcrumbsType;

declare type ButtonBehaviourType = 'button' | 'reset' | 'submit';
declare type ButtonProps = {
    children?: ReactNode;
    className?: string;
    dataTestRef?: string;
    id?: string;
    isAlternate?: boolean;
    isEnabled?: boolean;
    isInline?: boolean;
    onClick?: (event: MouseEvent) => void;
    tabIndex?: number;
    title?: string;
    type?: ButtonBehaviourType;
    theme?: Themes;
};

declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare type BynderWidgetProps = {
    className?: string;
    heading: string;
    id: string;
    theme?: Themes;
};
declare type BynderWidgetType = ComponentWithoutChildren<BynderWidgetProps>;

declare const BynderWidget: BynderWidgetType;

declare type ImageProps = {
    altText?: string;
    className?: string;
    cta?: {
        openInANewWindow?: boolean;
        url?: string;
    };
    id?: string;
    isFullBleedImage?: boolean;
    isLazyLoaded?: boolean;
    sizes?: {
        large?: string;
        medium?: string;
        small?: string;
        xLarge?: string;
        xSmall?: string;
    };
    style?: CSSProperties;
    type?: string;
    theme?: Themes;
};

declare type TextAlign = 'center' | 'left' | 'right';
declare type LinkStyle = 'External Button Link' | 'External No Icon Button Link' | 'External No Icon Link' | 'External Text Link' | 'Internal Button Link' | 'Internal No Icon Button Link' | 'Internal No Icon Link' | 'Internal Text Link';
declare type HyperlinkProps = {
    children: ReactNode;
    className?: string;
    dataTestRef?: string;
    hasTargetInNewWindow?: boolean;
    id?: string;
    isAlternate?: boolean;
    isDownload?: boolean;
    onClick?: (event: MouseEvent) => void;
    style?: LinkStyle;
    textAlign?: TextAlign;
    theme?: Themes;
    title?: string;
    url: string;
};

declare type CarouselIntroductionProps = {
    cta?: {
        style?: LinkStyle;
        title?: string;
        url?: string;
        text?: string;
    };
    description?: ReactNode;
    eyebrow?: string;
    heading?: string;
    theme?: Themes;
};

declare type Slide = {
    caption?: string;
    description?: string;
    heading?: string;
    id?: string;
    isLoading?: boolean;
    image: ImageProps;
    url?: string;
};
declare type CarouselProps = {
    autoplaySpeed?: number;
    className?: string;
    hasAutoplay?: boolean;
    hasFlushPagination?: boolean;
    hasFullWidthSlides?: boolean;
    hasShowCaption?: boolean;
    hasSlideCounter?: boolean;
    id?: string;
    initialSlideIndex?: number;
    introduction?: Omit<CarouselIntroductionProps, 'theme'>;
    isCompact?: boolean;
    slides?: Slide[];
    slideRefs?: LegacyRef<HTMLDivElement>[];
    theme?: Themes;
};
declare type CarouselType = ComponentWithoutChildren<CarouselProps>;

declare const Carousel: CarouselType;

declare type CheckboxProps = {
    checkboxClassName?: string;
    className?: string;
    content: string;
    contentClassName?: string;
    dataTestRef?: string;
    errorMessage?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    theme?: Themes;
};

declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLInputElement>>;

declare type Wrapper = (children: ReactNode) => ReactElement;
declare type ConditionalWrapperProps = {
    /**
     * If the condition is false, this functional component will be used instead of simply returning the children unwrapped.
     */
    alternateWrapper?: Wrapper;
    /**
     * If this boolean prop resolves to true the children prop will be wrapped in the wrapper prop.
     */
    condition: boolean;
    /**
     * A functional component that receives the children prop as an argument, `children => <div>{children}</div>`
     */
    wrapper: Wrapper;
};
declare type ConditionalWrapperType = ComponentWithChildren<ConditionalWrapperProps>;

declare const ConditionalWrapper: ConditionalWrapperType;

declare type Image = Pick<ImageProps, 'altText' | 'sizes'>;
declare type Article = {
    articleRef?: MutableRefObject<HTMLDivElement>;
    category?: string;
    horizontalThumbnail?: Image;
    id?: string;
    longTitle?: string;
    onClick?: () => void;
    readingTime?: string;
    uri?: string;
    verticalThumbnail?: Image;
};
declare type ContentHubArticleProps = Article & {
    className?: string;
    dataTestRef: string;
    isHorizontal?: boolean;
    isInFirstGroup?: boolean;
    isMenuItem?: boolean;
    isReadMore?: boolean;
};
declare type ContentHubArticleType = ComponentWithoutChildren<ContentHubArticleProps>;

declare const ContentHubArticle: ContentHubArticleType;

declare type ListArticle = Article & {
    mobileArticleRef?: MutableRefObject<HTMLDivElement>;
};
declare type ContentHubArticleListProps = {
    articles?: ListArticle[];
    className?: string;
    isFirstGroup?: boolean;
    pattern?: 0 | 1;
};
declare type ContentHubArticleListType = ComponentWithoutChildren<ContentHubArticleListProps>;

declare const ContentHubArticleList: ContentHubArticleListType;

declare const DefinitionList: React$1.ForwardRefExoticComponent<DefinitionListProps & React$1.RefAttributes<HTMLDListElement>>;

declare function DialogBanner({ className, copy, cta, hasCloseButton, heading, isVisible, message, onClose, position, theme, }: {
    className: any;
    copy: any;
    cta: any;
    hasCloseButton: any;
    heading: any;
    isVisible: any;
    message: any;
    onClose: any;
    position: any;
    theme: any;
}): JSX.Element;
declare namespace DialogBanner {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            closeButtonTitle: PropTypes.Requireable<string>;
        }>>;
        const cta: PropTypes.Requireable<object>;
        const hasCloseButton: PropTypes.Requireable<boolean>;
        const isVisible: PropTypes.Requireable<boolean>;
        const message: PropTypes.Validator<string>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const position: PropTypes.Requireable<string>;
        const theme: PropTypes.Requireable<string>;
        const heading: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        export namespace copy_1 {
            const closeButtonTitle: string;
        }
        export { copy_1 as copy };
        const cta_1: any;
        export { cta_1 as cta };
        const hasCloseButton_1: boolean;
        export { hasCloseButton_1 as hasCloseButton };
        const isVisible_1: boolean;
        export { isVisible_1 as isVisible };
        const message_1: any;
        export { message_1 as message };
        const onClose_1: any;
        export { onClose_1 as onClose };
        const position_1: string;
        export { position_1 as position };
        const theme_1: string;
        export { theme_1 as theme };
        const heading_1: any;
        export { heading_1 as heading };
    }
}

declare type ControlsProps = {
    captions?: {
        isActive?: boolean;
        onToggleClick?: () => void;
        shouldShowToggleButton?: boolean;
        copy?: {
            toggleButtonTitleOn?: string;
            toggleButtonTitleOff?: string;
        };
    };
    className?: string;
    copy?: {
        closeButtonTitle?: string;
        muteButtonTitle?: string;
        pauseButtonTitle?: string;
        playButtonTitle?: string;
        unmuteButtonTitle?: string;
    };
    hasActiveVideo?: boolean;
    hasAllowAudio?: boolean;
    hasPlayInFullScreen?: boolean;
    isMobileOrTablet?: boolean;
    isMuted?: boolean;
    isPlaying?: boolean;
    onAudioButtonClick?: (event: MouseEvent) => void;
    onCloseButtonClick?: (event?: MouseEvent) => void;
    onPlayPauseButtonClick?: (event: MouseEvent) => void;
    progress?: number;
};

declare type PosterProps = {
    className?: string;
    copy?: {
        playButtonTitle?: string;
        altText?: string;
    };
    isActive?: boolean;
    onClick?: (event: MouseEvent) => void;
    sizes?: {
        small?: string;
        medium?: string;
        large?: string;
        xLarge?: string;
        xSmall?: string;
    };
};

declare type VideoProps = Pick<ControlsProps, 'copy'> & {
    captions?: {
        copy?: ControlsProps['captions']['copy'];
        fileUrl?: string;
        isActiveOnLoad?: boolean;
        languageCode?: string;
        languageLabel?: string;
        shouldShowToggleButton?: boolean;
    };
    className?: string;
    fallbackImage?: {
        className?: string;
        copy?: {
            altText?: string;
        };
        sizes?: {
            large?: string;
            medium?: string;
            small?: string;
        };
    };
    hasAllowAudio?: boolean;
    hasAutoplay?: boolean;
    hasControls?: boolean;
    hasLoop?: boolean;
    hasNativeControls?: boolean;
    hasPlayInFullScreen?: boolean;
    hasSpanContent?: boolean;
    id?: string;
    isBackground?: boolean;
    /**
      `isFullWidth` is set true by default and this will allow videos to display at the correct aspect ratio.
      In the event that a different, more fluid ratio is required, set this prop to false, this will collapse the hight of the Video,
      but it will react to the height of the surrounding element.
    */
    isFullWidth?: boolean;
    /**
      This prop negates the 16:9 aspect ratio on tablet so Full Width Hero Videos fill any available space.
     */
    isHeroFullWidth?: boolean;
    isHeroFullWidthMobile?: boolean;
    isScrollBasedVideo?: boolean;
    poster?: PosterProps;
    sizes?: {
        large?: string;
        medium?: string;
        small?: string;
        xLarge?: string;
        xSmall?: string;
    };
};

declare type MediaType = 'video' | 'image' | 'scrollbasedvideo';
declare type MediaBlockProps = {
    altText?: string;
    caption?: ReactNode;
    fallbackImage?: VideoProps['fallbackImage'];
    heading?: string;
    link?: {
        hasTargetInNewWindow?: boolean;
        text?: string;
        type?: string;
        url: string;
    };
    poster?: VideoProps['poster'];
    type?: MediaType;
    theme?: Themes;
    sizes: {
        large?: string;
        medium?: string;
        small?: string;
        xLarge?: string;
        xSmall?: string;
    };
};

declare type DoubleMediaProps = {
    className?: string;
    mediaOne?: MediaBlockProps;
    mediaTwo?: MediaBlockProps;
    theme?: Themes;
};
declare type DoubleMediaType = ComponentWithoutChildren<DoubleMediaProps>;

declare const DoubleMedia: DoubleMediaType;

declare type FigureProps = {
    caption?: string;
    className?: string;
    hasCaptionBorder?: boolean;
    hasCaptionOffset?: boolean;
    id?: string;
    theme?: string;
    foo?: boolean;
};
declare type FigureType = ComponentWithChildren<FigureProps>;

declare const Figure: FigureType;

declare type FlyinPanelProps = {
    children: React.ReactNode;
    className?: string;
    copy?: {
        close?: string;
    };
    heading?: string;
    isVisible?: boolean;
    onClose: () => void;
    theme?: Themes;
};
declare type FlyinPanelType = ComponentWithChildren<FlyinPanelProps>;

declare const FlyinPanel: FlyinPanelType;

declare function FooterBlock({ className, copy, heading, headingClassName, isVisibleOnTabletAndMobile, links, listClassName, listItemClassName, theme, }: {
    className: any;
    copy: any;
    heading: any;
    headingClassName: any;
    isVisibleOnTabletAndMobile: any;
    links: any;
    listClassName: any;
    listItemClassName: any;
    theme: any;
}): JSX.Element;
declare namespace FooterBlock {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const heading: PropTypes.Requireable<string>;
        const headingClassName: PropTypes.Requireable<string>;
        const isVisibleOnTabletAndMobile: PropTypes.Requireable<boolean>;
        const links: PropTypes.Requireable<any[]>;
        const listClassName: PropTypes.Requireable<string>;
        const listItemClassName: PropTypes.Requireable<string>;
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const copy_1: any;
        export { copy_1 as copy };
        const heading_1: any;
        export { heading_1 as heading };
        const headingClassName_1: any;
        export { headingClassName_1 as headingClassName };
        const isVisibleOnTabletAndMobile_1: boolean;
        export { isVisibleOnTabletAndMobile_1 as isVisibleOnTabletAndMobile };
        const links_1: any;
        export { links_1 as links };
        const listClassName_1: any;
        export { listClassName_1 as listClassName };
        const listItemClassName_1: any;
        export { listItemClassName_1 as listItemClassName };
        const theme_1: string;
        export { theme_1 as theme };
    }
}

declare type TextInputV2Props = {
    autoComplete?: string;
    classNames?: {
        errorMessage?: string;
        input?: string;
        label?: string;
        wrapper?: string;
    };
    dataTestRef?: string;
    errorMessage?: string;
    id?: string;
    isEnabled?: boolean;
    label: string;
    max?: number;
    maxLength?: number;
    min?: number;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    theme?: Themes;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
    value?: string;
};

declare const TextInputV2: React$1.ForwardRefExoticComponent<TextInputV2Props & React$1.RefAttributes<HTMLInputElement>>;

declare const FullWidthHeroScroll: React$1.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React$1.RefAttributes<any>>;

declare function GoogleMap({ center, className, copy, customMarker, hasMarkerIndexes, id, initialZoom, places, }: {
    center: any;
    className: any;
    copy: any;
    customMarker: any;
    hasMarkerIndexes: any;
    id: any;
    initialZoom: any;
    places: any;
}): JSX.Element;
declare namespace GoogleMap {
    namespace propTypes {
        const center: PropTypes.Validator<PropTypes.InferProps<{
            lat: PropTypes.Requireable<number>;
            lng: PropTypes.Requireable<number>;
        }>>;
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            directions: PropTypes.Requireable<string>;
            storeLocator: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                message: PropTypes.Requireable<string>;
                title: PropTypes.Requireable<string>;
                url: PropTypes.Requireable<string>;
            }>>;
            openingHours: PropTypes.Requireable<PropTypes.InferProps<{
                alternateHoursNote: PropTypes.Requireable<string>;
                heading: PropTypes.Requireable<string>;
            }>>;
        }>>;
        const customMarker: PropTypes.Requireable<PropTypes.InferProps<{
            lat: PropTypes.Requireable<number>;
            lng: PropTypes.Requireable<number>;
            type: PropTypes.Requireable<string>;
        }>>;
        const hasMarkerIndexes: PropTypes.Requireable<boolean>;
        const id: PropTypes.Requireable<string>;
        const initialZoom: PropTypes.Requireable<number>;
        const places: PropTypes.Requireable<PropTypes.InferProps<{
            lat: PropTypes.Requireable<number>;
            lng: PropTypes.Requireable<number>;
            id: PropTypes.Requireable<string>;
            storeName: PropTypes.Requireable<string>;
            storeType: PropTypes.Requireable<string>;
            address: PropTypes.Requireable<string>;
            phoneNumber: PropTypes.Requireable<string>;
            openingHours: PropTypes.Requireable<any[]>;
        }>[]>;
    }
    namespace defaultProps {
        const center_1: {};
        export { center_1 as center };
        const className_1: any;
        export { className_1 as className };
        export namespace copy_1 {
            const directions: string;
            namespace storeLocator {
                const label: string;
                const message: string;
                const title: string;
                const url: string;
            }
            namespace openingHours {
                const alternateHoursNote: string;
                const heading: string;
            }
        }
        export { copy_1 as copy };
        const customMarker_1: any;
        export { customMarker_1 as customMarker };
        const hasMarkerIndexes_1: boolean;
        export { hasMarkerIndexes_1 as hasMarkerIndexes };
        const id_1: any;
        export { id_1 as id };
        const initialZoom_1: number;
        export { initialZoom_1 as initialZoom };
        const places_1: any[];
        export { places_1 as places };
    }
}

declare type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6';
declare type HeadingSizes = 'xXSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
declare type HeadingProps = {
    className?: string;
    hasMediumWeightFont?: boolean;
    hasSerifFont?: boolean;
    id?: string;
    isFlush?: boolean;
    level: HeadingLevels;
    size: HeadingSizes;
    theme?: Themes;
};
declare type HeadingType = ComponentWithChildren<HeadingProps>;

declare const Heading: HeadingType;

declare type HeroBannerMediaAnchorPoints = 'center' | 'left' | 'right' | 'bottom' | 'top';
declare type HeroBannerVariations = 'article-header' | 'default' | 'fifty-fifty' | 'full-display' | 'landing-header' | 'wide-header';
declare type HeroBannerCopy = {
    description?: ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
};
declare type HeroBannerProps = {
    backgroundColor?: string;
    className?: string;
    containMedia?: HeroBannerMediaAnchorPoints;
    content?: ReactNode;
    copy?: HeroBannerCopy;
    foregroundImage?: ReactElement;
    foregroundImageLink?: {
        onClick?: () => void;
        url?: string;
        title?: string;
    };
    hasSerifFontHeading?: boolean;
    hasTopOffset?: boolean;
    media: ReactElement;
    theme?: Themes;
    variation?: HeroBannerVariations;
};

declare const HeroBanner: React$1.ForwardRefExoticComponent<HeroBannerProps & React$1.RefAttributes<HTMLDivElement>>;

declare type HiddenProps = {
    children: React.ReactNode;
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
    isXLarge?: boolean;
};
declare type HiddenType = ComponentWithChildren<HiddenProps>;

declare const Hidden: HiddenType;

declare type Media = {
    sizes?: {
        xSmall?: string;
        small?: string;
        medium?: string;
        large?: string;
        xLarge?: string;
    };
};
declare type Image$1 = Media & {
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
    backgroundImage?: Image$1;
    backgroundVideo?: Video;
    copy?: ReactNode;
    eyebrow?: string;
    foregroundImage?: Image$1;
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

declare type Product$1 = ProductAccordionItem & {
    handleAddToCart: OnAddToCartClick;
};
declare type ProductAccordionProps = {
    className?: string;
    id?: string;
    addToCartCopy?: AddToCartCopy;
    openIndex?: string;
    products: Product$1[];
};
declare type ProductAccordionType = ComponentWithoutChildren<ProductAccordionProps>;

declare const ProductAccordion: ProductAccordionType;

declare const Hyperlink: React$1.ForwardRefExoticComponent<HyperlinkProps & React$1.RefAttributes<HTMLAnchorElement>>;

declare type SvgName = '' | 'rightArrow' | 'warning' | 'rightUpArrow' | 'downArrow' | 'plusAndCloseWithCircle' | 'chevron' | 'close' | 'play' | 'pause' | 'muted' | 'unmuted' | 'aesop' | 'download' | 'seek' | 'scrolldown';
declare type IconProps = {
    className?: string;
    dataRef?: string;
    height?: number;
    isActive?: boolean;
    name: SvgName;
    tabIndex?: number;
    theme?: Themes;
    title?: string;
    width?: number;
};
declare type IconType = ComponentWithoutChildren<IconProps>;

declare const Icon: IconType;

declare function IconLink({ altText, className, dataTestRef, hasTargetInNewWindow, height, icon, iconImageClassName, target, width, }: {
    altText: any;
    className: any;
    dataTestRef: any;
    hasTargetInNewWindow: any;
    height: any;
    icon: any;
    iconImageClassName: any;
    target: any;
    width: any;
}): JSX.Element;
declare namespace IconLink {
    namespace propTypes {
        const altText: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const dataTestRef: PropTypes.Requireable<string>;
        const hasTargetInNewWindow: PropTypes.Requireable<boolean>;
        const height: PropTypes.Requireable<number>;
        const icon: PropTypes.Requireable<object>;
        const iconImageClassName: PropTypes.Requireable<string>;
        const target: PropTypes.Requireable<string>;
        const width: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        const altText_1: any;
        export { altText_1 as altText };
        const className_1: any;
        export { className_1 as className };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const hasTargetInNewWindow_1: boolean;
        export { hasTargetInNewWindow_1 as hasTargetInNewWindow };
        const height_1: number;
        export { height_1 as height };
        const icon_1: any;
        export { icon_1 as icon };
        const iconImageClassName_1: any;
        export { iconImageClassName_1 as iconImageClassName };
        const target_1: any;
        export { target_1 as target };
        const width_1: number;
        export { width_1 as width };
    }
}

declare const Image$2: React$1.ForwardRefExoticComponent<ImageProps & React$1.RefAttributes<HTMLImageElement>>;

declare type Slide$1 = {
    caption?: string;
    id?: string;
    image: ImageProps;
};
declare type ImageCarouselProps = {
    autoplaySpeed?: number;
    className?: string;
    hasAutoplay?: boolean;
    hasFlushPagination?: boolean;
    isCompact?: boolean;
    slides?: Slide$1[];
    theme?: Themes;
};
declare type ImageCarouselType = ComponentWithoutChildren<ImageCarouselProps>;

declare const ImageCarousel: ImageCarouselType;

declare type ListItem = {
    content: React.ReactNode;
    id: string;
};
declare type ListProps = {
    className?: string;
    items?: ListItem[];
    listItemClassName?: string;
    theme?: Themes;
};

declare type KitListProps = {
    className?: string;
    isVisible?: boolean;
    items: ListItem[];
    theme?: Themes;
};

/** @TODO replace the `any` in the forwardRef type
 * Following our forwardRef tyings, this first value should be HTMLUListElement (based on typeof List)
 * However, due to https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012
 * this does not work, and if List's return type changes, this static type will break
 */
declare const KitList: React$1.ForwardRefExoticComponent<KitListProps & React$1.RefAttributes<any>>;

declare type LinkButtonGroupProps = {
    children?: JSX.Element | JSX.Element[] /** @TODO figure out how to efficiently allow only Button an Hyperlink */;
    className?: string;
    hasFitContent?: boolean;
    isFlush?: boolean;
    isFullWidth?: boolean;
    textAlign?: 'center' | 'left' | 'right';
    theme?: Themes;
};
declare type LinkButtonGroupType = (props: LinkButtonGroupProps) => ReactElement | null;

declare const LinkButtonGroup: LinkButtonGroupType;

declare const List: React$1.ForwardRefExoticComponent<ListProps & React$1.RefAttributes<HTMLUListElement>>;

declare function LoadMoreButton({ className, copy, dataTestRef, isEnabled }: {
    className: any;
    copy: any;
    dataTestRef: any;
    isEnabled: any;
}): JSX.Element;
declare namespace LoadMoreButton {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            actionLabel: PropTypes.Requireable<string>;
        }>>;
        const dataTestRef: PropTypes.Validator<string>;
        const isEnabled: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        export namespace copy_1 {
            const actionLabel: string;
        }
        export { copy_1 as copy };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const isEnabled_1: boolean;
        export { isEnabled_1 as isEnabled };
    }
}

declare type LoadingSizes = 'small' | 'medium' | 'large';
declare type LoadingProps = {
    className?: string;
    isLoading: boolean;
    shouldFillSpace?: boolean;
    size?: LoadingSizes;
    theme?: Themes;
};
declare type LoadingType = ComponentWithoutChildren<LoadingProps>;

declare const Loading: LoadingType;

declare type ContentCopy = {
    description?: React.ReactNode;
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
};

declare type ContainMedia = 'center' | 'left' | 'right';
declare type ForegroundImageLink = {
    onClick?: () => void;
    url: string;
    title: string;
};
declare type MediaWithContentProps = {
    backgroundColor?: string;
    className?: string;
    containMedia?: ContainMedia;
    content?: React.ReactNode;
    copy: ContentCopy;
    foregroundImage?: JSX.Element;
    foregroundImageLink?: ForegroundImageLink;
    hasFullWidthImage?: boolean;
    hasSerifFontHeading?: boolean;
    isReverse?: boolean;
    media: JSX.Element;
    theme?: Themes;
};

declare const MediaWithContent: React$1.ForwardRefExoticComponent<MediaWithContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare type ModalBodyCopy = {
    copy?: {
        close?: string;
    };
};

declare type ModalAndModalBodyProps = {
    className?: string;
    isVisible: boolean;
    onClose: () => void;
    theme?: Themes;
};
declare type ModalProps = ModalAndModalBodyProps & ModalBodyCopy;
declare type ModalType = ComponentWithChildren<ModalProps>;

declare const Modal: ModalType;

declare function NavigationBar({ childLinks, className, parentLink, selectedUrl }: {
    childLinks: any;
    className: any;
    parentLink: any;
    selectedUrl: any;
}): JSX.Element;
declare namespace NavigationBar {
    namespace propTypes {
        const childLinks: PropTypes.Requireable<PropTypes.InferProps<{
            hasTargetInNewWindow: PropTypes.Requireable<boolean>;
            text: PropTypes.Validator<string>;
            url: PropTypes.Validator<string>;
        }>[]>;
        const className: PropTypes.Requireable<string>;
        const parentLink: PropTypes.Requireable<PropTypes.InferProps<{
            hasTargetInNewWindow: PropTypes.Requireable<boolean>;
            text: PropTypes.Validator<string>;
            url: PropTypes.Validator<string>;
        }>>;
        const selectedUrl: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const childLinks_1: any[];
        export { childLinks_1 as childLinks };
        const className_1: any;
        export { className_1 as className };
        const parentLink_1: any;
        export { parentLink_1 as parentLink };
        const selectedUrl_1: any;
        export { selectedUrl_1 as selectedUrl };
    }
}

declare type NotificationModalProps = {
    backgroundColor?: string;
    className?: string;
    notificationMessage?: string;
};
declare type NotificationModalType = ComponentWithoutChildren<NotificationModalProps>;

declare const NotificationModal: NotificationModalType;

declare type OverlayProps = {
    className?: string;
    isVisible?: boolean;
    onClose: () => void;
};
declare type OverlayType = ComponentWithoutChildren<OverlayProps>;

declare const Overlay: OverlayType;

declare type ParagraphProps = {
    className?: string;
    hasSerifFont?: boolean;
    isFlush?: boolean;
    isHero?: boolean;
    isLarge?: boolean;
    theme?: Themes;
};
declare type ParagraphType = ComponentWithChildren<ParagraphProps>;
declare type ParagraphSetProps = {
    className?: string;
    isLarge?: boolean;
    theme?: Themes;
};
declare type ParagraphSetType = ComponentWithChildren<ParagraphSetProps>;

declare const Paragraph: ParagraphType;
declare const ParagraphSet: ParagraphSetType;

declare type TransitionTypeLabel = 'fade' | 'shiftInDown' | 'shiftInLeft' | 'shiftInUp' | 'slideDown' | 'slideRight' | 'slowFade' | 'zoom';
declare type TransitionProps = {
    children: JSX.Element;
    isActive?: boolean;
    isActiveOnMount?: boolean;
    shouldMountOnEnter?: boolean;
    shouldUnmountOnExit?: boolean;
    type?: TransitionTypeLabel;
};
declare type TransitionType = (props: TransitionProps) => ReactElement | null;

declare type HorizontalPadding = 'none' | 'small';
declare type VerticalPadding = 'none' | 'small' | 'medium' | 'large';
declare type PodiumProps = {
    backgroundColor?: string;
    children?: React.ReactNode;
    className?: string;
    'data-test-ref'?: string;
    horizontalPadding?: HorizontalPadding;
    id?: string;
    isActive?: boolean;
    isActiveOnMount?: boolean;
    isHorizontalFlushOnLarge?: boolean;
    isHorizontalFlushOnMedium?: boolean;
    isHorizontalFlushOnSmall?: boolean;
    paddingBottom?: VerticalPadding;
    paddingLeft?: HorizontalPadding;
    paddingRight?: HorizontalPadding;
    paddingTop?: VerticalPadding;
    theme?: Themes;
    transition?: TransitionTypeLabel;
    verticalPadding?: VerticalPadding;
};

declare const Podium: React$1.ForwardRefExoticComponent<PodiumProps & React$1.RefAttributes<HTMLDivElement>>;

declare type ProductCommerceProps = {
    className?: string;
    copy?: {
        addToCart?: {
            cartAction?: string;
            updateNotification?: string;
            outOfStock?: {
                label?: string;
                title?: string;
            };
        };
        size?: string;
    };
    cta?: {
        text?: string;
        url?: string;
    };
    description?: React.ReactNode;
    eyebrow?: string;
    heading?: string;
    id?: string;
    isActive?: boolean;
    onCtaClick?: () => void;
    size?: string;
    theme?: Themes;
};

declare const ProductCommerce: React$1.ForwardRefExoticComponent<ProductCommerceProps & React$1.RefAttributes<HTMLDivElement>>;

declare type ProductExtractProps = {
    dataTestRef: string;
    className?: string;
    hasBottomBorder?: boolean;
    hasTopMargin?: boolean;
    imageSize?: 'small' | 'medium';
    isVisible?: boolean;
    itemNum?: number;
    theme?: Themes;
    onHyperlinkClick?: () => void;
    product?: {
        image?: ImageProps;
        name?: string;
        url?: string;
    };
    works?: string;
};

declare const ProductExtract: React$1.ForwardRefExoticComponent<ProductExtractProps & React$1.RefAttributes<HTMLDivElement>>;

declare type Copy = {
    addToCart?: {
        cartAction?: string;
        outOfStock?: {
            label?: string;
            title?: string;
        };
        updateNotification?: string;
    };
};
declare type CallToAction = {
    clickFunction?: () => void;
    text?: string;
    url?: string;
};
declare type ProductGridItemProps = {
    className?: string;
    copy?: Copy;
    cta?: CallToAction;
    id?: string;
    info?: string;
    onCtaClick?: () => void;
    theme?: Themes;
    url?: string;
};

declare const ProductGridItem: React$1.ForwardRefExoticComponent<ProductGridItemProps & React$1.RefAttributes<HTMLDivElement>>;

declare type ProductDetailBodyCopy = {
    addToCart?: {
        cartAction?: string;
        updateNotification?: string;
        outOfStock?: {
            label?: string;
            title?: string;
        };
    };
    size?: {
        singular?: string;
        plural?: string;
    };
    upSellProductLabel?: string;
    flyinPanelHeading?: string;
};

declare type Breadcrumbs$1 = {
    items?: BreadcrumbItem[];
    theme?: Themes;
};
declare type ProductDetailHeaderProps = {
    breadcrumbs?: Breadcrumbs$1;
    className?: string;
    copy?: ProductDetailBodyCopy;
    onBreadcrumbClick?: (item: BreadcrumbItem, selectedVariant: Variant) => void;
    onFlyinOpenCloseClick?: (flyinStatus: 'open' | 'close', selectedVariant: Variant) => void;
    onUpsellClick?: () => void;
    onUpsellScrollIntoView?: () => void;
    paymentWidget?: React.ReactNode;
    theme?: Themes;
};
declare type ProductDetailHeaderType = ComponentWithoutChildren<ProductDetailHeaderProps>;

declare const ProductDetailHeader: ProductDetailHeaderType;

declare type QuoteProps = {
    author: string;
    className?: string;
    content: string;
    theme?: Themes;
};

declare const Quote: React$1.ForwardRefExoticComponent<QuoteProps & React$1.RefAttributes<HTMLDivElement>>;

declare function RadioGroup({ className, dataTestRef, errorMessage, name, onChange, options, theme, value, }: {
    className: any;
    dataTestRef: any;
    errorMessage: any;
    name: any;
    onChange: any;
    options: any;
    theme: any;
    value: any;
}): JSX.Element;
declare namespace RadioGroup {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const dataTestRef: PropTypes.Requireable<string>;
        const errorMessage: PropTypes.Requireable<string>;
        const name: PropTypes.Validator<string>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const options: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<string>;
        }>[]>;
        const theme: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const errorMessage_1: any;
        export { errorMessage_1 as errorMessage };
        const name_1: any;
        export { name_1 as name };
        const onChange_1: any;
        export { onChange_1 as onChange };
        const options_1: any[];
        export { options_1 as options };
        const theme_1: string;
        export { theme_1 as theme };
        const value_1: any;
        export { value_1 as value };
    }
}

declare function ReadMore({ articles, className }: {
    articles: any;
    className: any;
}): JSX.Element;
declare namespace ReadMore {
    namespace propTypes {
        const articles: PropTypes.Requireable<any[]>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const articles_1: any;
        export { articles_1 as articles };
        const className_1: any;
        export { className_1 as className };
    }
}

declare type MessageProps = {
    className?: string;
    copy: string;
    heading: string;
    id?: string;
    link?: {
        title: string;
        url: string;
    };
    theme?: Themes;
};

declare type SecondaryMessageProps = {
    className?: string;
    id?: string;
    items?: [MessageProps?, MessageProps?];
    theme?: Themes;
};
declare type SecondaryMessageType = ComponentWithoutChildren<SecondaryMessageProps>;

declare const SecondaryMessage: SecondaryMessageType;

declare type SectionHeadingProps = {
    childrenClassNames?: {
        eyebrow?: string;
        heading?: string;
        subHeading?: string;
    };
    className?: string;
    eyebrow?: string;
    hasSerifFontHeading?: boolean;
    heading?: string;
    id?: string;
    isFlush?: boolean;
    isOffsetPageHeading?: boolean;
    isHeroHeading?: boolean;
    isPageHeading?: boolean;
    subHeading?: ReactNode;
    theme?: Themes;
    titleFont?: 'Suisse' | 'Zapf';
};
declare type SectionHeadingType = ComponentWithoutChildren<SectionHeadingProps>;

declare const SectionHeading: SectionHeadingType;

declare type SelectOption = {
    id?: string;
    label?: string;
    value?: string;
};
declare type SelectProps = {
    className?: string;
    dataTestRef?: string;
    errorMessage?: string;
    isBlock?: boolean;
    label?: string;
    name: string;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    theme?: Themes;
    value?: string;
};

declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLSelectElement>>;

declare type HoursListItem = {
    dayName?: string;
    hours?: string;
    id?: string;
    isAlternate?: boolean;
};
declare type StoreHoursListProps = {
    alternateHoursNote?: string;
    className?: string;
    heading?: string;
    hoursList?: HoursListItem[];
    theme?: Themes;
};
declare type StoreHoursListType = ComponentWithoutChildren<StoreHoursListProps>;

declare type StoreDetailCopy = {
    location?: string;
    email?: string;
    phone?: string;
    openingHours?: string;
};
declare type StoreDetailHeaderProps = {
    alternateHoursNote?: string;
    className?: string;
    copy?: StoreDetailCopy;
    email?: string;
    location?: string;
    openingHours?: HoursListItem[];
    phone?: string;
    storeName: string;
    theme?: Themes;
};
declare type StoreDetailHeaderType = ComponentWithoutChildren<StoreDetailHeaderProps>;

declare const StoreDetailHeader: StoreDetailHeaderType;

declare const StoreHoursList: StoreHoursListType;

declare type SubNavLink = {
    children: string /** @TODO change this prop api to content or text  */;
    id?: string;
    hasTargetInNewWindow?: boolean;
    style?: LinkStyle;
    url: string;
    onClick?: (event: MouseEvent) => void;
};
declare type SubNavProps = {
    className?: string;
    id: string;
    isSelect?: boolean;
    links: SubNavLink[];
    heading?: string;
    headingClassName?: string;
    theme?: Themes;
    onSelectCallback?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

declare const SubNav: React$1.ForwardRefExoticComponent<SubNavProps & React$1.RefAttributes<HTMLElement>>;

declare function Textarea({ className, dataTestRef, defaultValue, id, isEnabled, inputRef, maxLength, name, onBlur, onChange, rows, textareaClassName, theme, value, }: {
    className: any;
    dataTestRef: any;
    defaultValue: any;
    id: any;
    isEnabled: any;
    inputRef: any;
    maxLength: any;
    name: any;
    onBlur: any;
    onChange: any;
    rows: any;
    textareaClassName: any;
    theme: any;
    value: any;
}): JSX.Element;
declare namespace Textarea {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const dataTestRef: PropTypes.Requireable<string>;
        const defaultValue: PropTypes.Requireable<string>;
        const id: PropTypes.Validator<string>;
        const isEnabled: PropTypes.Requireable<boolean>;
        const inputRef: PropTypes.Requireable<(...args: any[]) => any>;
        const maxLength: PropTypes.Requireable<number>;
        const name: PropTypes.Requireable<string>;
        const textareaClassName: PropTypes.Requireable<string>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const rows: PropTypes.Requireable<number>;
        const theme: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const defaultValue_1: any;
        export { defaultValue_1 as defaultValue };
        const id_1: any;
        export { id_1 as id };
        const isEnabled_1: boolean;
        export { isEnabled_1 as isEnabled };
        const inputRef_1: any;
        export { inputRef_1 as inputRef };
        const maxLength_1: any;
        export { maxLength_1 as maxLength };
        const name_1: any;
        export { name_1 as name };
        const textareaClassName_1: any;
        export { textareaClassName_1 as textareaClassName };
        const onBlur_1: any;
        export { onBlur_1 as onBlur };
        const onChange_1: any;
        export { onChange_1 as onChange };
        const rows_1: any;
        export { rows_1 as rows };
        const theme_1: string;
        export { theme_1 as theme };
        const value_1: any;
        export { value_1 as value };
    }
}

declare function TextInput({ className, defaultValue, hasContent, hasError, id, isEnabled, inputClassName, inputRef, label, max, min, name, type, maxLength, hasValidation, onBlur, onChange, prefixElement, theme, value, ...moreProps }: {
    [x: string]: any;
    className: any;
    defaultValue: any;
    hasContent: any;
    hasError: any;
    id: any;
    isEnabled: any;
    inputClassName: any;
    inputRef: any;
    label: any;
    max: any;
    min: any;
    name: any;
    type: any;
    maxLength: any;
    hasValidation: any;
    onBlur: any;
    onChange: any;
    prefixElement: any;
    theme: any;
    value: any;
}): JSX.Element;
declare namespace TextInput {
    const propTypes: {
        className: PropTypes.Requireable<string>;
        defaultValue: PropTypes.Requireable<string>;
        hasContent: PropTypes.Requireable<boolean>;
        hasError: PropTypes.Requireable<boolean>;
        hasValidation: PropTypes.Requireable<boolean>;
        id: PropTypes.Validator<string>;
        inputClassName: PropTypes.Requireable<string>;
        inputRef: PropTypes.Requireable<(...args: any[]) => any>;
        isEnabled: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        max: PropTypes.Requireable<number>;
        min: PropTypes.Requireable<number>;
        name: PropTypes.Requireable<string>;
        maxLength: PropTypes.Requireable<string | number>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        prefixElement: PropTypes.Requireable<PropTypes.ReactElementLike>;
        theme: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        'data-test-ref': PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string>;
    };
    const defaultProps: {
        className: any;
        defaultValue: any;
        hasContent: boolean;
        hasError: boolean;
        hasValidation: boolean;
        inputClassName: any;
        inputRef: any;
        isEnabled: boolean;
        label: any;
        max: any;
        min: any;
        name: any;
        maxLength: any;
        onBlur: any;
        onChange: any;
        prefixElement: any;
        theme: string;
        type: string;
        'data-test-ref': any;
        value: any;
    };
}

declare function TextOverFullWidthAsset({ backgroundImage, backgroundVideo, className, content, copyHeight, copySide, mediaType, }: {
    backgroundImage: any;
    backgroundVideo: any;
    className: any;
    content: any;
    copyHeight: any;
    copySide: any;
    mediaType: any;
}): JSX.Element;
declare namespace TextOverFullWidthAsset {
    namespace propTypes {
        const backgroundImage: PropTypes.Requireable<any>;
        const backgroundVideo: PropTypes.Requireable<any>;
        const className: PropTypes.Requireable<string>;
        const content: PropTypes.Validator<PropTypes.ReactNodeLike>;
        const copyHeight: PropTypes.Requireable<string>;
        const copySide: PropTypes.Requireable<string>;
        const mediaType: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const backgroundImage_1: any;
        export { backgroundImage_1 as backgroundImage };
        const backgroundVideo_1: any;
        export { backgroundVideo_1 as backgroundVideo };
        const className_1: any;
        export { className_1 as className };
        const content_1: any;
        export { content_1 as content };
        const copyHeight_1: string;
        export { copyHeight_1 as copyHeight };
        const copySide_1: string;
        export { copySide_1 as copySide };
        const mediaType_1: any;
        export { mediaType_1 as mediaType };
    }
}

declare const Transition: TransitionType;

declare type TwoColumnLayoutProps = {
    childrenClassNames?: {
        sidebar?: string;
        content?: string;
    };
    className?: string;
    content: React.ReactNode;
    hasFullWidthContent?: boolean;
    id?: string;
    isFlushOnSmall?: boolean;
    isReversed?: boolean;
    sidebar?: React.ReactNode;
    theme?: Themes;
};
declare type TwoColumnLayoutType = ComponentWithoutChildren<TwoColumnLayoutProps>;

declare const TwoColumnLayout: TwoColumnLayoutType;

/**
 * Not using HyperlinkType as url is not required here
 * @TODO openInANewWindow needs to be updated
 */
declare type HyperlinkItem = {
    id: string;
    text: string;
    style?: LinkStyle;
    url?: string;
    openInANewWindow?: boolean;
};
declare type List$1 = {
    id: string;
    heading?: string;
    subHeading?: string;
    items?: HyperlinkItem[];
};
declare type TwoColumnListProps = {
    className?: string;
    leftColumn: List$1[];
    rightColumn: List$1[];
    theme?: Themes;
};

declare const TwoColumnList: React$1.ForwardRefExoticComponent<TwoColumnListProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Video$1: React$1.ForwardRefExoticComponent<Pick<ControlsProps, "copy"> & {
    captions?: {
        copy?: {
            toggleButtonTitleOn?: string;
            toggleButtonTitleOff?: string;
        };
        fileUrl?: string;
        isActiveOnLoad?: boolean;
        languageCode?: string;
        languageLabel?: string;
        shouldShowToggleButton?: boolean;
    };
    className?: string;
    fallbackImage?: {
        className?: string;
        copy?: {
            altText?: string;
        };
        sizes?: {
            large?: string;
            medium?: string;
            small?: string;
        };
    };
    hasAllowAudio?: boolean;
    hasAutoplay?: boolean;
    hasControls?: boolean;
    hasLoop?: boolean;
    hasNativeControls?: boolean;
    hasPlayInFullScreen?: boolean;
    hasSpanContent?: boolean;
    id?: string;
    isBackground?: boolean;
    isFullWidth?: boolean;
    isHeroFullWidth?: boolean;
    isHeroFullWidthMobile?: boolean;
    isScrollBasedVideo?: boolean;
    poster?: PosterProps;
    sizes?: {
        large?: string;
        medium?: string;
        small?: string;
        xLarge?: string;
        xSmall?: string;
    };
} & React$1.RefAttributes<HTMLDivElement>>;

declare const index_d$1_Accordion: typeof Accordion;
declare const index_d$1_AddToCartButton: typeof AddToCartButton;
declare const index_d$1_Audio: typeof Audio;
declare const index_d$1_BodyCopy: typeof BodyCopy;
declare const index_d$1_Breadcrumbs: typeof Breadcrumbs;
declare const index_d$1_Button: typeof Button;
declare const index_d$1_BynderWidget: typeof BynderWidget;
declare const index_d$1_Carousel: typeof Carousel;
declare const index_d$1_Checkbox: typeof Checkbox;
declare const index_d$1_ConditionalWrapper: typeof ConditionalWrapper;
declare const index_d$1_ContentHubArticle: typeof ContentHubArticle;
declare const index_d$1_ContentHubArticleList: typeof ContentHubArticleList;
declare const index_d$1_DefinitionList: typeof DefinitionList;
declare const index_d$1_DialogBanner: typeof DialogBanner;
declare const index_d$1_DoubleMedia: typeof DoubleMedia;
declare const index_d$1_Figure: typeof Figure;
declare const index_d$1_FlyinPanel: typeof FlyinPanel;
declare const index_d$1_FooterBlock: typeof FooterBlock;
declare const index_d$1_TextInputV2: typeof TextInputV2;
declare const index_d$1_FullWidthHeroScroll: typeof FullWidthHeroScroll;
declare const index_d$1_GoogleMap: typeof GoogleMap;
declare const index_d$1_Heading: typeof Heading;
declare const index_d$1_HeroBanner: typeof HeroBanner;
declare const index_d$1_Hidden: typeof Hidden;
declare const index_d$1_ProductAccordion: typeof ProductAccordion;
declare const index_d$1_Hyperlink: typeof Hyperlink;
declare const index_d$1_Icon: typeof Icon;
declare const index_d$1_IconLink: typeof IconLink;
declare const index_d$1_ImageCarousel: typeof ImageCarousel;
declare const index_d$1_KitList: typeof KitList;
declare const index_d$1_LinkButtonGroup: typeof LinkButtonGroup;
declare const index_d$1_List: typeof List;
declare const index_d$1_LoadMoreButton: typeof LoadMoreButton;
declare const index_d$1_Loading: typeof Loading;
declare const index_d$1_MediaWithContent: typeof MediaWithContent;
declare const index_d$1_Modal: typeof Modal;
declare const index_d$1_NavigationBar: typeof NavigationBar;
declare const index_d$1_NotificationModal: typeof NotificationModal;
declare const index_d$1_Overlay: typeof Overlay;
declare const index_d$1_Paragraph: typeof Paragraph;
declare const index_d$1_ParagraphSet: typeof ParagraphSet;
declare const index_d$1_Podium: typeof Podium;
declare const index_d$1_ProductCommerce: typeof ProductCommerce;
declare const index_d$1_ProductExtract: typeof ProductExtract;
declare const index_d$1_ProductGridItem: typeof ProductGridItem;
declare const index_d$1_ProductDetailHeader: typeof ProductDetailHeader;
declare const index_d$1_Quote: typeof Quote;
declare const index_d$1_RadioGroup: typeof RadioGroup;
declare const index_d$1_ReadMore: typeof ReadMore;
declare const index_d$1_SecondaryMessage: typeof SecondaryMessage;
declare const index_d$1_SectionHeading: typeof SectionHeading;
declare const index_d$1_Select: typeof Select;
declare const index_d$1_StoreDetailHeader: typeof StoreDetailHeader;
declare const index_d$1_StoreHoursList: typeof StoreHoursList;
declare const index_d$1_SubNav: typeof SubNav;
declare const index_d$1_Textarea: typeof Textarea;
declare const index_d$1_TextInput: typeof TextInput;
declare const index_d$1_TextOverFullWidthAsset: typeof TextOverFullWidthAsset;
declare const index_d$1_Transition: typeof Transition;
declare const index_d$1_TwoColumnLayout: typeof TwoColumnLayout;
declare const index_d$1_TwoColumnList: typeof TwoColumnList;
declare namespace index_d$1 {
  export {
    index_d$1_Accordion as Accordion,
    index_d$1_AddToCartButton as AddToCartButton,
    index_d$1_Audio as Audio,
    index_d$1_BodyCopy as BodyCopy,
    index_d$1_Breadcrumbs as Breadcrumbs,
    index_d$1_Button as Button,
    index_d$1_BynderWidget as BynderWidget,
    index_d$1_Carousel as Carousel,
    index_d$1_Checkbox as Checkbox,
    index_d$1_ConditionalWrapper as ConditionalWrapper,
    index_d$1_ContentHubArticle as ContentHubArticle,
    index_d$1_ContentHubArticleList as ContentHubArticleList,
    index_d$1_DefinitionList as DefinitionList,
    index_d$1_DialogBanner as DialogBanner,
    index_d$1_DoubleMedia as DoubleMedia,
    index_d$1_Figure as Figure,
    index_d$1_FlyinPanel as FlyinPanel,
    index_d$1_FooterBlock as FooterBlock,
    index_d$1_TextInputV2 as TextInputV2,
    index_d$1_FullWidthHeroScroll as FullWidthHeroScroll,
    index_d$1_GoogleMap as GoogleMap,
    index_d$1_Heading as Heading,
    index_d$1_HeroBanner as HeroBanner,
    index_d$1_Hidden as Hidden,
    index_d$1_ProductAccordion as ProductAccordion,
    ProductAccordion as HorizontalProductDisplayAccordion,
    index_d$1_Hyperlink as Hyperlink,
    index_d$1_Icon as Icon,
    index_d$1_IconLink as IconLink,
    Image$2 as Image,
    index_d$1_ImageCarousel as ImageCarousel,
    index_d$1_KitList as KitList,
    index_d$1_LinkButtonGroup as LinkButtonGroup,
    index_d$1_List as List,
    index_d$1_LoadMoreButton as LoadMoreButton,
    index_d$1_Loading as Loading,
    index_d$1_MediaWithContent as MediaWithContent,
    index_d$1_Modal as Modal,
    index_d$1_NavigationBar as NavigationBar,
    index_d$1_NotificationModal as NotificationModal,
    index_d$1_Overlay as Overlay,
    index_d$1_Paragraph as Paragraph,
    Paragraph as P,
    index_d$1_ParagraphSet as ParagraphSet,
    index_d$1_Podium as Podium,
    index_d$1_ProductCommerce as ProductCommerce,
    index_d$1_ProductExtract as ProductExtract,
    index_d$1_ProductGridItem as ProductGridItem,
    index_d$1_ProductDetailHeader as ProductDetailHeader,
    index_d$1_Quote as Quote,
    index_d$1_RadioGroup as RadioGroup,
    index_d$1_ReadMore as ReadMore,
    index_d$1_SecondaryMessage as SecondaryMessage,
    index_d$1_SectionHeading as SectionHeading,
    index_d$1_Select as Select,
    index_d$1_StoreDetailHeader as StoreDetailHeader,
    index_d$1_StoreHoursList as StoreHoursList,
    index_d$1_SubNav as SubNav,
    index_d$1_Textarea as Textarea,
    index_d$1_TextInput as TextInput,
    index_d$1_TextOverFullWidthAsset as TextOverFullWidthAsset,
    index_d$1_Transition as Transition,
    index_d$1_TwoColumnLayout as TwoColumnLayout,
    index_d$1_TwoColumnList as TwoColumnList,
    Video$1 as Video,
  };
}

declare type FieldValidation = {
    isRequired?: {
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
    isSameAs?: {
        fieldName: string;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    };
};

declare const Checkbox$1 = "Checkbox";
declare const Select$1 = "Select";
declare const TextField = "TextField";
declare type AvailableFormFieldTypes = typeof Checkbox$1 | typeof Select$1 | typeof TextField;

declare type FieldSchema = {
    /** An initial value for the field. The value in `defaultValues` prop for the same field will take presedence */
    defaultValue?: string;
    /** The field's HTML id attribute */
    id?: string;
    /** The field's label, often used for accessibility */
    label?: string;
    /** An identifier of the field to the form */
    name: string;
    /** Needed for the Select field type, passed on as the drop down options */
    options?: SelectProps['options'];
    /** Contains properties relating to the field's appearance */
    styling?: {
        /** Corresponds to the css `flex` property. Can be a value of 1, 2 or 3 */
        flex?: number;
    };
    /** Used as the type for the TextField field type */
    subtype?: TextInputV2Props['type'];
    /** Passed to fields as `dataTestRef` */
    testRef?: string;
    /** Defines the field type */
    type: AvailableFormFieldTypes;
    /** Contains validation rules for the form field */
    validation?: FieldValidation;
};
declare type FormFieldsRow = FieldSchema[];
declare type DynamicFormProps = {
    children?: ReactNode;
    className?: string;
    defaultValues?: Record<string, string>;
    formName?: string;
    formSchema?: FormFieldsRow[];
    onSubmit: (formData: Record<string, string>) => void;
    theme?: Themes;
    validationMode?: Mode;
};

declare const DynamicForm: React$1.ForwardRefExoticComponent<DynamicFormProps & React$1.RefAttributes<HTMLFormElement>>;

declare type BreakpointValue = {
    minWidth?: number;
    maxWidth?: number;
};
declare const BREAKPOINTS: Map<BreakpointNames, BreakpointValue>;

declare const GREY_60 = "#b3ada5";
declare const HIGHLIGHT_GREEN = "#007544";
declare const HIGHLIGHT_BLUE = "#114094";
declare const HIGHLIGHT_ORANGE = "#c67330";

declare const colors_d_GREY_60: typeof GREY_60;
declare const colors_d_HIGHLIGHT_GREEN: typeof HIGHLIGHT_GREEN;
declare const colors_d_HIGHLIGHT_BLUE: typeof HIGHLIGHT_BLUE;
declare const colors_d_HIGHLIGHT_ORANGE: typeof HIGHLIGHT_ORANGE;
declare namespace colors_d {
  export {
    colors_d_GREY_60 as GREY_60,
    colors_d_HIGHLIGHT_GREEN as HIGHLIGHT_GREEN,
    colors_d_HIGHLIGHT_BLUE as HIGHLIGHT_BLUE,
    colors_d_HIGHLIGHT_ORANGE as HIGHLIGHT_ORANGE,
  };
}

declare const CLUSTER_IMAGE_PATH = "./assets/Map-cluster-icon.svg";
declare const DIRECTIONS_URL_PREFIX = "https://www.google.com/maps?saddr=Current+Location&daddr=";
declare const MARKER_TYPE: {
    PIN: string;
    PLACE: string;
};

declare const googleMaps_d_CLUSTER_IMAGE_PATH: typeof CLUSTER_IMAGE_PATH;
declare const googleMaps_d_DIRECTIONS_URL_PREFIX: typeof DIRECTIONS_URL_PREFIX;
declare const googleMaps_d_MARKER_TYPE: typeof MARKER_TYPE;
declare namespace googleMaps_d {
  export {
    googleMaps_d_CLUSTER_IMAGE_PATH as CLUSTER_IMAGE_PATH,
    googleMaps_d_DIRECTIONS_URL_PREFIX as DIRECTIONS_URL_PREFIX,
    googleMaps_d_MARKER_TYPE as MARKER_TYPE,
  };
}

declare const A = "a";

declare const html_d_A: typeof A;
declare namespace html_d {
  export {
    html_d_A as A,
  };
}

declare const EXTERNAL_BUTTON_LINK = "External Button Link";
declare const EXTERNAL_NO_ICON_BUTTON_LINK = "External No Icon Button Link";
declare const EXTERNAL_NO_ICON_TEXT_LINK = "External No Icon Link";
declare const EXTERNAL_TEXT_LINK = "External Text Link";
declare const INTERNAL_BUTTON_LINK = "Internal Button Link";
declare const INTERNAL_NO_ICON_BUTTON_LINK = "Internal No Icon Button Link";
declare const INTERNAL_NO_ICON_TEXT_LINK = "Internal No Icon Link";
declare const INTERNAL_TEXT_LINK = "Internal Text Link";

declare const hyperlinkStyleTypes_d_EXTERNAL_BUTTON_LINK: typeof EXTERNAL_BUTTON_LINK;
declare const hyperlinkStyleTypes_d_EXTERNAL_NO_ICON_BUTTON_LINK: typeof EXTERNAL_NO_ICON_BUTTON_LINK;
declare const hyperlinkStyleTypes_d_EXTERNAL_NO_ICON_TEXT_LINK: typeof EXTERNAL_NO_ICON_TEXT_LINK;
declare const hyperlinkStyleTypes_d_EXTERNAL_TEXT_LINK: typeof EXTERNAL_TEXT_LINK;
declare const hyperlinkStyleTypes_d_INTERNAL_BUTTON_LINK: typeof INTERNAL_BUTTON_LINK;
declare const hyperlinkStyleTypes_d_INTERNAL_NO_ICON_BUTTON_LINK: typeof INTERNAL_NO_ICON_BUTTON_LINK;
declare const hyperlinkStyleTypes_d_INTERNAL_NO_ICON_TEXT_LINK: typeof INTERNAL_NO_ICON_TEXT_LINK;
declare const hyperlinkStyleTypes_d_INTERNAL_TEXT_LINK: typeof INTERNAL_TEXT_LINK;
declare namespace hyperlinkStyleTypes_d {
  export {
    hyperlinkStyleTypes_d_EXTERNAL_BUTTON_LINK as EXTERNAL_BUTTON_LINK,
    hyperlinkStyleTypes_d_EXTERNAL_NO_ICON_BUTTON_LINK as EXTERNAL_NO_ICON_BUTTON_LINK,
    hyperlinkStyleTypes_d_EXTERNAL_NO_ICON_TEXT_LINK as EXTERNAL_NO_ICON_TEXT_LINK,
    hyperlinkStyleTypes_d_EXTERNAL_TEXT_LINK as EXTERNAL_TEXT_LINK,
    hyperlinkStyleTypes_d_INTERNAL_BUTTON_LINK as INTERNAL_BUTTON_LINK,
    hyperlinkStyleTypes_d_INTERNAL_NO_ICON_BUTTON_LINK as INTERNAL_NO_ICON_BUTTON_LINK,
    hyperlinkStyleTypes_d_INTERNAL_NO_ICON_TEXT_LINK as INTERNAL_NO_ICON_TEXT_LINK,
    hyperlinkStyleTypes_d_INTERNAL_TEXT_LINK as INTERNAL_TEXT_LINK,
  };
}

declare const ENTER = 13;
declare const ESCAPE = 27;

declare const keyboardCodes_d_ENTER: typeof ENTER;
declare const keyboardCodes_d_ESCAPE: typeof ESCAPE;
declare namespace keyboardCodes_d {
  export {
    keyboardCodes_d_ENTER as ENTER,
    keyboardCodes_d_ESCAPE as ESCAPE,
  };
}

declare const AESOP = "Aesop";

declare const labels_d_AESOP: typeof AESOP;
declare namespace labels_d {
  export {
    labels_d_AESOP as AESOP,
  };
}

declare const LOCATION_TYPES: {
    DEPARTMENT_STORE: string;
    SIGNATURE_STORE: string;
    STOCKIST: string;
};

declare const stores_d_LOCATION_TYPES: typeof LOCATION_TYPES;
declare namespace stores_d {
  export {
    stores_d_LOCATION_TYPES as LOCATION_TYPES,
  };
}

declare const ADDRESS_COMPANY = "ADDRESS_COMPANY";
declare const ADDRESS_COUNTRY = "ADDRESS_COUNTRY";
declare const ADDRESS_COUNTRY_CODE = "ADDRESS_COUNTRY_CODE";
declare const ADDRESS_LINE_1 = "ADDRESS_LINE_1";
declare const ADDRESS_LINE_2 = "ADDRESS_LINE_2";
declare const ADDRESS_PHONE_NUMBER = "ADDRESS_PHONE_NUMBER";
declare const ADDRESS_POSTAL_CODE = "ADDRESS_POSTAL_CODE";
declare const ADDRESS_REGION = "ADDRESS_REGION";
declare const ADDRESS_TOWN = "ADDRESS_TOWN";
declare const ADD_TO_CART_LARGE_CTA = "ADD_TO_CART_LARGE_CTA";
declare const ADD_TO_CART_SMALL_CTA = "ADD_TO_CART_SMALL_CTA";
declare const ADD_TO_CART_TEST = "ADD_TO_CART_TEST";
declare const CART_CHECKOUT_CTA = "CART_CHECKOUT_CTA";
declare const CART_CLOSE = "CART_CLOSE";
declare const CART_HEADING = "CART_HEADING";
declare const CART_PROMO_AMOUNT = "CART_PROMO_AMOUNT";
declare const CART_PROMO_CTA = "CART_PROMO_CTA";
declare const CART_PROMO_INPUT = "CART_PROMO_INPUT";
declare const CHECKOUT_BILLING_SAME_SHIPPING = "CHECKOUT_BILLING_SAME_SHIPPING";
declare const CHECKOUT_BILLING_TAX = "CHECKOUT_BILLING_TAX";
declare const CHECKOUT_CUSTOMER_EMAIL = "CHECKOUT_CUSTOMER_EMAIL";
declare const CHECKOUT_CUSTOMER_FIRST_NAME = "CHECKOUT_CUSTOMER_FIRST_NAME";
declare const CHECKOUT_CUSTOMER_GUEST_BUTTON = "CHECKOUT_CUSTOMER_GUEST_BUTTON";
declare const CHECKOUT_CUSTOMER_LAST_NAME = "CHECKOUT_CUSTOMER_LAST_NAME";
declare const CHECKOUT_CUSTOMER_PASSWORD = "CHECKOUT_CUSTOMER_PASSWORD";
declare const CHECKOUT_CUSTOMER_PREFIX = "CHECKOUT_CUSTOMER_PREFIX";
declare const CHECKOUT_CUSTOMER_SUBMIT = "CHECKOUT_CUSTOMER_SUBMIT";
declare const CHECKOUT_GIFT = "CHECKOUT_GIFT";
declare const CHECKOUT_GIFT_INSTRUCTIONS = "CHECKOUT_GIFT_INSTRUCTIONS";
declare const CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX = "CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX";
declare const CHECKOUT_GIFT_MESSAGE = "CHECKOUT_GIFT_MESSAGE";
declare const CHECKOUT_GIFT_MESSAGE_CHECKBOX = "CHECKOUT_GIFT_MESSAGE_CHECKBOX";
declare const CHECKOUT_PAYMENT_CARD = "CHECKOUT_PAYMENT_CARD";
declare const CHECKOUT_PAYMENT_CARD_HOLDER = "CHECKOUT_PAYMENT_CARD_HOLDER";
declare const CHECKOUT_PAYMENT_CVC = "CHECKOUT_PAYMENT_CVC";
declare const CHECKOUT_PAYMENT_EXPIRATION = "CHECKOUT_PAYMENT_EXPIRATION";
declare const CHECKOUT_PAYMENT_GIFTCARD_CODE = "CHECKOUT_PAYMENT_GIFTCARD_CODE";
declare const CHECKOUT_PAYMENT_GIFTCARD_PIN = "CHECKOUT_PAYMENT_GIFTCARD_PIN";
declare const CHECKOUT_PAYMENT_METHOD = "CHECKOUT_PAYMENT_METHOD";
declare const CHECKOUT_PAYMENT_SUBMIT = "CHECKOUT_PAYMENT_SUBMIT";
declare const CHECKOUT_REVIEW_SUBMIT = "CHECKOUT_REVIEW_SUBMIT";
declare const CHECKOUT_REVIEW_TOS_CHECKBOX = "CHECKOUT_REVIEW_TOS_CHECKBOX";
declare const CHECKOUT_REVIEW_TOTAL = "CHECKOUT_REVIEW_TOTAL";
declare const CHECKOUT_SAMPLES_RADIO = "CHECKOUT_SAMPLES_RADIO";
declare const CHECKOUT_SAMPLES_SUBMIT = "CHECKOUT_SAMPLES_SUBMIT";
declare const CHECKOUT_SHIPPING_METHOD = "CHECKOUT_SHIPPING_METHOD";
declare const CHECKOUT_SHIPPING_SUBMIT = "CHECKOUT_SHIPPING_SUBMIT";
declare const CONFIRMATION_ACCOUNT_BUTTON = "CONFIRMATION_ACCOUNT_BUTTON";
declare const CONTENT_HUB_LOAD_MORE_BUTTON = "CONTENT_HUB_LOAD_MORE_BUTTON";
declare const FOOTER_LINK = "FOOTER_LINK";
declare const NAV_CART = "NAV_CART";
declare const NAV_LOGIN = "NAV_LOGIN";
declare const NAV_LOGO = "NAV_LOGO";
declare const NAV_READ = "NAV_READ";
declare const NAV_SEARCH = "NAV_SEARCH";
declare const NAV_SHOP = "NAV_SHOP";
declare const NAV_SHOP_1 = "NAV_SHOP_1";
declare const NAV_SHOP_2 = "NAV_SHOP_2";
declare const NAV_SHOP_PRODUCT_CTA = "NAV_SHOP_PRODUCT_CTA";
declare const NAV_SHOP_PRODUCT_RADIO = "NAV_SHOP_PRODUCT_RADIO";
declare const NAV_VISIT = "NAV_VISIT";
declare const NAV_VISIT_CHECKBOX = "NAV_VISIT_CHECKBOX";
declare const NAV_VISIT_INPUT = "NAV_VISIT_INPUT";

declare const test_refs_d_ADDRESS_COMPANY: typeof ADDRESS_COMPANY;
declare const test_refs_d_ADDRESS_COUNTRY: typeof ADDRESS_COUNTRY;
declare const test_refs_d_ADDRESS_COUNTRY_CODE: typeof ADDRESS_COUNTRY_CODE;
declare const test_refs_d_ADDRESS_LINE_1: typeof ADDRESS_LINE_1;
declare const test_refs_d_ADDRESS_LINE_2: typeof ADDRESS_LINE_2;
declare const test_refs_d_ADDRESS_PHONE_NUMBER: typeof ADDRESS_PHONE_NUMBER;
declare const test_refs_d_ADDRESS_POSTAL_CODE: typeof ADDRESS_POSTAL_CODE;
declare const test_refs_d_ADDRESS_REGION: typeof ADDRESS_REGION;
declare const test_refs_d_ADDRESS_TOWN: typeof ADDRESS_TOWN;
declare const test_refs_d_ADD_TO_CART_LARGE_CTA: typeof ADD_TO_CART_LARGE_CTA;
declare const test_refs_d_ADD_TO_CART_SMALL_CTA: typeof ADD_TO_CART_SMALL_CTA;
declare const test_refs_d_ADD_TO_CART_TEST: typeof ADD_TO_CART_TEST;
declare const test_refs_d_CART_CHECKOUT_CTA: typeof CART_CHECKOUT_CTA;
declare const test_refs_d_CART_CLOSE: typeof CART_CLOSE;
declare const test_refs_d_CART_HEADING: typeof CART_HEADING;
declare const test_refs_d_CART_PROMO_AMOUNT: typeof CART_PROMO_AMOUNT;
declare const test_refs_d_CART_PROMO_CTA: typeof CART_PROMO_CTA;
declare const test_refs_d_CART_PROMO_INPUT: typeof CART_PROMO_INPUT;
declare const test_refs_d_CHECKOUT_BILLING_SAME_SHIPPING: typeof CHECKOUT_BILLING_SAME_SHIPPING;
declare const test_refs_d_CHECKOUT_BILLING_TAX: typeof CHECKOUT_BILLING_TAX;
declare const test_refs_d_CHECKOUT_CUSTOMER_EMAIL: typeof CHECKOUT_CUSTOMER_EMAIL;
declare const test_refs_d_CHECKOUT_CUSTOMER_FIRST_NAME: typeof CHECKOUT_CUSTOMER_FIRST_NAME;
declare const test_refs_d_CHECKOUT_CUSTOMER_GUEST_BUTTON: typeof CHECKOUT_CUSTOMER_GUEST_BUTTON;
declare const test_refs_d_CHECKOUT_CUSTOMER_LAST_NAME: typeof CHECKOUT_CUSTOMER_LAST_NAME;
declare const test_refs_d_CHECKOUT_CUSTOMER_PASSWORD: typeof CHECKOUT_CUSTOMER_PASSWORD;
declare const test_refs_d_CHECKOUT_CUSTOMER_PREFIX: typeof CHECKOUT_CUSTOMER_PREFIX;
declare const test_refs_d_CHECKOUT_CUSTOMER_SUBMIT: typeof CHECKOUT_CUSTOMER_SUBMIT;
declare const test_refs_d_CHECKOUT_GIFT: typeof CHECKOUT_GIFT;
declare const test_refs_d_CHECKOUT_GIFT_INSTRUCTIONS: typeof CHECKOUT_GIFT_INSTRUCTIONS;
declare const test_refs_d_CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX: typeof CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX;
declare const test_refs_d_CHECKOUT_GIFT_MESSAGE: typeof CHECKOUT_GIFT_MESSAGE;
declare const test_refs_d_CHECKOUT_GIFT_MESSAGE_CHECKBOX: typeof CHECKOUT_GIFT_MESSAGE_CHECKBOX;
declare const test_refs_d_CHECKOUT_PAYMENT_CARD: typeof CHECKOUT_PAYMENT_CARD;
declare const test_refs_d_CHECKOUT_PAYMENT_CARD_HOLDER: typeof CHECKOUT_PAYMENT_CARD_HOLDER;
declare const test_refs_d_CHECKOUT_PAYMENT_CVC: typeof CHECKOUT_PAYMENT_CVC;
declare const test_refs_d_CHECKOUT_PAYMENT_EXPIRATION: typeof CHECKOUT_PAYMENT_EXPIRATION;
declare const test_refs_d_CHECKOUT_PAYMENT_GIFTCARD_CODE: typeof CHECKOUT_PAYMENT_GIFTCARD_CODE;
declare const test_refs_d_CHECKOUT_PAYMENT_GIFTCARD_PIN: typeof CHECKOUT_PAYMENT_GIFTCARD_PIN;
declare const test_refs_d_CHECKOUT_PAYMENT_METHOD: typeof CHECKOUT_PAYMENT_METHOD;
declare const test_refs_d_CHECKOUT_PAYMENT_SUBMIT: typeof CHECKOUT_PAYMENT_SUBMIT;
declare const test_refs_d_CHECKOUT_REVIEW_SUBMIT: typeof CHECKOUT_REVIEW_SUBMIT;
declare const test_refs_d_CHECKOUT_REVIEW_TOS_CHECKBOX: typeof CHECKOUT_REVIEW_TOS_CHECKBOX;
declare const test_refs_d_CHECKOUT_REVIEW_TOTAL: typeof CHECKOUT_REVIEW_TOTAL;
declare const test_refs_d_CHECKOUT_SAMPLES_RADIO: typeof CHECKOUT_SAMPLES_RADIO;
declare const test_refs_d_CHECKOUT_SAMPLES_SUBMIT: typeof CHECKOUT_SAMPLES_SUBMIT;
declare const test_refs_d_CHECKOUT_SHIPPING_METHOD: typeof CHECKOUT_SHIPPING_METHOD;
declare const test_refs_d_CHECKOUT_SHIPPING_SUBMIT: typeof CHECKOUT_SHIPPING_SUBMIT;
declare const test_refs_d_CONFIRMATION_ACCOUNT_BUTTON: typeof CONFIRMATION_ACCOUNT_BUTTON;
declare const test_refs_d_CONTENT_HUB_LOAD_MORE_BUTTON: typeof CONTENT_HUB_LOAD_MORE_BUTTON;
declare const test_refs_d_FOOTER_LINK: typeof FOOTER_LINK;
declare const test_refs_d_NAV_CART: typeof NAV_CART;
declare const test_refs_d_NAV_LOGIN: typeof NAV_LOGIN;
declare const test_refs_d_NAV_LOGO: typeof NAV_LOGO;
declare const test_refs_d_NAV_READ: typeof NAV_READ;
declare const test_refs_d_NAV_SEARCH: typeof NAV_SEARCH;
declare const test_refs_d_NAV_SHOP: typeof NAV_SHOP;
declare const test_refs_d_NAV_SHOP_1: typeof NAV_SHOP_1;
declare const test_refs_d_NAV_SHOP_2: typeof NAV_SHOP_2;
declare const test_refs_d_NAV_SHOP_PRODUCT_CTA: typeof NAV_SHOP_PRODUCT_CTA;
declare const test_refs_d_NAV_SHOP_PRODUCT_RADIO: typeof NAV_SHOP_PRODUCT_RADIO;
declare const test_refs_d_NAV_VISIT: typeof NAV_VISIT;
declare const test_refs_d_NAV_VISIT_CHECKBOX: typeof NAV_VISIT_CHECKBOX;
declare const test_refs_d_NAV_VISIT_INPUT: typeof NAV_VISIT_INPUT;
declare namespace test_refs_d {
  export {
    test_refs_d_ADDRESS_COMPANY as ADDRESS_COMPANY,
    test_refs_d_ADDRESS_COUNTRY as ADDRESS_COUNTRY,
    test_refs_d_ADDRESS_COUNTRY_CODE as ADDRESS_COUNTRY_CODE,
    test_refs_d_ADDRESS_LINE_1 as ADDRESS_LINE_1,
    test_refs_d_ADDRESS_LINE_2 as ADDRESS_LINE_2,
    test_refs_d_ADDRESS_PHONE_NUMBER as ADDRESS_PHONE_NUMBER,
    test_refs_d_ADDRESS_POSTAL_CODE as ADDRESS_POSTAL_CODE,
    test_refs_d_ADDRESS_REGION as ADDRESS_REGION,
    test_refs_d_ADDRESS_TOWN as ADDRESS_TOWN,
    test_refs_d_ADD_TO_CART_LARGE_CTA as ADD_TO_CART_LARGE_CTA,
    test_refs_d_ADD_TO_CART_SMALL_CTA as ADD_TO_CART_SMALL_CTA,
    test_refs_d_ADD_TO_CART_TEST as ADD_TO_CART_TEST,
    test_refs_d_CART_CHECKOUT_CTA as CART_CHECKOUT_CTA,
    test_refs_d_CART_CLOSE as CART_CLOSE,
    test_refs_d_CART_HEADING as CART_HEADING,
    test_refs_d_CART_PROMO_AMOUNT as CART_PROMO_AMOUNT,
    test_refs_d_CART_PROMO_CTA as CART_PROMO_CTA,
    test_refs_d_CART_PROMO_INPUT as CART_PROMO_INPUT,
    test_refs_d_CHECKOUT_BILLING_SAME_SHIPPING as CHECKOUT_BILLING_SAME_SHIPPING,
    test_refs_d_CHECKOUT_BILLING_TAX as CHECKOUT_BILLING_TAX,
    test_refs_d_CHECKOUT_CUSTOMER_EMAIL as CHECKOUT_CUSTOMER_EMAIL,
    test_refs_d_CHECKOUT_CUSTOMER_FIRST_NAME as CHECKOUT_CUSTOMER_FIRST_NAME,
    test_refs_d_CHECKOUT_CUSTOMER_GUEST_BUTTON as CHECKOUT_CUSTOMER_GUEST_BUTTON,
    test_refs_d_CHECKOUT_CUSTOMER_LAST_NAME as CHECKOUT_CUSTOMER_LAST_NAME,
    test_refs_d_CHECKOUT_CUSTOMER_PASSWORD as CHECKOUT_CUSTOMER_PASSWORD,
    test_refs_d_CHECKOUT_CUSTOMER_PREFIX as CHECKOUT_CUSTOMER_PREFIX,
    test_refs_d_CHECKOUT_CUSTOMER_SUBMIT as CHECKOUT_CUSTOMER_SUBMIT,
    test_refs_d_CHECKOUT_GIFT as CHECKOUT_GIFT,
    test_refs_d_CHECKOUT_GIFT_INSTRUCTIONS as CHECKOUT_GIFT_INSTRUCTIONS,
    test_refs_d_CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX as CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX,
    test_refs_d_CHECKOUT_GIFT_MESSAGE as CHECKOUT_GIFT_MESSAGE,
    test_refs_d_CHECKOUT_GIFT_MESSAGE_CHECKBOX as CHECKOUT_GIFT_MESSAGE_CHECKBOX,
    test_refs_d_CHECKOUT_PAYMENT_CARD as CHECKOUT_PAYMENT_CARD,
    test_refs_d_CHECKOUT_PAYMENT_CARD_HOLDER as CHECKOUT_PAYMENT_CARD_HOLDER,
    test_refs_d_CHECKOUT_PAYMENT_CVC as CHECKOUT_PAYMENT_CVC,
    test_refs_d_CHECKOUT_PAYMENT_EXPIRATION as CHECKOUT_PAYMENT_EXPIRATION,
    test_refs_d_CHECKOUT_PAYMENT_GIFTCARD_CODE as CHECKOUT_PAYMENT_GIFTCARD_CODE,
    test_refs_d_CHECKOUT_PAYMENT_GIFTCARD_PIN as CHECKOUT_PAYMENT_GIFTCARD_PIN,
    test_refs_d_CHECKOUT_PAYMENT_METHOD as CHECKOUT_PAYMENT_METHOD,
    test_refs_d_CHECKOUT_PAYMENT_SUBMIT as CHECKOUT_PAYMENT_SUBMIT,
    test_refs_d_CHECKOUT_REVIEW_SUBMIT as CHECKOUT_REVIEW_SUBMIT,
    test_refs_d_CHECKOUT_REVIEW_TOS_CHECKBOX as CHECKOUT_REVIEW_TOS_CHECKBOX,
    test_refs_d_CHECKOUT_REVIEW_TOTAL as CHECKOUT_REVIEW_TOTAL,
    test_refs_d_CHECKOUT_SAMPLES_RADIO as CHECKOUT_SAMPLES_RADIO,
    test_refs_d_CHECKOUT_SAMPLES_SUBMIT as CHECKOUT_SAMPLES_SUBMIT,
    test_refs_d_CHECKOUT_SHIPPING_METHOD as CHECKOUT_SHIPPING_METHOD,
    test_refs_d_CHECKOUT_SHIPPING_SUBMIT as CHECKOUT_SHIPPING_SUBMIT,
    test_refs_d_CONFIRMATION_ACCOUNT_BUTTON as CONFIRMATION_ACCOUNT_BUTTON,
    test_refs_d_CONTENT_HUB_LOAD_MORE_BUTTON as CONTENT_HUB_LOAD_MORE_BUTTON,
    test_refs_d_FOOTER_LINK as FOOTER_LINK,
    test_refs_d_NAV_CART as NAV_CART,
    test_refs_d_NAV_LOGIN as NAV_LOGIN,
    test_refs_d_NAV_LOGO as NAV_LOGO,
    test_refs_d_NAV_READ as NAV_READ,
    test_refs_d_NAV_SEARCH as NAV_SEARCH,
    test_refs_d_NAV_SHOP as NAV_SHOP,
    test_refs_d_NAV_SHOP_1 as NAV_SHOP_1,
    test_refs_d_NAV_SHOP_2 as NAV_SHOP_2,
    test_refs_d_NAV_SHOP_PRODUCT_CTA as NAV_SHOP_PRODUCT_CTA,
    test_refs_d_NAV_SHOP_PRODUCT_RADIO as NAV_SHOP_PRODUCT_RADIO,
    test_refs_d_NAV_VISIT as NAV_VISIT,
    test_refs_d_NAV_VISIT_CHECKBOX as NAV_VISIT_CHECKBOX,
    test_refs_d_NAV_VISIT_INPUT as NAV_VISIT_INPUT,
  };
}

declare const VIEWPORTS: Map<ViewportNames, string>;

declare const index_d$2_BREAKPOINTS: typeof BREAKPOINTS;
declare const index_d$2_VIEWPORTS: typeof VIEWPORTS;
declare namespace index_d$2 {
  export {
    index_d$2_BREAKPOINTS as BREAKPOINTS,
    colors_d as COLORS,
    googleMaps_d as GOOGLE_MAPS,
    html_d as HTML,
    hyperlinkStyleTypes_d as HYPERLINK_STYLE_TYPES,
    keyboardCodes_d as KEYBOARD_CODES,
    labels_d as LABELS,
    stores_d as STORES,
    test_refs_d as TEST_REFS,
    index_d$2_VIEWPORTS as VIEWPORTS,
  };
}

declare const AddToCartContextProvider: AddToCartContextProviderType;
declare const useAddToCartContext: () => any;

declare type Options = {
    libraries?: string[];
    regionCode?: string;
    languageCode?: string;
};
declare type GoogleMapsContextProps = {
    apiKey?: string;
    options?: Options;
};
declare type GoogleMapsContextProviderType = ComponentWithChildren<GoogleMapsContextProps>;

declare const GoogleMapsContextProvider: GoogleMapsContextProviderType;
declare const useGoogleMapsContext: () => {
    googleMap: any;
    isLoading: boolean;
};

declare type ErrorContextProps = {
    children: ReactNode;
    error?: string;
};

declare const ErrorContextProvider: ({ children, error, }: ErrorContextProps) => ReactElement;
declare const useErrorContext: () => string;

declare type LoadMoreContextProps = {
    /**
      A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
      as arguments. See [LoadMoreButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.js)
      for an example. ___Required___
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
};
declare type LoadMoreContextProviderType = ComponentWithChildren<LoadMoreContextProps>;

declare const LoadMoreContextProvider: LoadMoreContextProviderType;
declare const useLoadMoreContext: () => any;

declare type NavBarThemeContextProps = {
    loginAndCartTheme?: string;
    navigationAndLogoTheme?: string;
};
declare type NavBarThemeContextProviderType = ComponentWithChildren<NavBarThemeContextProps>;

declare const NavBarThemeContextProvider: NavBarThemeContextProviderType;
declare const useNavBarThemeContext: () => any;

declare const NotificationContextProvider: ComponentWithChildren;
declare const useNotificationContext: () => any;

declare type ProductDetailContextType = {
    productDetail: Product;
    setProductDetail: Dispatch<SetStateAction<Product>>;
};
declare type ProductDetailContextProps = {
    product?: Product;
};
declare type ProductDetailContextProviderType = ComponentWithChildren<ProductDetailContextProps>;

declare const ProductDetailContextProvider: ProductDetailContextProviderType;
declare const useProductDetailContext: () => ProductDetailContextType;

declare type ThemeContextProps = {
    theme?: Themes;
};
declare type ThemeContextProviderType = ComponentWithChildren<ThemeContextProps>;

declare const ThemeContextProvider: ThemeContextProviderType;
declare const useThemeContext: (propTheme: Themes, defaultTheme?: string) => Themes;

declare type OnVariantChange = (event: ChangeEvent<HTMLInputElement>, currentVariants: Variant[]) => void;
declare type VariantSelectContextType = {
    onVariantChange: OnVariantChange;
    selectedVariant?: Variant;
    setSelectedVariant: Dispatch<SetStateAction<Variant>>;
    variants: Variant[];
};
declare type VariantSelectContextProps = {
    variants: Variant[];
};
declare type VariantSelectContextProviderType = ComponentWithChildren<VariantSelectContextProps>;

declare const VariantSelectContextProvider: VariantSelectContextProviderType;
declare const useVariantSelectContext: () => VariantSelectContextType;

declare const index_d$3_AddToCartContextProvider: typeof AddToCartContextProvider;
declare const index_d$3_useAddToCartContext: typeof useAddToCartContext;
declare const index_d$3_GoogleMapsContextProvider: typeof GoogleMapsContextProvider;
declare const index_d$3_useGoogleMapsContext: typeof useGoogleMapsContext;
declare const index_d$3_ErrorContextProvider: typeof ErrorContextProvider;
declare const index_d$3_useErrorContext: typeof useErrorContext;
declare const index_d$3_LoadMoreContextProvider: typeof LoadMoreContextProvider;
declare const index_d$3_useLoadMoreContext: typeof useLoadMoreContext;
declare const index_d$3_NavBarThemeContextProvider: typeof NavBarThemeContextProvider;
declare const index_d$3_useNavBarThemeContext: typeof useNavBarThemeContext;
declare const index_d$3_NotificationContextProvider: typeof NotificationContextProvider;
declare const index_d$3_useNotificationContext: typeof useNotificationContext;
declare const index_d$3_ProductDetailContextProvider: typeof ProductDetailContextProvider;
declare const index_d$3_useProductDetailContext: typeof useProductDetailContext;
declare const index_d$3_ThemeContextProvider: typeof ThemeContextProvider;
declare const index_d$3_useThemeContext: typeof useThemeContext;
declare const index_d$3_VariantSelectContextProvider: typeof VariantSelectContextProvider;
declare const index_d$3_useVariantSelectContext: typeof useVariantSelectContext;
declare namespace index_d$3 {
  export {
    index_d$3_AddToCartContextProvider as AddToCartContextProvider,
    index_d$3_useAddToCartContext as useAddToCartContext,
    index_d$3_GoogleMapsContextProvider as GoogleMapsContextProvider,
    index_d$3_useGoogleMapsContext as useGoogleMapsContext,
    index_d$3_ErrorContextProvider as ErrorContextProvider,
    index_d$3_useErrorContext as useErrorContext,
    index_d$3_LoadMoreContextProvider as LoadMoreContextProvider,
    index_d$3_useLoadMoreContext as useLoadMoreContext,
    index_d$3_NavBarThemeContextProvider as NavBarThemeContextProvider,
    index_d$3_useNavBarThemeContext as useNavBarThemeContext,
    index_d$3_NotificationContextProvider as NotificationContextProvider,
    index_d$3_useNotificationContext as useNotificationContext,
    index_d$3_ProductDetailContextProvider as ProductDetailContextProvider,
    index_d$3_useProductDetailContext as useProductDetailContext,
    index_d$3_ThemeContextProvider as ThemeContextProvider,
    index_d$3_useThemeContext as useThemeContext,
    index_d$3_VariantSelectContextProvider as VariantSelectContextProvider,
    index_d$3_useVariantSelectContext as useVariantSelectContext,
  };
}

declare type UseEscapeKeyListener = (onKeyPress: (event: KeyboardEvent) => void) => void;

declare const useEscapeKeyListener: UseEscapeKeyListener;

declare type UseExecuteOnImpressionOptions = {
    threshold?: number;
    isExecutableOnReEntry?: boolean;
};
declare type UseExecuteOnImpression = (ref: RefObject<HTMLElement>, callback: () => void, options?: UseExecuteOnImpressionOptions) => void;

/**
 * A hook to execute a callback when the element enters the fold
 * @param {HTMLElement} ref a DOM reference to the element
 * @param {Function} callback a callback function to execute
 * @param {{threshold: Number, isExecutableOnReEntry: Boolean}} options hook behaviour options
 *
 *
 * @example
 * const ref = React.useRef(null);
 * const myFunction = () => console.log('Execute order 66');
 * const options = {threshold: 0.5, isExecutableOnReEntry: true};
 *
 * useExecuteOnImpression(ref, myFunction, options)
 */
declare const useExecuteOnImpression: UseExecuteOnImpression;

declare const useHasMounted: () => boolean;

declare type EmptyObject = Record<string, never>;
declare type UseImageTransition = <Image, Attributes>(image: Image, ref: RefObject<HTMLImageElement>, duration?: number, attributes?: Attributes | EmptyObject) => [(Image & Attributes) | EmptyObject, boolean];

declare const useImageTransition: UseImageTransition;

declare type UseOnScreen = (ref: RefObject<HTMLElement>, threshold?: number, rootMargin?: string, shouldNotifyOnLeavingScreen?: boolean) => boolean;

declare const useOnScreen: UseOnScreen;

declare const useOverflowHidden: (isVisible: boolean) => void;

declare type UseScriptOptions = {
    async?: boolean;
    dataSet?: {
        [key: string]: string;
    };
    defer?: boolean;
    id?: string;
    onLoad?: () => void;
    shouldCheckForExisting?: boolean;
    src?: string;
};
declare type UseScriptReturn = [boolean, ErrorEvent];
declare type UseScript = (options: UseScriptOptions) => UseScriptReturn;

declare const useScript: UseScript;

declare type WindowSize = {
    height: number;
    width: number;
};
declare type UseWindowHasResized = (callback?: () => void) => WindowSize;

declare const useWindowHasResized: UseWindowHasResized;

declare const index_d$4_useEscapeKeyListener: typeof useEscapeKeyListener;
declare const index_d$4_useExecuteOnImpression: typeof useExecuteOnImpression;
declare const index_d$4_useHasMounted: typeof useHasMounted;
declare const index_d$4_useImageTransition: typeof useImageTransition;
declare const index_d$4_useOnScreen: typeof useOnScreen;
declare const index_d$4_useOverflowHidden: typeof useOverflowHidden;
declare const index_d$4_useScript: typeof useScript;
declare const index_d$4_useWindowHasResized: typeof useWindowHasResized;
declare namespace index_d$4 {
  export {
    index_d$4_useEscapeKeyListener as useEscapeKeyListener,
    index_d$4_useExecuteOnImpression as useExecuteOnImpression,
    index_d$4_useHasMounted as useHasMounted,
    index_d$4_useImageTransition as useImageTransition,
    index_d$4_useOnScreen as useOnScreen,
    index_d$4_useOverflowHidden as useOverflowHidden,
    index_d$4_useScript as useScript,
    index_d$4_useWindowHasResized as useWindowHasResized,
  };
}

declare const isInBrowser: () => boolean;
/**
 * Device detection. https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs
 * @TODO consider replacing with https://www.npmjs.com/package/react-device-detect
 * or https://www.npmjs.com/package/bowser
 */
declare const isOpera: boolean;
declare const isFirefox: boolean;
declare const isSafari: boolean;
declare const isIE: boolean;
declare const isEdge: boolean;
declare const isChrome: boolean;
declare const isBlink: boolean;

declare const index_d$5_isInBrowser: typeof isInBrowser;
declare const index_d$5_isOpera: typeof isOpera;
declare const index_d$5_isFirefox: typeof isFirefox;
declare const index_d$5_isSafari: typeof isSafari;
declare const index_d$5_isIE: typeof isIE;
declare const index_d$5_isEdge: typeof isEdge;
declare const index_d$5_isChrome: typeof isChrome;
declare const index_d$5_isBlink: typeof isBlink;
declare namespace index_d$5 {
  export {
    index_d$5_isInBrowser as isInBrowser,
    index_d$5_isOpera as isOpera,
    index_d$5_isFirefox as isFirefox,
    index_d$5_isSafari as isSafari,
    index_d$5_isIE as isIE,
    index_d$5_isEdge as isEdge,
    index_d$5_isChrome as isChrome,
    index_d$5_isBlink as isBlink,
  };
}

declare const isObjectPopulatedArray: (obj?: any) => boolean;

declare const index_d$6_isObjectPopulatedArray: typeof isObjectPopulatedArray;
declare namespace index_d$6 {
  export {
    index_d$6_isObjectPopulatedArray as isObjectPopulatedArray,
  };
}

declare const getPortalRoot: (id: string) => HTMLElement | null;

declare const index_d$7_getPortalRoot: typeof getPortalRoot;
declare namespace index_d$7 {
  export {
    index_d$7_getPortalRoot as getPortalRoot,
  };
}

declare type Variant$1 = {
    size?: string;
    sku?: string;
};
declare type RadioOptions = {
    label: string;
    value: string;
};

declare const getVariantRadioOptions: (variants: Variant$1[]) => RadioOptions[];

declare const index_d$8_getVariantRadioOptions: typeof getVariantRadioOptions;
declare namespace index_d$8 {
  export {
    index_d$8_getVariantRadioOptions as getVariantRadioOptions,
  };
}

declare const isViewport: (viewport: ViewportNames) => boolean;

declare const index_d$9_isViewport: typeof isViewport;
declare namespace index_d$9 {
  export {
    index_d$9_isViewport as isViewport,
  };
}

declare namespace index_d$a {
  export {
    index_d$5 as environment,
    index_d$6 as objects,
    index_d$7 as portal,
    index_d$8 as product,
    index_d$9 as viewport,
  };
}

export { Accordion, AddToCartButton, AddToCartContextProvider, Audio, BodyCopy, Breadcrumbs, Button, BynderWidget, Carousel, Checkbox, ConditionalWrapper, ContentHubArticle, ContentHubArticleList, DefinitionList, DialogBanner, DoubleMedia, DynamicForm, ErrorContextProvider, Figure, FlyinPanel, FooterBlock, FullWidthHeroScroll, GoogleMap, GoogleMapsContextProvider, Heading, HeroBanner, Hidden, ProductAccordion as HorizontalProductDisplayAccordion, Hyperlink, Icon, IconLink, Image$2 as Image, ImageCarousel, KitList, LinkButtonGroup, List, LoadMoreButton, LoadMoreContextProvider, Loading, MediaWithContent, Modal, NavBarThemeContextProvider, NavigationBar, NotificationContextProvider, NotificationModal, Overlay, Paragraph as P, Paragraph, ParagraphSet, Podium, ProductAccordion, ProductCommerce, ProductDetailContextProvider, ProductDetailHeader, ProductExtract, ProductGridItem, Quote, RadioGroup, ReadMore, SecondaryMessage, SectionHeading, Select, StoreDetailHeader, StoreHoursList, SubNav, TextInput, TextInputV2, TextOverFullWidthAsset, Textarea, ThemeContextProvider, Transition, TwoColumnLayout, TwoColumnList, VariantSelectContextProvider, Video$1 as Video, index_d$1 as components, index_d$2 as constants, index_d$3 as contexts, index_d$4 as customHooks, index_d$5 as environment, index_d$6 as objects, index_d$8 as product, index_d as types, useAddToCartContext, useErrorContext, useEscapeKeyListener, useExecuteOnImpression, useGoogleMapsContext, useHasMounted, useImageTransition, useLoadMoreContext, useNavBarThemeContext, useNotificationContext, useOnScreen, useOverflowHidden, useProductDetailContext, useScript, useThemeContext, useVariantSelectContext, useWindowHasResized, index_d$a as utils, index_d$9 as viewport };
