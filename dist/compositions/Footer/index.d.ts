import PropTypes from 'prop-types';

declare function Footer({ blocks, className, consentErrorMsg, iconLinks, errorMessage, notificationMessage, showTermsConditionsTextBox, subscriptionMessage, termsAndCondition, termsMessage, onClick, }: {
    blocks: any;
    className: any;
    consentErrorMsg: any;
    iconLinks: any;
    errorMessage: any;
    notificationMessage: any;
    showTermsConditionsTextBox: any;
    subscriptionMessage: any;
    termsAndCondition: any;
    termsMessage: any;
    onClick: any;
}): JSX.Element;
declare namespace Footer {
    namespace propTypes {
        const blocks: PropTypes.Requireable<PropTypes.InferProps<{
            copy: PropTypes.Requireable<string>;
            heading: PropTypes.Requireable<string>;
            isVisibleOnTabletAndMobile: PropTypes.Requireable<boolean>;
            links: PropTypes.Requireable<any[]>;
        }>[]>;
        const className: PropTypes.Requireable<string>;
        const consentErrorMsg: PropTypes.Requireable<string>;
        const iconLinks: PropTypes.Requireable<any[]>;
        const errorMessage: PropTypes.Requireable<string>;
        const notificationMessage: PropTypes.Requireable<string>;
        const showTermsConditionsTextBox: PropTypes.Requireable<boolean>;
        const subscriptionMessage: PropTypes.Requireable<string>;
        const termsAndCondition: PropTypes.Requireable<string>;
        const termsMessage: PropTypes.Requireable<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const blocks_1: any;
        export { blocks_1 as blocks };
        const className_1: any;
        export { className_1 as className };
        const consentErrorMsg_1: any;
        export { consentErrorMsg_1 as consentErrorMsg };
        const iconLinks_1: any;
        export { iconLinks_1 as iconLinks };
        const errorMessage_1: any;
        export { errorMessage_1 as errorMessage };
        const notificationMessage_1: any;
        export { notificationMessage_1 as notificationMessage };
        const showTermsConditionsTextBox_1: any;
        export { showTermsConditionsTextBox_1 as showTermsConditionsTextBox };
        const subscriptionMessage_1: any;
        export { subscriptionMessage_1 as subscriptionMessage };
        const termsAndCondition_1: any;
        export { termsAndCondition_1 as termsAndCondition };
        const termsMessage_1: any;
        export { termsMessage_1 as termsMessage };
        const onClick_1: any;
        export { onClick_1 as onClick };
    }
}

export { Footer };
