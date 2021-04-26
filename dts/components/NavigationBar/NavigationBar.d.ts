export function NavigationBar({
  childLinks,
  className,
  parentLink,
  selectedUrl,
}: {
  childLinks: any;
  className: any;
  parentLink: any;
  selectedUrl: any;
}): JSX.Element;
export namespace NavigationBar {
  namespace propTypes {
    const childLinks: PropTypes.Requireable<
      PropTypes.InferProps<{
        hasTargetInNewWindow: PropTypes.Requireable<boolean>;
        text: PropTypes.Validator<string>;
        url: PropTypes.Validator<string>;
      }>[]
    >;
    const className: PropTypes.Requireable<string>;
    const parentLink: PropTypes.Requireable<
      PropTypes.InferProps<{
        hasTargetInNewWindow: PropTypes.Requireable<boolean>;
        text: PropTypes.Validator<string>;
        url: PropTypes.Validator<string>;
      }>
    >;
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
import PropTypes from 'prop-types';
