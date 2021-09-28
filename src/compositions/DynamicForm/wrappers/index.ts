import { CheckboxWrapper } from './Checkbox';
import { DateSelectorWrapper } from './DateSelector';
import { SelectWrapper } from './Select';
import { TextFieldWrapper } from './TextField';

const Checkbox = 'Checkbox';
const DateSelector = 'DateSelector';
const Select = 'Select';
const TextField = 'TextField';

export type AvailableFormFieldTypes =
  | typeof Checkbox
  | typeof DateSelector
  | typeof Select
  | typeof TextField;

export const componentMap = {
  [Checkbox]: CheckboxWrapper,
  [DateSelector]: DateSelectorWrapper,
  [Select]: SelectWrapper,
  [TextField]: TextFieldWrapper,
};
