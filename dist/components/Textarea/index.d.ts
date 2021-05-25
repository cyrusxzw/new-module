import PropTypes from 'prop-types';

declare function Textarea({ className, dataTestRef, defaultValue, id, isEnabled, inputRef, maxLength, name, onBlur, onChange, rows, textareaClassName, theme, value, }: {
    className: any;
    dataTestRef: any;
    defaultValue: any;
    id: any;
    isEnabled: any;
    inputRef: any;
    maxLength: any;
    name: any;
    onBlur: any;
    onChange: any;
    rows: any;
    textareaClassName: any;
    theme: any;
    value: any;
}): JSX.Element;
declare namespace Textarea {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const dataTestRef: PropTypes.Requireable<string>;
        const defaultValue: PropTypes.Requireable<string>;
        const id: PropTypes.Validator<string>;
        const isEnabled: PropTypes.Requireable<boolean>;
        const inputRef: PropTypes.Requireable<(...args: any[]) => any>;
        const maxLength: PropTypes.Requireable<number>;
        const name: PropTypes.Requireable<string>;
        const textareaClassName: PropTypes.Requireable<string>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const rows: PropTypes.Requireable<number>;
        const theme: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: any;
        export { className_1 as className };
        const dataTestRef_1: any;
        export { dataTestRef_1 as dataTestRef };
        const defaultValue_1: any;
        export { defaultValue_1 as defaultValue };
        const id_1: any;
        export { id_1 as id };
        const isEnabled_1: boolean;
        export { isEnabled_1 as isEnabled };
        const inputRef_1: any;
        export { inputRef_1 as inputRef };
        const maxLength_1: any;
        export { maxLength_1 as maxLength };
        const name_1: any;
        export { name_1 as name };
        const textareaClassName_1: any;
        export { textareaClassName_1 as textareaClassName };
        const onBlur_1: any;
        export { onBlur_1 as onBlur };
        const onChange_1: any;
        export { onChange_1 as onChange };
        const rows_1: any;
        export { rows_1 as rows };
        const theme_1: string;
        export { theme_1 as theme };
        const value_1: any;
        export { value_1 as value };
    }
}

export { Textarea };
