export function ProductDetailHeader({
  breadcrumbs,
  className,
  copy,
  theme,
}: {
  breadcrumbs: any;
  className: any;
  copy: any;
  theme: any;
}): JSX.Element;
export namespace ProductDetailHeader {
  namespace propTypes {
    const breadcrumbs: PropTypes.Requireable<
      PropTypes.InferProps<{
        className: PropTypes.Requireable<string>;
        items: PropTypes.Requireable<
          PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            id: PropTypes.Requireable<string>;
            url: PropTypes.Requireable<string>;
            title: PropTypes.Requireable<string>;
          }>[]
        >;
        theme: PropTypes.Requireable<string>;
      }>
    >;
    const className: PropTypes.Requireable<string>;
    const copy: PropTypes.Requireable<
      PropTypes.InferProps<{
        addToCart: PropTypes.Requireable<
          PropTypes.InferProps<{
            cartAction: PropTypes.Requireable<string>;
            updateNotification: PropTypes.Requireable<string>;
            outOfStock: PropTypes.Requireable<
              PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                title: PropTypes.Requireable<string>;
              }>
            >;
          }>
        >;
        size: PropTypes.Requireable<
          PropTypes.InferProps<{
            singular: PropTypes.Requireable<string>;
            plural: PropTypes.Requireable<string>;
          }>
        >;
        upSellProductLabel: PropTypes.Requireable<string>;
        flyinPanelHeading: PropTypes.Requireable<string>;
      }>
    >;
    const theme: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    export namespace breadcrumbs_1 {
      const className_1: any;
      export { className_1 as className };
      export const items: any;
      const theme_1: string;
      export { theme_1 as theme };
    }
    export { breadcrumbs_1 as breadcrumbs };
    const className_2: any;
    export { className_2 as className };
    export namespace copy_1 {
      const addToCart: any;
      namespace size {
        const singular: any;
        const plural: any;
      }
      const upSellProductLabel: any;
      const flyinPanelHeading: any;
    }
    export { copy_1 as copy };
    const theme_2: any;
    export { theme_2 as theme };
  }
}
import PropTypes from 'prop-types';
