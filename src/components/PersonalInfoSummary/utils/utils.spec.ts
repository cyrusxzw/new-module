import { matchCodeToText } from './utils';

describe(`PersonalInfoSummary - utils`, () => {
  describe(`matchCodeToText`, () => {
    const options = [
      { value: 'cap', text: 'Captain' },
      { value: 'dunk', text: 'Dunkey' },
    ];

    it(`should return the text if the value specified is found`, () => {
      expect(matchCodeToText(options, 'cap')).toEqual('Captain');
    });

    it(`should return an empty string if the value specified is not found`, () => {
      expect(matchCodeToText(options, 'don')).toEqual('');
    });
  });
});
