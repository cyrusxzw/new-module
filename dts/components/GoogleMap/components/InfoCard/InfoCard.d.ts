export function InfoCard({
  address,
  className,
  copy,
  count,
  hasMarkerIndexes,
  openingHours,
  phoneNumber,
  storeName,
}: {
  address: any;
  className: any;
  copy: any;
  count: any;
  hasMarkerIndexes: any;
  openingHours: any;
  phoneNumber: any;
  storeName: any;
}): JSX.Element;
export namespace InfoCard {
  namespace propTypes {
    const address: PropTypes.Requireable<string>;
    const className: PropTypes.Requireable<string>;
    const copy: PropTypes.Requireable<
      PropTypes.InferProps<{
        directions: PropTypes.Requireable<string>;
        openingHours: PropTypes.Requireable<
          PropTypes.InferProps<{
            alternateHoursNote: PropTypes.Requireable<string>;
            heading: PropTypes.Requireable<string>;
          }>
        >;
      }>
    >;
    const count: PropTypes.Requireable<number>;
    const hasMarkerIndexes: PropTypes.Requireable<boolean>;
    const openingHours: PropTypes.Requireable<
      PropTypes.InferProps<{
        dayName: PropTypes.Requireable<string>;
        hours: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        isAlternate: PropTypes.Requireable<boolean>;
      }>[]
    >;
    const phoneNumber: PropTypes.Requireable<string>;
    const storeName: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const address_1: any;
    export { address_1 as address };
    const className_1: any;
    export { className_1 as className };
    export namespace copy_1 {
      export const directions: any;
      export namespace openingHours_1 {
        const alternateHoursNote: any;
        const heading: any;
      }
      export { openingHours_1 as openingHours };
    }
    export { copy_1 as copy };
    const count_1: any;
    export { count_1 as count };
    const hasMarkerIndexes_1: boolean;
    export { hasMarkerIndexes_1 as hasMarkerIndexes };
    const openingHours_2: any[];
    export { openingHours_2 as openingHours };
    const phoneNumber_1: any;
    export { phoneNumber_1 as phoneNumber };
    const storeName_1: any;
    export { storeName_1 as storeName };
  }
}
import PropTypes from 'prop-types';
