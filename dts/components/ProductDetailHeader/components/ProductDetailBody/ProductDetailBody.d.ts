export function ProductDetailBody({
  className,
  copy,
  theme,
}: {
  className: any;
  copy: any;
  theme: any;
}): JSX.Element;
export namespace ProductDetailBody {
  namespace propTypes {
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
    const className_1: any;
    export { className_1 as className };
    export namespace copy_1 {
      namespace addToCart {
        const cartAction: any;
        const updateNotification: any;
        namespace outOfStock {
          const label: any;
          const title: any;
        }
      }
      namespace size {
        const singular: any;
        const plural: any;
      }
      const upSellProductLabel: any;
      const flyinPanelHeading: any;
    }
    export { copy_1 as copy };
    const theme_1: any;
    export { theme_1 as theme };
  }
}
import PropTypes from 'prop-types';
