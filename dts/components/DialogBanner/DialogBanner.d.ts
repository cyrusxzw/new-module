export function DialogBanner({
  className,
  copy,
  cta,
  hasCloseButton,
  heading,
  isVisible,
  message,
  onClose,
  position,
  theme,
}: {
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
export namespace DialogBanner {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const copy: PropTypes.Requireable<
      PropTypes.InferProps<{
        closeButtonTitle: PropTypes.Requireable<string>;
      }>
    >;
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
import PropTypes from 'prop-types';
