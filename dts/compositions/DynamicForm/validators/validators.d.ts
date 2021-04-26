export function getValidationRules(
  validationObject: any,
  fieldType: any,
): {
  pattern: {
    value: RegExp;
    message: any;
  };
  maxLength: any;
  required: any;
};
