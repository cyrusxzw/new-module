import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { useThemeContext } from '~/contexts';
import { componentMap } from './component-map';
import styles from './DynamicForm.module.css';

const DynamicForm = forwardRef(function DynamicFormRef(
  { children, className, formSchema, onSubmit, theme },
  ref,
) {
  const { control, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });
  const currentTheme = useThemeContext(theme, 'dark');

  if (!formSchema) {
    return null;
  }

  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <form className={classSet} onSubmit={handleSubmit(onSubmit)} ref={ref}>
      {formSchema.map(
        (
          { name, id, label, validation, type, options, subtype, defaultValue },
          index,
        ) => {
          const InputField = componentMap[type];

          if (!InputField) {
            // eslint-disable-next-line no-console
            console.warn(`Field with type ${type} has no registered component`);
            return null;
          }

          const rules = {};

          if (validation.isRequired?.value) {
            rules.required = validation.isRequired.message;
          }

          if (validation.pattern) {
            rules.pattern = {
              value: new RegExp(validation.pattern.value),
              message: validation.pattern.message,
            };
          }

          rules.maxLength = validation.maxLength;

          return (
            <InputField
              control={control}
              defaultValue={defaultValue}
              errorMessage={errors[name]?.message}
              id={id}
              key={index}
              label={label}
              name={name}
              options={options}
              rules={rules}
              subtype={subtype}
              theme={currentTheme}
            />
          );
        },
      )}
      {children}
    </form>
  );
});

DynamicForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  formSchema: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

DynamicForm.defaultProps = {
  children: undefined,
  className: undefined,
  formSchema: undefined,
  onSubmit: undefined,
  theme: undefined,
};

export { DynamicForm };
