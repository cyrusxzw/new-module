export function FullscreenSection({
  text,
  theme,
}: {
  text: any;
  theme: any;
}): JSX.Element;
export namespace FullscreenSection {
  namespace propTypes {
    const hasSerifFont: PropTypes.Requireable<boolean>;
    const text: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    const theme: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const hasSerifFont_1: boolean;
    export { hasSerifFont_1 as hasSerifFont };
    const text_1: any;
    export { text_1 as text };
    const theme_1: string;
    export { theme_1 as theme };
  }
}
import PropTypes from 'prop-types';
