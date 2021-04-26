export function FooterBlock({
  className,
  copy,
  heading,
  headingClassName,
  isVisibleOnTabletAndMobile,
  links,
  listClassName,
  listItemClassName,
  theme,
}: {
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
export namespace FooterBlock {
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
import PropTypes from 'prop-types';
