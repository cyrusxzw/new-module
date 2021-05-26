import PropTypes from 'prop-types';

declare function StoreDetailHeader({ alternateHoursNote, className, copy, email, location, openingHours, phone, storeName, theme, }: {
    alternateHoursNote: any;
    className: any;
    copy: any;
    email: any;
    location: any;
    openingHours: any;
    phone: any;
    storeName: any;
    theme: any;
}): JSX.Element;
declare namespace StoreDetailHeader {
    namespace propTypes {
        const alternateHoursNote: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            location: PropTypes.Requireable<string>;
            email: PropTypes.Requireable<string>;
            phone: PropTypes.Requireable<string>;
            openingHours: PropTypes.Requireable<string>;
        }>>;
        const email: PropTypes.Requireable<string>;
        const location: PropTypes.Requireable<string>;
        const openingHours: PropTypes.Requireable<any[]>;
        const phone: PropTypes.Requireable<string>;
        const storeName: PropTypes.Validator<string>;
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const alternateHoursNote_1: any;
        export { alternateHoursNote_1 as alternateHoursNote };
        const className_1: any;
        export { className_1 as className };
        export namespace copy_1 {
            const location_1: any;
            export { location_1 as location };
            const email_1: any;
            export { email_1 as email };
            const phone_1: any;
            export { phone_1 as phone };
            const openingHours_1: any;
            export { openingHours_1 as openingHours };
        }
        export { copy_1 as copy };
        const email_2: any;
        export { email_2 as email };
        const location_2: any;
        export { location_2 as location };
        const openingHours_2: any;
        export { openingHours_2 as openingHours };
        const phone_2: any;
        export { phone_2 as phone };
        const storeName_1: any;
        export { storeName_1 as storeName };
        const theme_1: string;
        export { theme_1 as theme };
    }
}

export { StoreDetailHeader };
