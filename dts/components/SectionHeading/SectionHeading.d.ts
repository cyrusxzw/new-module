export function SectionHeading({
  childrenClassNames,
  className,
  eyebrow,
  hasSerifFontHeading,
  heading,
  id,
  isFlush,
  isOffsetPageHeading,
  isHeroHeading,
  isPageHeading,
  subHeading,
  theme,
  titleFont,
}: {
  childrenClassNames: any;
  className: any;
  eyebrow: any;
  hasSerifFontHeading: any;
  heading: any;
  id: any;
  isFlush: any;
  isOffsetPageHeading: any;
  isHeroHeading: any;
  isPageHeading: any;
  subHeading: any;
  theme: any;
  titleFont: any;
}): JSX.Element;
export namespace SectionHeading {
  namespace propTypes {
    const childrenClassNames: PropTypes.Requireable<
      PropTypes.InferProps<{
        eyebrow: PropTypes.Requireable<string>;
        heading: PropTypes.Requireable<string>;
        subHeading: PropTypes.Requireable<string>;
      }>
    >;
    const className: PropTypes.Requireable<string>;
    const eyebrow: PropTypes.Requireable<string>;
    const hasSerifFontHeading: PropTypes.Requireable<boolean>;
    const heading: PropTypes.Requireable<string>;
    const id: PropTypes.Requireable<string>;
    const isFlush: PropTypes.Requireable<boolean>;
    const isOffsetPageHeading: PropTypes.Requireable<boolean>;
    const isHeroHeading: PropTypes.Requireable<boolean>;
    const isPageHeading: PropTypes.Requireable<boolean>;
    const subHeading: PropTypes.Requireable<string>;
    const theme: PropTypes.Requireable<string>;
    const titleFont: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    export namespace childrenClassNames_1 {
      const eyebrow_1: any;
      export { eyebrow_1 as eyebrow };
      const heading_1: any;
      export { heading_1 as heading };
      const subHeading_1: any;
      export { subHeading_1 as subHeading };
    }
    export { childrenClassNames_1 as childrenClassNames };
    const className_1: any;
    export { className_1 as className };
    const eyebrow_2: any;
    export { eyebrow_2 as eyebrow };
    const hasSerifFontHeading_1: boolean;
    export { hasSerifFontHeading_1 as hasSerifFontHeading };
    const heading_2: any;
    export { heading_2 as heading };
    const id_1: any;
    export { id_1 as id };
    const isFlush_1: boolean;
    export { isFlush_1 as isFlush };
    const isOffsetPageHeading_1: boolean;
    export { isOffsetPageHeading_1 as isOffsetPageHeading };
    const isHeroHeading_1: boolean;
    export { isHeroHeading_1 as isHeroHeading };
    const isPageHeading_1: boolean;
    export { isPageHeading_1 as isPageHeading };
    const subHeading_2: any;
    export { subHeading_2 as subHeading };
    const theme_1: string;
    export { theme_1 as theme };
    const titleFont_1: any;
    export { titleFont_1 as titleFont };
  }
}
import PropTypes from 'prop-types';
