import { FieldTypes } from '../DynamicForm.constants';

export const getValidationRules = (validationObject, fieldType) => {
  const rules = {};

  if (!validationObject) {
    return rules;
  }

  switch (fieldType) {
    case FieldTypes.TextField:
      // Text pattern (Regex)
      if (validationObject.pattern) {
        rules.pattern = {
          value: new RegExp(validationObject.pattern.value),
          message: validationObject.pattern.message,
        };
      }

      // Text maximum length
      if (validationObject.maxLength) {
        rules.maxLength = validationObject.maxLength;
      }

    // eslint-disable-next-line no-fallthrough
    default:
      // applies to all field types
      if (validationObject.isRequired) {
        rules.required = validationObject.isRequired.message;
      }
      break;
  }

  return rules;
};
