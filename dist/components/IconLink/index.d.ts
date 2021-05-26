import PropTypes from 'prop-types';

declare function IconLink({ altText, className, dataTestRef, hasTargetInNewWindow, height, icon, iconImageClassName, target, width, }: {
    altText: any;
    className: any;
    dataTestRef: any;
    hasTargetInNewWindow: any;
    height: any;
    icon: any;
    iconImageClassName: any;
    target: any;
    width: any;
}): JSX.Element;
declare namespace IconLink {
    namespace propTypes {
        const altText: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const dataTestRef: PropTypes.Requireable<string>;
        const hasTargetInNewWindow: PropTypes.Requireable<boolean>;
        const height: PropTypes.Requireable<number>;
        const icon: PropTypes.Requireable<object>;
        const iconImageClassName: PropTypes.Requireable<string>;
        const target: PropTypes.Requireable<string>;
        const width: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        const altText_1: any;
        export { altText_1 as altText };
        const className_1: any;
        export { className_1 as className };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const hasTargetInNewWindow_1: boolean;
        export { hasTargetInNewWindow_1 as hasTargetInNewWindow };
        const height_1: number;
        export { height_1 as height };
        const icon_1: any;
        export { icon_1 as icon };
        const iconImageClassName_1: any;
        export { iconImageClassName_1 as iconImageClassName };
        const target_1: any;
        export { target_1 as target };
        const width_1: number;
        export { width_1 as width };
    }
}

export { IconLink };
