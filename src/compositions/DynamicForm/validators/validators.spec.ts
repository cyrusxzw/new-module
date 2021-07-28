import { getValidationRules } from './validators';
import type { AvailableFormFieldTypes } from '../wrappers';

describe('DynamicForm field validators', () => {
  const getValuesMock = jest.fn().mockReturnValue('Test1234');

  describe(`TextField validation rules`, () => {
    const fieldType = 'TextField';

    it('should create a validation rule for pattern requirements', () => {
      const schemaRequirements = {
        pattern: {
          value: '1234',
          message: 'must be 1234',
        },
      };
      const expectedReturn = {
        pattern: {
          value: new RegExp(schemaRequirements.pattern.value),
          message: schemaRequirements.pattern.message,
        },
      };

      expect(
        getValidationRules(schemaRequirements, fieldType, getValuesMock),
      ).toEqual(expectedReturn);
    });

    it('should assign the maximum length validation object from the schema', () => {
      const schemaRequirements = {
        maxLength: {
          value: 10,
          message: 'must be shorter than 10 characters',
        },
      };

      expect(
        getValidationRules(schemaRequirements, fieldType, getValuesMock),
      ).toEqual({
        maxLength: schemaRequirements.maxLength,
      });
    });

    it('should generate a correct validation function if the field should have the same value as another', () => {
      const schemaRequirements = {
        isSameAs: {
          fieldName: 'password',
          message: 'passwords must match',
        },
      };

      const sameValueFunction: any = getValidationRules(
        schemaRequirements,
        fieldType,
        getValuesMock,
      ).validate;

      expect(sameValueFunction('Test1234')).toEqual(true);
      expect(sameValueFunction('mismatching text')).toEqual(
        schemaRequirements.isSameAs.message,
      );
      expect(getValuesMock).toHaveBeenCalledWith(
        schemaRequirements.isSameAs.fieldName,
      );
    });
  });

  describe('Generic validation rules', () => {
    it('should create a validation rule for required fields', () => {
      const fieldType = 'Something not in the switch statement keys' as AvailableFormFieldTypes;
      const schemaRequirements = {
        isRequired: {
          message: 'You must enter a value for this here field see',
        },
      };

      expect(
        getValidationRules(schemaRequirements, fieldType, getValuesMock),
      ).toEqual({
        required: schemaRequirements.isRequired.message,
      });
    });
  });

  it('should not fail when validationObject is undefined', () => {
    expect(
      getValidationRules(undefined, 'TextField', getValuesMock),
    ).toStrictEqual({});
  });
});
