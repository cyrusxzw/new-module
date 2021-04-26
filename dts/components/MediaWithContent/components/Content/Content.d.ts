export function Content({
  className,
  content,
  copy,
  hasFullWidthImage,
  hasSerifFontHeading,
  isReverse,
  theme,
}: {
  className: any;
  content: any;
  copy: any;
  hasFullWidthImage: any;
  hasSerifFontHeading: any;
  isReverse: any;
  theme: any;
}): JSX.Element;
export namespace Content {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const content: PropTypes.Requireable<any>;
    const copy: PropTypes.Validator<
      PropTypes.InferProps<{
        description: PropTypes.Requireable<any>;
        eyebrow: PropTypes.Requireable<string>;
        heading: PropTypes.Requireable<string>;
        subHeading: PropTypes.Requireable<string>;
      }>
    >;
    const hasFullWidthImage: PropTypes.Requireable<boolean>;
    const hasSerifFontHeading: PropTypes.Requireable<boolean>;
    const isReverse: PropTypes.Requireable<boolean>;
    const theme: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const className_1: any;
    export { className_1 as className };
    const content_1: any;
    export { content_1 as content };
    export namespace copy_1 {
      const description: any;
      const eyebrow: any;
      const heading: any;
      const subHeading: any;
    }
    export { copy_1 as copy };
    const hasFullWidthImage_1: boolean;
    export { hasFullWidthImage_1 as hasFullWidthImage };
    const hasSerifFontHeading_1: boolean;
    export { hasSerifFontHeading_1 as hasSerifFontHeading };
    const isReverse_1: boolean;
    export { isReverse_1 as isReverse };
    const theme_1: string;
    export { theme_1 as theme };
  }
}
import PropTypes from 'prop-types';
