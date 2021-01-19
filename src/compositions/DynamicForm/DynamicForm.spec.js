import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { DynamicForm } from './DynamicForm';
import * as validators from './validators/validators';
import { FieldTypes } from './DynamicForm.constants';

describe('<DynamicForm />', () => {
  const selectFieldSchema = {
    name: 'title',
    id: 'title',
    label: 'Title',
    type: 'Select',
    options: [
      {
        label: 'Mr',
        value: 'mr',
      },
      {
        label: 'Mrs',
        value: 'mrs',
      },
    ],
  };
  const textFieldSchema = {
    name: 'firstname',
    id: 'firstname',
    label: 'First name',
    defaultValue: 'Bruce',
    type: 'TextField',
    validation: {
      isRequired: {
        message: 'Please enter your first name',
      },
    },
    styling: {
      flex: 3,
    },
  };
  const checkboxFieldSchema = {
    name: 'ageCheck',
    id: 'ageCheck',
    label: 'I am over 18 years old',
    type: 'Checkbox',
  };

  beforeEach(() => {
    jest.spyOn(validators, 'getValidationRules').mockReset();
  });

  it('should not render anything if the schema is not defined', () => {
    const { container } = render(<DynamicForm onSubmit={() => {}} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should warn if the element type is not registered in the map', () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementationOnce(() => {});

    render(
      <DynamicForm
        formSchema={[[{ type: 'Not a real element' }]]}
        onSubmit={() => {}}
      />,
    );

    expect(consoleWarnSpy).toHaveBeenCalled();
  });

  it('should populate with the default value from schema', () => {
    const formSchema = [[textFieldSchema]];

    render(<DynamicForm formSchema={formSchema} onSubmit={() => {}} />);

    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue(textFieldSchema.defaultValue);
  });

  it('should prioritise default values from prop over schema', () => {
    const formSchema = [[textFieldSchema]];
    const defaultValues = { [textFieldSchema.name]: 'Clark' };

    render(
      <DynamicForm
        defaultValues={defaultValues}
        formSchema={formSchema}
        onSubmit={() => {}}
      />,
    );

    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('Clark');
  });

  it('should render all fields that are registered in the map', () => {
    const formSchema = [
      [selectFieldSchema, textFieldSchema],
      [checkboxFieldSchema],
    ];

    render(<DynamicForm formSchema={formSchema} onSubmit={() => {}} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should get the validation rules for each field', () => {
    const formSchema = [
      [selectFieldSchema],
      [textFieldSchema],
      [checkboxFieldSchema],
    ];

    render(<DynamicForm formSchema={formSchema} onSubmit={() => {}} />);

    expect(validators.getValidationRules).toHaveBeenCalledTimes(3);
    expect(validators.getValidationRules).toHaveBeenCalledWith(
      selectFieldSchema.validation,
      FieldTypes.Select,
    );
    expect(validators.getValidationRules).toHaveBeenCalledWith(
      textFieldSchema.validation,
      FieldTypes.TextField,
    );
    expect(validators.getValidationRules).toHaveBeenCalledWith(
      checkboxFieldSchema.validation,
      FieldTypes.Checkbox,
    );
  });

  it('should call the onSubmit function on submit', async () => {
    const onSubmitMock = jest.fn();

    render(
      <DynamicForm formSchema={[[textFieldSchema]]} onSubmit={onSubmitMock}>
        <button type="submit">Submit</button>
      </DynamicForm>,
    );
    const submitButton = screen.getByRole('button');

    await act(async () => {
      submitButton.click();
    });

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
