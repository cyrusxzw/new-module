export function Hidden({
  children,
  isLarge,
  isMedium,
  isSmall,
  isXLarge,
}: {
  children: any;
  isLarge: any;
  isMedium: any;
  isSmall: any;
  isXLarge: any;
}): JSX.Element;
export namespace Hidden {
  namespace propTypes {
    const children: PropTypes.Requireable<any>;
    const isLarge: PropTypes.Requireable<boolean>;
    const isMedium: PropTypes.Requireable<boolean>;
    const isSmall: PropTypes.Requireable<boolean>;
    const isXLarge: PropTypes.Requireable<boolean>;
  }
  namespace defaultProps {
    const children_1: any;
    export { children_1 as children };
    const isLarge_1: boolean;
    export { isLarge_1 as isLarge };
    const isMedium_1: boolean;
    export { isMedium_1 as isMedium };
    const isSmall_1: boolean;
    export { isSmall_1 as isSmall };
    const isXLarge_1: boolean;
    export { isXLarge_1 as isXLarge };
  }
}
import PropTypes from 'prop-types';
