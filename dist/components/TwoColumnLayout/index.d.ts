import PropTypes from 'prop-types';

declare function TwoColumnLayout({ childrenClassNames, className, content, hasFullWidthContent, id, isFlushOnSmall, isReversed, sidebar, theme, }: {
    childrenClassNames: any;
    className: any;
    content: any;
    hasFullWidthContent: any;
    id: any;
    isFlushOnSmall: any;
    isReversed: any;
    sidebar: any;
    theme: any;
}): JSX.Element;
declare namespace TwoColumnLayout {
    namespace propTypes {
        const childrenClassNames: PropTypes.Requireable<PropTypes.InferProps<{
            sidebar: PropTypes.Requireable<string>;
            content: PropTypes.Requireable<string>;
        }>>;
        const className: PropTypes.Requireable<string>;
        const content: PropTypes.Validator<any>;
        const hasFullWidthContent: PropTypes.Requireable<boolean>;
        const id: PropTypes.Requireable<string>;
        const isFlushOnSmall: PropTypes.Requireable<boolean>;
        const isReversed: PropTypes.Requireable<boolean>;
        const sidebar: PropTypes.Requireable<any>;
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export namespace childrenClassNames_1 {
            const sidebar_1: any;
            export { sidebar_1 as sidebar };
            const content_1: any;
            export { content_1 as content };
        }
        export { childrenClassNames_1 as childrenClassNames };
        const className_1: any;
        export { className_1 as className };
        const content_2: any;
        export { content_2 as content };
        const hasFullWidthContent_1: boolean;
        export { hasFullWidthContent_1 as hasFullWidthContent };
        const id_1: any;
        export { id_1 as id };
        const isFlushOnSmall_1: boolean;
        export { isFlushOnSmall_1 as isFlushOnSmall };
        const isReversed_1: boolean;
        export { isReversed_1 as isReversed };
        const sidebar_2: any;
        export { sidebar_2 as sidebar };
        const theme_1: string;
        export { theme_1 as theme };
    }
}

export { TwoColumnLayout };
