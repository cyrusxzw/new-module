import type { UseFormMethods } from 'react-hook-form/dist/index.ie11';
import type { AvailableFormFieldTypes } from '../wrappers';
import type { FieldValidation, ValidationRules } from './validators.types';

export const getValidationRules = (
  validationObject: FieldValidation,
  fieldType: AvailableFormFieldTypes,
  getValues: UseFormMethods['getValues'],
): ValidationRules => {
  const rules: ValidationRules = {};

  if (!validationObject) {
    return rules;
  }

  switch (fieldType) {
    case 'TextField':
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

      // Text equals another field
      if (validationObject.isSameAs) {
        rules.validate = (value: string) =>
          value === getValues(validationObject.isSameAs.fieldName) ||
          validationObject.isSameAs.message;
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
