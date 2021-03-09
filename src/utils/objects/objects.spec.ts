import { isObjectPopulatedArray } from './objects';

describe('objects.isObjectPopulatedArray()', () => {
  test('Expect empty array to assert false', () => {
    expect(isObjectPopulatedArray([])).toEqual(false);
  });

  test('Expect object to assert false', () => {
    expect(isObjectPopulatedArray({ foo: 'bar' })).toEqual(false);
  });

  test('Expect undefined to assert false', () => {
    expect(isObjectPopulatedArray()).toEqual(false);
  });

  test('Expect popuated array to assert true', () => {
    expect(isObjectPopulatedArray(['foo'])).toEqual(true);
  });
});
