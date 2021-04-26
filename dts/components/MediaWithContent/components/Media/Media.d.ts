export function Media({
  className,
  containMedia,
  foregroundImage,
  foregroundImageLink,
  hasFullWidthImage,
  media,
}: {
  className: any;
  containMedia: any;
  foregroundImage: any;
  foregroundImageLink: any;
  hasFullWidthImage: any;
  media: any;
}): JSX.Element;
export namespace Media {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const containMedia: PropTypes.Requireable<string>;
    const foregroundImage: PropTypes.Requireable<PropTypes.ReactElementLike>;
    const foregroundImageLink: PropTypes.Requireable<
      PropTypes.InferProps<{
        url: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
      }>
    >;
    const hasFullWidthImage: PropTypes.Requireable<boolean>;
    const media: PropTypes.Validator<PropTypes.ReactElementLike>;
  }
  namespace defaultProps {
    const className_1: any;
    export { className_1 as className };
    const containMedia_1: any;
    export { containMedia_1 as containMedia };
    const foregroundImage_1: any;
    export { foregroundImage_1 as foregroundImage };
    const foregroundImageLink_1: any;
    export { foregroundImageLink_1 as foregroundImageLink };
    const hasFullWidthImage_1: boolean;
    export { hasFullWidthImage_1 as hasFullWidthImage };
    const media_1: any;
    export { media_1 as media };
  }
}
import PropTypes from 'prop-types';
