import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useForm, FormProvider } from 'react-hook-form/dist/index.ie11';
import { useThemeContext } from '~/contexts';
import { FormField } from './FormField';
import type { DynamicFormProps } from './DynamicForm.types';
import styles from './DynamicForm.module.css';

const DynamicForm = forwardRef<HTMLFormElement, DynamicFormProps>(
  function DynamicFormRef(
    {
      children,
      className,
      defaultValues,
      formName,
      formSchema,
      onSubmit,
      theme,
      validationMode = 'onChange',
    },
    ref,
  ) {
    const useFormMethods = useForm({ mode: validationMode });
    const currentTheme = useThemeContext(theme, 'dark');

    if (!formSchema) {
      return null;
    }

    const classSet = cx(styles[currentTheme], className);

    return (
      <FormProvider {...useFormMethods}>
        <form
          className={classSet}
          name={formName}
          onSubmit={useFormMethods.handleSubmit(onSubmit)}
          ref={ref}
        >
          {formSchema.map((formRow, formRowIndex) => {
            const isFirstFieldGroup = formRowIndex === 0;
            const isLastFieldGroup = formRowIndex === formSchema.length - 1;
            const fieldGroupClassSet = cx(styles.formRowWrapper, {
              [styles.firstGroup]: isFirstFieldGroup,
              [styles.lastGroup]: isLastFieldGroup,
            });

            return (
              <div className={fieldGroupClassSet} key={formRowIndex}>
                {formRow.map((fieldValues, fieldIndex) => {
                  const flex = fieldValues.styling?.flex;
                  const isFirstField = fieldIndex === 0;
                  const isLastField = fieldIndex === formRow.length - 1;
                  const formFieldClassSet = cx(styles.formField, {
                    [styles[`flex${flex}`]]: flex,
                    [styles.firstField]: isFirstField && isFirstFieldGroup,
                    [styles.lastField]: isLastField && isLastFieldGroup,
                  });

                  return (
                    <FormField
                      defaultValues={defaultValues}
                      formFieldClassSet={formFieldClassSet}
                      key={fieldValues.name}
                      theme={currentTheme}
                      {...fieldValues}
                    />
                  );
                })}
              </div>
            );
          })}
          {children}
        </form>
      </FormProvider>
    );
  },
);

export { DynamicForm };
