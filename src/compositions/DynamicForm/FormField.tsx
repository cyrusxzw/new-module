import React from 'react';
import { useFormContext } from 'react-hook-form/dist/index.ie11';
import { componentMap } from './wrappers';
import { getValidationRules } from './validators/validators';
import type { VFC } from 'react';
import type { FieldSchema, DynamicFormProps } from './DynamicForm.types';

type FormFieldProps = FieldSchema & {
  formFieldClassSet: string;
  theme: DynamicFormProps['theme'];
  defaultValues: DynamicFormProps['defaultValues'];
};

export const FormField: VFC<FormFieldProps> = ({
  defaultValues,
  formFieldClassSet,
  theme,
  ...fieldValues
}) => {
  const { control, errors, getValues } = useFormContext();
  const {
    defaultValue: defaultValueFromSchema,
    id,
    isEnabled,
    label,
    name,
    testRef,
    validation,
    ...fieldSpecificValues
  } = fieldValues;
  const type = fieldSpecificValues.type;
  const InputField = componentMap[type];

  if (!InputField) {
    // eslint-disable-next-line no-console
    console.warn(`Field with type ${type} has no registered component`);
    return null;
  }

  const genericFieldProps = {
    className: formFieldClassSet,
    control,
    dataTestRef: testRef,
    defaultValue: defaultValues?.[name] || defaultValueFromSchema,
    errorMessage: errors[name]?.message,
    id,
    isEnabled,
    label,
    name,
    rules: getValidationRules(validation, type, getValues),
    theme,
  };

  const specificFieldProps = {
    copy:
      fieldSpecificValues.type === 'DateSelector'
        ? fieldSpecificValues.copy
        : undefined,
    maxYears:
      fieldSpecificValues.type === 'DateSelector'
        ? fieldSpecificValues.maxYears
        : undefined,
    options:
      fieldSpecificValues.type === 'Select'
        ? fieldSpecificValues.options
        : undefined,
    subtype:
      fieldSpecificValues.type === 'TextField'
        ? fieldSpecificValues.subtype
        : undefined,
  };

  return (
    <InputField key={name} {...genericFieldProps} {...specificFieldProps} />
  );
};
