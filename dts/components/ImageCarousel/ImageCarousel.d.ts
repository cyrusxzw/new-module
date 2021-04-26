export function ImageCarousel({
  autoplaySpeed,
  className,
  hasAutoplay,
  hasFlushPagination,
  isCompact,
  slides,
  theme,
}: {
  autoplaySpeed: any;
  className: any;
  hasAutoplay: any;
  hasFlushPagination: any;
  isCompact: any;
  slides: any;
  theme: any;
}): JSX.Element;
export namespace ImageCarousel {
  namespace propTypes {
    const autoplaySpeed: PropTypes.Requireable<number>;
    const className: PropTypes.Requireable<string>;
    const hasAutoplay: PropTypes.Requireable<boolean>;
    const hasFlushPagination: PropTypes.Requireable<boolean>;
    const isCompact: PropTypes.Requireable<boolean>;
    const slides: PropTypes.Requireable<
      PropTypes.InferProps<{
        caption: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        image: PropTypes.Validator<object>;
      }>[]
    >;
    const theme: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const autoplaySpeed_1: number;
    export { autoplaySpeed_1 as autoplaySpeed };
    const className_1: any;
    export { className_1 as className };
    const hasAutoplay_1: boolean;
    export { hasAutoplay_1 as hasAutoplay };
    const hasFlushPagination_1: boolean;
    export { hasFlushPagination_1 as hasFlushPagination };
    const isCompact_1: boolean;
    export { isCompact_1 as isCompact };
    const slides_1: any[];
    export { slides_1 as slides };
    const theme_1: string;
    export { theme_1 as theme };
  }
}
import PropTypes from 'prop-types';
