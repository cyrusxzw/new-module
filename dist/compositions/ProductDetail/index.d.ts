import PropTypes from 'prop-types';

declare function ProductDetail({ __asideDetails1, __asideDetails2, breadcrumbs, className, copy, quote, relatedProducts, }: {
    __asideDetails1: any;
    __asideDetails2: any;
    breadcrumbs: any;
    className: any;
    copy: any;
    quote: any;
    relatedProducts: any;
}): JSX.Element;
declare namespace ProductDetail {
    namespace propTypes {
        const __asideDetails1: PropTypes.Requireable<object>;
        const __asideDetails2: PropTypes.Requireable<object>;
        const breadcrumbs: PropTypes.Requireable<object>;
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            productHeader: PropTypes.Requireable<PropTypes.InferProps<{
                ingredients: PropTypes.Requireable<PropTypes.InferProps<{
                    heading: PropTypes.Requireable<string>;
                    label: PropTypes.Requireable<string>;
                    title: PropTypes.Requireable<string>;
                }>>;
            }>>;
        }>>;
        const product: PropTypes.Requireable<object>;
        const quote: PropTypes.Requireable<object>;
        const relatedProducts: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const __asideDetails1_1: any;
        export { __asideDetails1_1 as __asideDetails1 };
        const __asideDetails2_1: any;
        export { __asideDetails2_1 as __asideDetails2 };
        const breadcrumbs_1: any;
        export { breadcrumbs_1 as breadcrumbs };
        const className_1: any;
        export { className_1 as className };
        const copy_1: any;
        export { copy_1 as copy };
        const product_1: any;
        export { product_1 as product };
        const quote_1: any;
        export { quote_1 as quote };
        const relatedProducts_1: any;
        export { relatedProducts_1 as relatedProducts };
    }
}

export { ProductDetail };
