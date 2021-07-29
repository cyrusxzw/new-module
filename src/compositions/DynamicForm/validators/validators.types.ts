import type { UseControllerOptions } from 'react-hook-form/dist/index.ie11';

export type FieldValidation = {
  isRequired?: {
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  isSameAs?: {
    fieldName: string;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
};

export type ValidationRules = UseControllerOptions['rules'];
