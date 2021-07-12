import PropTypes from 'prop-types';

declare function TextInput({ className, defaultValue, hasContent, hasError, id, isEnabled, inputClassName, inputRef, label, max, min, name, type, maxLength, hasValidation, onBlur, onChange, prefixElement, theme, value, ...moreProps }: {
    [x: string]: any;
    className: any;
    defaultValue: any;
    hasContent: any;
    hasError: any;
    id: any;
    isEnabled: any;
    inputClassName: any;
    inputRef: any;
    label: any;
    max: any;
    min: any;
    name: any;
    type: any;
    maxLength: any;
    hasValidation: any;
    onBlur: any;
    onChange: any;
    prefixElement: any;
    theme: any;
    value: any;
}): JSX.Element;
declare namespace TextInput {
    const propTypes: {
        className: PropTypes.Requireable<string>;
        defaultValue: PropTypes.Requireable<string>;
        hasContent: PropTypes.Requireable<boolean>;
        hasError: PropTypes.Requireable<boolean>;
        hasValidation: PropTypes.Requireable<boolean>;
        id: PropTypes.Validator<string>;
        inputClassName: PropTypes.Requireable<string>;
        inputRef: PropTypes.Requireable<(...args: any[]) => any>;
        isEnabled: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        max: PropTypes.Requireable<number>;
        min: PropTypes.Requireable<number>;
        name: PropTypes.Requireable<string>;
        maxLength: PropTypes.Requireable<string | number>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        prefixElement: PropTypes.Requireable<PropTypes.ReactElementLike>;
        theme: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        'data-test-ref': PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string>;
    };
    const defaultProps: {
        className: any;
        defaultValue: any;
        hasContent: boolean;
        hasError: boolean;
        hasValidation: boolean;
        inputClassName: any;
        inputRef: any;
        isEnabled: boolean;
        label: any;
        max: any;
        min: any;
        name: any;
        maxLength: any;
        onBlur: any;
        onChange: any;
        prefixElement: any;
        theme: string;
        type: string;
        'data-test-ref': any;
        value: any;
    };
}

export { TextInput };
