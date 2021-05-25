import PropTypes from 'prop-types';

declare function NotificationModal({ backgroundColor, className, notificationMessage, ...props }: {
    [x: string]: any;
    backgroundColor: any;
    className: any;
    notificationMessage: any;
}): JSX.Element;
declare namespace NotificationModal {
    namespace propTypes {
        const backgroundColor: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const notificationMessage: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const backgroundColor_1: any;
        export { backgroundColor_1 as backgroundColor };
        const className_1: any;
        export { className_1 as className };
        const notificationMessage_1: any;
        export { notificationMessage_1 as notificationMessage };
    }
}

export { NotificationModal };
