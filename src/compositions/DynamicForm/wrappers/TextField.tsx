import React, { VFC } from 'react';
import { Controller } from 'react-hook-form/dist/index.ie11';
import { TextInputV2 } from '~/components/TextInputV2';
import { TextInputV2Props } from '~/components/TextInputV2/TextInputV2.types';
import type { CommonWrapperProps } from './wrappers.types';

type TextFieldWrapperProps = CommonWrapperProps & {
  subtype: TextInputV2Props['type'];
};

export const TextFieldWrapper: VFC<TextFieldWrapperProps> = ({
  className,
  control,
  dataTestRef,
  defaultValue,
  errorMessage,
  handleOnChange,
  id,
  isEnabled,
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
        classNames={{ wrapper: className }}
        dataTestRef={dataTestRef}
        errorMessage={errorMessage}
        id={id}
        isEnabled={isEnabled}
        label={label}
        name={name}
        onChange={(e) => {
          handleOnChange?.(e);
          onChange(e);
        }}
        theme={theme}
        type={type}
        value={value}
      />
    )}
    rules={rules}
  />
);
