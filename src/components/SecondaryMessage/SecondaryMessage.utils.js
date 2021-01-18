const arrayOfLength = (maxLength, props, propName, componentName) => {
  const arrayPropLength = props[propName].length;

  if (arrayPropLength > maxLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected less than ${maxLength}) for prop ${propName} supplied to ${componentName}.`,
    );
  }
};

export { arrayOfLength };
