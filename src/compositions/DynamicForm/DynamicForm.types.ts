import type { ReactNode } from 'react';
import type { Mode } from 'react-hook-form/dist/index.ie11';
import type { DateSelectorProps } from '~/components/DateSelector/DateSelector.types';
import type { SelectProps } from '~/components/Select/Select.types';
import type { TextInputV2Props } from '~/components/TextInputV2/TextInputV2.types';
import type { Themes } from '~/types';
import type { FieldValidation } from './validators/validators.types';

type CheckBox = { type: 'Checkbox' };
type DateSelector = { type: 'DateSelector' } & Pick<
  DateSelectorProps,
  'copy' | 'maxYears'
>;
type Select = { type: 'Select' } & Pick<SelectProps, 'options'>;
type TextField = { type: 'TextField'; subtype?: TextInputV2Props['type'] };

export type FieldSchema = {
  /** An initial value for the field. The value in `defaultValues` prop for the same field will take precedence */
  defaultValue?: string;

  onChange?: (data) => void;

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
