/* istanbul ignore file */
const StoreHoursListFixture = {
  className: '',
  heading: 'Opening hours',
  hoursList: [
    { dayName: 'Monday', hours: '11am - 4pm', id: '1' },
    { dayName: 'Tuesday', hours: '10am - 3pm', id: '2', isAlternate: true },
    { dayName: 'Wednesday', hours: '10am - 3pm', id: '3' },
    { dayName: 'Thursday', hours: '10am - 3pm', id: '4' },
    { dayName: 'Friday', hours: '10am - 3pm', id: '5' },
    { dayName: 'Saturday', hours: '10am - 3pm', id: '6', isAlternate: true },
    { dayName: 'Sunday', hours: '10am - 3pm', id: '7' },
  ],
  alternateHoursNote: 'Special opening hours',
};

export { StoreHoursListFixture };
