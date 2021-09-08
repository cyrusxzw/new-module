import type { ReactNode } from 'react';
import type { Mode } from 'react-hook-form/dist/index.ie11';
import type { SelectProps } from '~/components/Select/Select.types';
import type { TextInputV2Props } from '~/components/TextInputV2/TextInputV2.types';
import type { Themes } from '~/types';
import type { FieldValidation } from './validators/validators.types';
import type { AvailableFormFieldTypes } from './wrappers';

type FieldSchema = {
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

type FormFieldsRow = FieldSchema[];

export type FormSchema = FormFieldsRow[];

export type DynamicFormProps = {
  children?: ReactNode;
  className?: string;
  defaultValues?: Record<string, string>;
  formName?: string;
  formSchema?: FormSchema;
  onSubmit: (formData: Record<string, string>) => void;
  theme?: Themes;
  validationMode?: Mode;
};
