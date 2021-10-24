import React, { VFC } from 'react';
import { Controller } from 'react-hook-form/dist/index.ie11';
import { Checkbox } from '~/components/Checkbox';
import type { CommonWrapperProps } from './wrappers.types';

type CheckboxWrapperProps = CommonWrapperProps;

export const CheckboxWrapper: VFC<CheckboxWrapperProps> = ({
  className,
  control,
  dataTestRef,
  defaultValue,
  errorMessage,
  onChange,
  id,
  isEnabled,
  label,
  name,
  rules,
  theme,
}) => (
  <Controller
    control={control}
    defaultValue={defaultValue || false}
    name={name}
    render={({ onChange: reactHookFormOnChange }) => (
      <Checkbox
        className={className}
        content={label}
        dataTestRef={dataTestRef}
        errorMessage={errorMessage}
        id={id}
        isEnabled={isEnabled}
        name={name}
        onChange={(e) => {
          onChange?.(e);
          reactHookFormOnChange(e.target.checked);
        }}
        theme={theme}
      />
    )}
    rules={rules}
  />
);
