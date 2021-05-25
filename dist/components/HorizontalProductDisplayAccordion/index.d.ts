import PropTypes from 'prop-types';

declare function HorizontalProductDisplayAccordion({ id, products, addToCartCopy }: {
    id: any;
    products: any;
    addToCartCopy: any;
}): JSX.Element;
declare namespace HorizontalProductDisplayAccordion {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const id: PropTypes.Requireable<string>;
        const addToCartCopy: PropTypes.Requireable<PropTypes.InferProps<{
            cartAction: PropTypes.Requireable<string>;
            updateNotification: PropTypes.Requireable<string>;
            outOfStock: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                title: PropTypes.Requireable<string>;
            }>>;
        }>>;
        const openIndex: PropTypes.Requireable<string>;
        const products: PropTypes.Requireable<PropTypes.InferProps<{
            closedState: PropTypes.Requireable<PropTypes.InferProps<{
                background: PropTypes.Requireable<string>;
                backgroundColour: PropTypes.Requireable<string>;
                backgroundImage: PropTypes.Requireable<object>;
                backgroundVideo: PropTypes.Requireable<object>;
                copy: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                eyebrow: PropTypes.Requireable<string>;
                foregroundImage: PropTypes.Requireable<object>;
                id: PropTypes.Requireable<string>;
                openButtonText: PropTypes.Requireable<string>;
                theme: PropTypes.Requireable<string>;
                title: PropTypes.Requireable<string>;
            }>>;
            handleAddToCart: PropTypes.Requireable<(...args: any[]) => any>;
            isCompressed: PropTypes.Requireable<boolean>;
            isExpanded: PropTypes.Requireable<boolean>;
            id: PropTypes.Requireable<string>;
            index: PropTypes.Requireable<number>;
            openState: PropTypes.Requireable<PropTypes.InferProps<{
                background: PropTypes.Requireable<string>;
                backgroundColour: PropTypes.Requireable<string>;
                backgroundImage: PropTypes.Requireable<object>;
                backgroundVideo: PropTypes.Requireable<object>;
                closeButtonText: PropTypes.Requireable<string>;
                copy: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                eyebrow: PropTypes.Requireable<string>;
                foregroundImage: PropTypes.Requireable<object>;
                product: PropTypes.Requireable<PropTypes.InferProps<{
                    variants: PropTypes.Requireable<PropTypes.InferProps<{
                        inStock: PropTypes.Requireable<boolean>;
                        price: PropTypes.Requireable<string>;
                        size: PropTypes.Requireable<string>;
                        sku: PropTypes.Requireable<string>;
                    }>[]>;
                }>>;
                theme: PropTypes.Requireable<string>;
                title: PropTypes.Requireable<string>;
            }>>;
            toggleAccordion: PropTypes.Requireable<(...args: any[]) => any>;
        }>[]>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const id_1: any;
        export { id_1 as id };
        const openIndex_1: any;
        export { openIndex_1 as openIndex };
        export namespace addToCartCopy_1 {
            const cartAction: any;
            const updateNotification: any;
            namespace outOfStock {
                const label: any;
                const title: any;
            }
        }
        export { addToCartCopy_1 as addToCartCopy };
        export namespace products_1 {
            export namespace closedState {
                export const background: string;
                export const backgroundColour: any;
                export const backgroundImage: any;
                export const backgroundVideo: any;
                export const closeButtonText: any;
                export const copy: any;
                export const eyebrow: any;
                export const foregroundImage: any;
                const id_2: any;
                export { id_2 as id };
                export const theme: any;
                const title_1: any;
                export { title_1 as title };
            }
            export const handleAddToCart: any;
            export const isCompressed: any;
            export const isExpanded: any;
            const id_3: any;
            export { id_3 as id };
            export const index: any;
            export namespace openState {
                const background_1: string;
                export { background_1 as background };
                const backgroundColour_1: any;
                export { backgroundColour_1 as backgroundColour };
                const backgroundImage_1: any;
                export { backgroundImage_1 as backgroundImage };
                const backgroundVideo_1: any;
                export { backgroundVideo_1 as backgroundVideo };
                const copy_1: any;
                export { copy_1 as copy };
                const eyebrow_1: any;
                export { eyebrow_1 as eyebrow };
                const foregroundImage_1: any;
                export { foregroundImage_1 as foregroundImage };
                export const openButtonText: any;
                export namespace product {
                    const variants: {
                        inStock: any;
                        price: any;
                        size: any;
                        sku: any;
                    }[];
                }
                const theme_1: any;
                export { theme_1 as theme };
                const title_2: any;
                export { title_2 as title };
            }
            export const toggleAccordion: any;
        }
        export { products_1 as products };
    }
}

export { HorizontalProductDisplayAccordion };
