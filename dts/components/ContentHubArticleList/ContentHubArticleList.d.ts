export function ContentHubArticleList({
  articles,
  className,
  isFirstGroup,
  pattern,
}: {
  articles: any;
  className: any;
  isFirstGroup: any;
  pattern: any;
}): JSX.Element;
export namespace ContentHubArticleList {
  namespace propTypes {
    const articles: PropTypes.Requireable<any[]>;
    const className: PropTypes.Requireable<string>;
    const isFirstGroup: PropTypes.Requireable<boolean>;
    const pattern: PropTypes.Requireable<number>;
  }
  namespace defaultProps {
    const articles_1: any;
    export { articles_1 as articles };
    const className_1: any;
    export { className_1 as className };
    const isFirstGroup_1: boolean;
    export { isFirstGroup_1 as isFirstGroup };
    const pattern_1: number;
    export { pattern_1 as pattern };
  }
}
import PropTypes from 'prop-types';
