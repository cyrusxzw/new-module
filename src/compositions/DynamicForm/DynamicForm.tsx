import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useForm } from 'react-hook-form/dist/index.ie11';
import { useThemeContext } from '~/contexts';
import { getValidationRules } from './validators/validators';
import { componentMap } from './wrappers';
import type { DynamicFormProps } from './DynamicForm.types';
import styles from './DynamicForm.module.css';

const DynamicForm = forwardRef<HTMLFormElement, DynamicFormProps>(
  function DynamicFormRef(
    {
      children,
      className,
      defaultValues,
      formSchema,
      onSubmit,
      theme,
      validationMode = 'onChange',
    },
    ref,
  ) {
    const { control, handleSubmit, errors, getValues } = useForm({
      mode: validationMode,
    });
    const currentTheme = useThemeContext(theme, 'dark');

    if (!formSchema) {
      return null;
    }

    const classSet = cx(styles[currentTheme], className);

    return (
      <form className={classSet} onSubmit={handleSubmit(onSubmit)} ref={ref}>
        {formSchema.map((fieldsArray, fieldsArrayIndex) => {
          const isFirstFieldGroup = fieldsArrayIndex === 0;
          const isLastFieldGroup = fieldsArrayIndex === formSchema.length - 1;
          const fieldGroupClassSet = cx(styles.formRowWrapper, {
            [styles.firstGroup]: isFirstFieldGroup,
            [styles.lastGroup]: isLastFieldGroup,
          });

          return (
            <div className={fieldGroupClassSet} key={fieldsArrayIndex}>
              {fieldsArray.map(
                (
                  {
                    defaultValue: defaultValueFromSchema,
                    id,
                    label,
                    name,
                    options,
                    styling,
                    subtype,
                    testRef,
                    type,
                    validation,
                  },
                  index,
                ) => {
                  const InputField = componentMap[type];

                  if (!InputField) {
                    // eslint-disable-next-line no-console
                    console.warn(
                      `Field with type ${type} has no registered component`,
                    );
                    return null;
                  }

                  const flex = styling?.flex;
                  const isFirstField = index === 0;
                  const isLastField = index === fieldsArray.length - 1;
                  const formFieldClassSet = cx(styles.formField, {
                    [styles[`flex${flex}`]]: flex,
                    [styles.firstField]: isFirstField && isFirstFieldGroup,
                    [styles.lastField]: isLastField && isLastFieldGroup,
                  });

                  return (
                    <InputField
                      className={formFieldClassSet}
                      control={control}
                      dataTestRef={testRef}
                      defaultValue={
                        defaultValues?.[name] || defaultValueFromSchema
                      }
                      errorMessage={errors[name]?.message}
                      id={id}
                      key={name}
                      label={label}
                      name={name}
                      options={options}
                      rules={getValidationRules(validation, type, getValues)}
                      subtype={subtype}
                      theme={currentTheme}
                    />
                  );
                },
              )}
            </div>
          );
        })}
        {children}
      </form>
    );
  },
);

export { DynamicForm };
