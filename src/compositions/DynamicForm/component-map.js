import { FieldTypes } from './constants';
import { CheckboxWrapper, SelectWrapper, TextFieldWrapper } from './wrappers';

export const componentMap = {
  [FieldTypes.Checkbox]: CheckboxWrapper,
  [FieldTypes.Select]: SelectWrapper,
  [FieldTypes.TextField]: TextFieldWrapper,
};
