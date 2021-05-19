import { getVariantRadioOptions } from './product';

const validArray = [
  {
    size: '100ml',
    sku: 'aes-200',
  },
  {
    sku: 'aes-100',
  },
  {
    size: '100ml',
    sku: 'aes-100',
  },
];

const invalidArray = [
  {
    size: '100ml',
  },
  {
    sku: 'aes-100',
  },
];

describe('product utils getVariantRadioOptions', () => {
  test('Expect to return array of variant options given valid input array', () => {
    expect(getVariantRadioOptions(validArray)).toHaveLength(2);
  });

  test('Expect to return empty array if no valid matchs found', () => {
    expect(getVariantRadioOptions(invalidArray)).toHaveLength(0);
  });
});
