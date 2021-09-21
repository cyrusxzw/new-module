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

  return (
    <InputField
      className={formFieldClassSet}
      control={control}
      dataTestRef={testRef}
      defaultValue={defaultValues?.[name] || defaultValueFromSchema}
      errorMessage={errors[name]?.message}
      id={id}
      key={name}
      label={label}
      name={name}
      options={
        fieldSpecificValues.type === 'Select'
          ? fieldSpecificValues.options
          : undefined
      }
      rules={getValidationRules(validation, type, getValues)}
      subtype={
        fieldSpecificValues.type === 'TextField'
          ? fieldSpecificValues.subtype
          : undefined
      }
      theme={theme}
    />
  );
};
