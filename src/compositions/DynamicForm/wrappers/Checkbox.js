/* eslint-disable react/prop-types */
import React from 'react';
import { Controller } from 'react-hook-form/dist/index.ie11';
import { Checkbox } from '~/components/Checkbox';

export const CheckboxWrapper = ({
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
        onChange={e => onChange(e.target.checked)}
        theme={theme}
      />
    )}
    rules={rules}
  />
);
