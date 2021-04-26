export namespace StoreHoursListFixture {
  const className: string;
  const heading: string;
  const hoursList: (
    | {
        dayName: string;
        hours: string;
        id: string;
        isAlternate?: undefined;
      }
    | {
        dayName: string;
        hours: string;
        id: string;
        isAlternate: boolean;
      }
  )[];
  const alternateHoursNote: string;
}
