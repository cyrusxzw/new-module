const isObjectPopulatedArray = (obj?: any) =>
  Array.isArray(obj) && typeof obj !== undefined && obj.length !== 0
    ? true
    : false;

export { isObjectPopulatedArray };
