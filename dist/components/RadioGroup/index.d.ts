import PropTypes from 'prop-types';

declare function RadioGroup({ className, dataTestRef, errorMessage, name, onChange, options, theme, value, }: {
    className: any;
    dataTestRef: any;
    errorMessage: any;
    name: any;
    onChange: any;
    options: any;
    theme: any;
    value: any;
}): JSX.Element;
declare namespace RadioGroup {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const dataTestRef: PropTypes.Requireable<string>;
        const errorMessage: PropTypes.Requireable<string>;
        const name: PropTypes.Validator<string>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const options: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<string>;
        }>[]>;
        const theme: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const errorMessage_1: any;
        export { errorMessage_1 as errorMessage };
        const name_1: any;
        export { name_1 as name };
        const onChange_1: any;
        export { onChange_1 as onChange };
        const options_1: any[];
        export { options_1 as options };
        const theme_1: string;
        export { theme_1 as theme };
        const value_1: any;
        export { value_1 as value };
    }
}

export { RadioGroup };
