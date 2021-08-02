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
  id,
  label,
  name,
  rules,
  theme,
}) => (
  <Controller
    control={control}
    defaultValue={defaultValue || false}
    name={name}
    render={({ onChange }) => (
      <Checkbox
        className={className}
        content={label}
        dataTestRef={dataTestRef}
        errorMessage={errorMessage}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        theme={theme}
      />
    )}
    rules={rules}
  />
);
