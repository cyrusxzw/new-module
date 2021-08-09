/// <reference types="react" />
import React, { ReactNode } from 'react';
import { Mode } from 'react-hook-form/dist/index.ie11';
import { S as SelectProps } from '../../sharedChunks/Select.types';
import { T as TextInputV2Props } from '../../sharedChunks/TextInputV2.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type FieldValidation = {
    isRequired?: {
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
    isSameAs?: {
        fieldName: string;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    };
};

declare const Checkbox = "Checkbox";
declare const Select = "Select";
declare const TextField = "TextField";
declare type AvailableFormFieldTypes = typeof Checkbox | typeof Select | typeof TextField;

declare type FieldSchema = {
    /** An initial value for the field. The value in `defaultValues` prop for the same field will take presedence */
    defaultValue?: string;
    /** The field's HTML id attribute */
    id?: string;
    /** The field's label, often used for accessibility */
    label?: string;
    /** An identifier of the field to the form */
    name: string;
    /** Needed for the Select field type, passed on as the drop down options */
    options?: SelectProps['options'];
    /** Contains properties relating to the field's appearance */
    styling?: {
        /** Corresponds to the css `flex` property. Can be a value of 1, 2 or 3 */
        flex?: number;
    };
    /** Used as the type for the TextField field type */
    subtype?: TextInputV2Props['type'];
    /** Passed to fields as `dataTestRef` */
    testRef?: string;
    /** Defines the field type */
    type: AvailableFormFieldTypes;
    /** Contains validation rules for the form field */
    validation?: FieldValidation;
};
declare type FormFieldsRow = FieldSchema[];
declare type DynamicFormProps = {
    children?: ReactNode;
    className?: string;
    defaultValues?: Record<string, string>;
    formName?: string;
    formSchema?: FormFieldsRow[];
    onSubmit: (formData: Record<string, string>) => void;
    theme?: Themes;
    validationMode?: Mode;
};

declare const DynamicForm: React.ForwardRefExoticComponent<DynamicFormProps & React.RefAttributes<HTMLFormElement>>;

export { DynamicForm };
