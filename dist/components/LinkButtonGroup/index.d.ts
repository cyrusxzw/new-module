import PropTypes from 'prop-types';

declare function LinkButtonGroup({ children, className, hasFitContent, isFlush, isFullWidth, textAlign, theme, }: {
    children: any;
    className: any;
    hasFitContent: any;
    isFlush: any;
    isFullWidth: any;
    textAlign: any;
    theme: any;
}): JSX.Element;
declare namespace LinkButtonGroup {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>;
        const className: PropTypes.Requireable<string>;
        const hasFitContent: PropTypes.Requireable<boolean>;
        const isFlush: PropTypes.Requireable<boolean>;
        const isFullWidth: PropTypes.Requireable<boolean>;
        const textAlign: PropTypes.Requireable<string>;
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const children_1: any;
        export { children_1 as children };
        const className_1: any;
        export { className_1 as className };
        const hasFitContent_1: boolean;
        export { hasFitContent_1 as hasFitContent };
        const isFlush_1: boolean;
        export { isFlush_1 as isFlush };
        const isFullWidth_1: boolean;
        export { isFullWidth_1 as isFullWidth };
        const textAlign_1: string;
        export { textAlign_1 as textAlign };
        const theme_1: any;
        export { theme_1 as theme };
    }
}

export { LinkButtonGroup };
