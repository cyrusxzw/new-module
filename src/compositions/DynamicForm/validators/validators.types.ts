export type FieldValidation = {
  isRequired?: {
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
};

export type ValidationRules = {
  pattern?: {
    value: RegExp;
    message: string;
  };
  maxLength?: FieldValidation['maxLength'];
  required?: string;
};
