export const matchCodeToText = (
  options: { value: string; text: string }[],
  code: string,
): string => {
  return options.find((x) => x.value === code)?.text ?? '';
};
