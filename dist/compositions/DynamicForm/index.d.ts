import React, { ReactNode } from 'react';
import { Mode } from 'react-hook-form/dist/index.ie11';
import { a as DateSelectorProps } from '../../sharedChunks/DateSelector.types';
import { S as SelectProps } from '../../sharedChunks/Select.types';
import { T as TextInputV2Props } from '../../sharedChunks/TextInputV2.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import '../../sharedChunks/Component.types';

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

declare type CheckBox = {
    type: 'Checkbox';
};
declare type DateSelector = {
    type: 'DateSelector';
} & Pick<DateSelectorProps, 'copy' | 'maxYears'>;
declare type Select = {
    type: 'Select';
} & Pick<SelectProps, 'options'>;
declare type TextField = {
    type: 'TextField';
    subtype?: TextInputV2Props['type'];
};
declare type FieldSchema = {
    /** An initial value for the field. The value in `defaultValues` prop for the same field will take precedence */
    defaultValue?: string;
    onChange?: (data: any) => void;
    /** The field's HTML id attribute */
    id?: string;
    isEnabled?: boolean;
    /** The field's label, often used for accessibility */
    label?: string;
    /** An identifier of the field to the form */
    name: string;
    /** Contains properties relating to the field's appearance */
    styling?: {
        /** Corresponds to the css `flex` property. Can be a value of 1, 2 or 3 */
        flex?: number;
    };
    /** Passed to fields as `dataTestRef` */
    testRef?: string;
    /** Contains validation rules for the form field */
    validation?: FieldValidation;
} & (CheckBox | DateSelector | Select | TextField);
declare type FormFieldsRow = FieldSchema[];
declare type FormSchema = FormFieldsRow[];
declare type DynamicFormProps = {
    children?: ReactNode;
    className?: string;
    defaultValues?: Record<string, string>;
    formName?: string;
    formSchema?: FormSchema;
    onSubmit: (formData: Record<string, string>) => void;
    theme?: Themes;
    validationMode?: Mode;
};

declare const DynamicForm: React.ForwardRefExoticComponent<DynamicFormProps & React.RefAttributes<HTMLFormElement>>;

export { DynamicForm, FieldSchema, FormSchema };
