import PropTypes from 'prop-types';

declare function LoadMoreButton({ className, copy, dataTestRef, isEnabled }: {
    className: any;
    copy: any;
    dataTestRef: any;
    isEnabled: any;
}): JSX.Element;
declare namespace LoadMoreButton {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            actionLabel: PropTypes.Requireable<string>;
        }>>;
        const dataTestRef: PropTypes.Validator<string>;
        const isEnabled: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        export namespace copy_1 {
            const actionLabel: string;
        }
        export { copy_1 as copy };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const isEnabled_1: boolean;
        export { isEnabled_1 as isEnabled };
    }
}

export { LoadMoreButton };
