import PropTypes from 'prop-types';

declare function ReadMore({ articles, className }: {
    articles: any;
    className: any;
}): JSX.Element;
declare namespace ReadMore {
    namespace propTypes {
        const articles: PropTypes.Requireable<any[]>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const articles_1: any;
        export { articles_1 as articles };
        const className_1: any;
        export { className_1 as className };
    }
}

export { ReadMore };
