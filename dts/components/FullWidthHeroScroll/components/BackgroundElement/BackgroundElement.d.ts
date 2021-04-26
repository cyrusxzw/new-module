export function BackgroundElement({
  image,
  mediaType,
  video,
  className,
}: {
  image: any;
  mediaType: any;
  video: any;
  className: any;
}): JSX.Element;
export namespace BackgroundElement {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const image: PropTypes.Requireable<object>;
    const mediaType: PropTypes.Requireable<string>;
    const video: PropTypes.Requireable<object>;
  }
  namespace defaultProps {
    const className_1: any;
    export { className_1 as className };
    const image_1: any;
    export { image_1 as image };
    const mediaType_1: any;
    export { mediaType_1 as mediaType };
    const video_1: any;
    export { video_1 as video };
  }
}
import PropTypes from 'prop-types';
