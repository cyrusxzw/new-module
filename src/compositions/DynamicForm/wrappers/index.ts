import { CheckboxWrapper } from './Checkbox';
import { SelectWrapper } from './Select';
import { TextFieldWrapper } from './TextField';

const Checkbox = 'Checkbox';
const Select = 'Select';
const TextField = 'TextField';

export type AvailableFormFieldTypes =
  | typeof Checkbox
  | typeof Select
  | typeof TextField;

export const componentMap = {
  [Checkbox]: CheckboxWrapper,
  [Select]: SelectWrapper,
  [TextField]: TextFieldWrapper,
};
