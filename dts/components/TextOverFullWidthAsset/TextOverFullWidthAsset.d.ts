export function TextOverFullWidthAsset({
  backgroundImage,
  backgroundVideo,
  className,
  content,
  copyHeight,
  copySide,
  mediaType,
}: {
  backgroundImage: any;
  backgroundVideo: any;
  className: any;
  content: any;
  copyHeight: any;
  copySide: any;
  mediaType: any;
}): JSX.Element;
export namespace TextOverFullWidthAsset {
  namespace propTypes {
    const backgroundImage: PropTypes.Requireable<any>;
    const backgroundVideo: PropTypes.Requireable<any>;
    const className: PropTypes.Requireable<string>;
    const content: PropTypes.Validator<PropTypes.ReactNodeLike>;
    const copyHeight: PropTypes.Requireable<string>;
    const copySide: PropTypes.Requireable<string>;
    const mediaType: PropTypes.Validator<string>;
  }
  namespace defaultProps {
    const backgroundImage_1: any;
    export { backgroundImage_1 as backgroundImage };
    const backgroundVideo_1: any;
    export { backgroundVideo_1 as backgroundVideo };
    const className_1: any;
    export { className_1 as className };
    const content_1: any;
    export { content_1 as content };
    const copyHeight_1: string;
    export { copyHeight_1 as copyHeight };
    const copySide_1: string;
    export { copySide_1 as copySide };
    const mediaType_1: any;
    export { mediaType_1 as mediaType };
  }
}
import PropTypes from 'prop-types';
