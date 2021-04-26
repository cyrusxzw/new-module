export function FlyinPanel({
  children,
  className,
  copy,
  heading,
  isVisible,
  onClose,
  theme,
}: {
  children: any;
  className: any;
  copy: any;
  heading: any;
  isVisible: any;
  onClose: any;
  theme: any;
}): JSX.Element;
export namespace FlyinPanel {
  namespace propTypes {
    const children: PropTypes.Validator<any>;
    const className: PropTypes.Requireable<string>;
    const copy: PropTypes.Requireable<
      PropTypes.InferProps<{
        close: PropTypes.Requireable<string>;
      }>
    >;
    const heading: PropTypes.Requireable<string>;
    const isVisible: PropTypes.Requireable<boolean>;
    const onClose: PropTypes.Validator<(...args: any[]) => any>;
    const theme: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const children_1: any;
    export { children_1 as children };
    const className_1: any;
    export { className_1 as className };
    export namespace copy_1 {
      const close: any;
    }
    export { copy_1 as copy };
    const heading_1: any;
    export { heading_1 as heading };
    const isVisible_1: boolean;
    export { isVisible_1 as isVisible };
    const onClose_1: any;
    export { onClose_1 as onClose };
    const theme_1: string;
    export { theme_1 as theme };
  }
}
import PropTypes from 'prop-types';
