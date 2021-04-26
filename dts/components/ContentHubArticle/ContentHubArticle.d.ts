export function ContentHubArticle({
  articleRef,
  category,
  className,
  dataTestRef,
  horizontalThumbnail,
  id,
  isHorizontal,
  isInFirstGroup,
  isMenuItem,
  isReadMore,
  longTitle,
  onClick,
  readingTime,
  uri,
  verticalThumbnail,
}: {
  articleRef: any;
  category: any;
  className: any;
  dataTestRef: any;
  horizontalThumbnail: any;
  id: any;
  isHorizontal: any;
  isInFirstGroup: any;
  isMenuItem: any;
  isReadMore: any;
  longTitle: any;
  onClick: any;
  readingTime: any;
  uri: any;
  verticalThumbnail: any;
}): JSX.Element;
export namespace ContentHubArticle {
  namespace propTypes {
    const articleRef: PropTypes.Requireable<object>;
    const category: PropTypes.Requireable<string>;
    const className: PropTypes.Requireable<string>;
    const dataTestRef: PropTypes.Validator<string>;
    const horizontalThumbnail: PropTypes.Requireable<object>;
    const id: PropTypes.Requireable<string>;
    const isHorizontal: PropTypes.Requireable<boolean>;
    const isInFirstGroup: PropTypes.Requireable<boolean>;
    const isMenuItem: PropTypes.Requireable<boolean>;
    const isReadMore: PropTypes.Requireable<boolean>;
    const longTitle: PropTypes.Requireable<string>;
    const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    const readingTime: PropTypes.Requireable<string>;
    const uri: PropTypes.Requireable<string>;
    const verticalThumbnail: PropTypes.Requireable<object>;
  }
  namespace defaultProps {
    const articleRef_1: any;
    export { articleRef_1 as articleRef };
    const category_1: any;
    export { category_1 as category };
    const className_1: any;
    export { className_1 as className };
    const dataTestRef_1: any;
    export { dataTestRef_1 as dataTestRef };
    const horizontalThumbnail_1: any;
    export { horizontalThumbnail_1 as horizontalThumbnail };
    const id_1: any;
    export { id_1 as id };
    const isHorizontal_1: any;
    export { isHorizontal_1 as isHorizontal };
    const isInFirstGroup_1: boolean;
    export { isInFirstGroup_1 as isInFirstGroup };
    const isMenuItem_1: boolean;
    export { isMenuItem_1 as isMenuItem };
    const isReadMore_1: boolean;
    export { isReadMore_1 as isReadMore };
    const longTitle_1: any;
    export { longTitle_1 as longTitle };
    const onClick_1: any;
    export { onClick_1 as onClick };
    const readingTime_1: any;
    export { readingTime_1 as readingTime };
    const uri_1: any;
    export { uri_1 as uri };
    const verticalThumbnail_1: any;
    export { verticalThumbnail_1 as verticalThumbnail };
  }
}
import PropTypes from 'prop-types';
