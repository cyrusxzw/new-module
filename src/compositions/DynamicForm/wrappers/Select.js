/* eslint-disable react/prop-types */
import React from 'react';
import { Controller } from 'react-hook-form';
import { Select } from '~/components/Select';

export const SelectWrapper = ({
  className,
  control,
  defaultValue,
  errorMessage,
  id,
  label,
  name,
  options,
  rules,
  theme,
}) => (
  <Controller
    control={control}
    defaultValue={defaultValue || ''}
    name={name}
    render={({ onChange, value }) => (
      <Select
        className={className}
        errorMessage={errorMessage}
        id={id}
        label={label}
        name={name}
        onChange={onChange}
        options={options}
        theme={theme}
        value={value}
      />
    )}
    rules={rules}
  />
);
