import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useForm } from 'react-hook-form/dist/index.ie11';
import { useThemeContext } from '~/contexts';
import { componentMap } from './component-map';
import { getValidationRules } from './validators/validators';
import styles from './DynamicForm.module.css';
import { FieldTypes } from './DynamicForm.constants';

const DynamicForm = forwardRef(function DynamicFormRef(
  { children, className, defaultValues, formSchema, onSubmit, theme },
  ref,
) {
  const { control, handleSubmit, errors } = useForm({
    mode: 'onChange',
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
                    key={index}
                    label={label}
                    name={name}
                    options={options}
                    rules={getValidationRules(validation, type)}
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
});

DynamicForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValues: PropTypes.object,
  formSchema: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        defaultValue: PropTypes.string,
        id: PropTypes.string,
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        options: PropTypes.array,
        styling: PropTypes.shape({ flex: PropTypes.number }),
        subtype: PropTypes.string,
        testRef: PropTypes.string,
        type: PropTypes.oneOf(Object.values(FieldTypes)),
        validation: PropTypes.object,
      }),
    ),
  ),
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

DynamicForm.defaultProps = {
  children: undefined,
  className: undefined,
  defaultValues: undefined,
  formSchema: undefined,
  onSubmit: undefined,
  theme: undefined,
};

export { DynamicForm };
