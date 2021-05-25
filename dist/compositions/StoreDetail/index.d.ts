import PropTypes from 'prop-types';

declare function StoreDetail({ className }: {
    className: any;
}): JSX.Element;
declare namespace StoreDetail {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
    }
}

export { StoreDetail };
