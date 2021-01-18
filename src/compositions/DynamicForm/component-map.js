/* eslint-disable react/prop-types */
import React from 'react';
import { Controller } from 'react-hook-form';

import { Checkbox } from '~/components/Checkbox';
import { Select } from '~/components/Select';
import { TextInputV2 } from '~/components/TextInputV2';

export const componentMap = {
  Checkbox: ({
    className,
    control,
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
          errorMessage={errorMessage}
          id={id}
          onChange={e => onChange(e.target.checked)}
          theme={theme}
        />
      )}
      rules={rules}
    />
  ),
  Select: ({
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
  ),
  TextField: ({
    className,
    control,
    defaultValue,
    errorMessage,
    id,
    label,
    name,
    rules,
    subtype: type,
    theme,
  }) => (
    <Controller
      control={control}
      defaultValue={defaultValue || ''}
      name={name}
      render={({ onChange, value }) => (
        <TextInputV2
          classes={{ wrapper: className }}
          errorMessage={errorMessage}
          id={id}
          label={label}
          onChange={onChange}
          theme={theme}
          type={type}
          value={value}
        />
      )}
      rules={rules}
    />
  ),
};
