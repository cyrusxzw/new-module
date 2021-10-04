import React, { VFC } from 'react';
import { Controller } from 'react-hook-form/dist/index.ie11';
import { Select } from '~/components/Select';
import type { SelectProps } from '~/components/Select/Select.types';
import type { CommonWrapperProps } from './wrappers.types';

type SelectWrapperProps = CommonWrapperProps & Pick<SelectProps, 'options'>;

export const SelectWrapper: VFC<SelectWrapperProps> = ({
  className,
  control,
  dataTestRef,
  defaultValue,
  errorMessage,
  isEnabled,
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
        dataTestRef={dataTestRef}
        errorMessage={errorMessage}
        isEnabled={isEnabled}
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
