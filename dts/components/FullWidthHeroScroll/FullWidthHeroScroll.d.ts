export function FullWidthHeroScroll({
  backgroundImage,
  backgroundMediaType,
  backgroundVideo,
  copy,
  cta,
  eyebrow,
  hasSerifFontHeading,
  hasTopOffset,
  heading,
  id,
  textBlocks,
  theme,
}: {
  backgroundImage: any;
  backgroundMediaType: any;
  backgroundVideo: any;
  copy: any;
  cta: any;
  eyebrow: any;
  hasSerifFontHeading: any;
  hasTopOffset: any;
  heading: any;
  id: any;
  textBlocks: any;
  theme: any;
}): JSX.Element;
export namespace FullWidthHeroScroll {
  namespace propTypes {
    const backgroundImage: PropTypes.Requireable<object>;
    const backgroundMediaType: PropTypes.Requireable<string>;
    const backgroundVideo: PropTypes.Requireable<object>;
    const copy: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    const cta: PropTypes.Requireable<
      PropTypes.InferProps<{
        text: PropTypes.Requireable<string>;
        url: PropTypes.Requireable<string>;
      }>
    >;
    const eyebrow: PropTypes.Requireable<string>;
    const hasSerifFontHeading: PropTypes.Requireable<boolean>;
    const hasTopOffset: PropTypes.Requireable<boolean>;
    const heading: PropTypes.Requireable<string>;
    const id: PropTypes.Requireable<string>;
    const textBlocks: PropTypes.Requireable<
      PropTypes.InferProps<{
        text: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasSerifFont: PropTypes.Requireable<boolean>;
      }>[]
    >;
    const theme: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const backgroundImage_1: any;
    export { backgroundImage_1 as backgroundImage };
    const backgroundMediaType_1: any;
    export { backgroundMediaType_1 as backgroundMediaType };
    const backgroundVideo_1: any;
    export { backgroundVideo_1 as backgroundVideo };
    const copy_1: any;
    export { copy_1 as copy };
    const cta_1: any;
    export { cta_1 as cta };
    const eyebrow_1: any;
    export { eyebrow_1 as eyebrow };
    const hasSerifFontHeading_1: boolean;
    export { hasSerifFontHeading_1 as hasSerifFontHeading };
    const hasTopOffset_1: boolean;
    export { hasTopOffset_1 as hasTopOffset };
    const heading_1: any;
    export { heading_1 as heading };
    const id_1: any;
    export { id_1 as id };
    const textBlocks_1: any[];
    export { textBlocks_1 as textBlocks };
    const theme_1: string;
    export { theme_1 as theme };
  }
}
import PropTypes from 'prop-types';
