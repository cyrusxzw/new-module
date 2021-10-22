import React, { VFC } from 'react';
import { Controller } from 'react-hook-form/dist/index.ie11';
import { DateSelector } from '~/components/DateSelector';
import { DateSelectorProps } from '~/components/DateSelector/DateSelector.types';
import type { CommonWrapperProps } from './wrappers.types';

type DateSelectorWrapperProps = CommonWrapperProps &
  Pick<DateSelectorProps, 'copy' | 'maxYears'>;

export const DateSelectorWrapper: VFC<DateSelectorWrapperProps> = ({
  className,
  control,
  copy,
  defaultValue,
  onChange,
  isEnabled,
  maxYears,
  name,
  rules,
  theme,
}) => (
  <Controller
    control={control}
    defaultValue={defaultValue || ''}
    name={name}
    render={({ onChange: reactHookFormOnChange, value }) => (
      <DateSelector
        className={className}
        copy={copy}
        isEnabled={isEnabled}
        maxYears={maxYears}
        name={name}
        onChange={(date) => {
          onChange?.(date);
          reactHookFormOnChange(date);
        }}
        theme={theme}
        value={value}
      />
    )}
    rules={rules}
  />
);
