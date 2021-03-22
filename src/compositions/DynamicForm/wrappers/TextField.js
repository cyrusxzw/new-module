/* eslint-disable react/prop-types */
import React from 'react';
import { Controller } from 'react-hook-form/dist/index.ie11';
import { TextInputV2 } from '~/components/TextInputV2';

export const TextFieldWrapper = ({
  className,
  control,
  dataTestRef,
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
        dataTestRef={dataTestRef}
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
);
