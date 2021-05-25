import PropTypes from 'prop-types';

declare function StoreHoursList({ alternateHoursNote, className, heading, hoursList, theme, }: {
    alternateHoursNote: any;
    className: any;
    heading: any;
    hoursList: any;
    theme: any;
}): JSX.Element;
declare namespace StoreHoursList {
    namespace propTypes {
        const alternateHoursNote: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const heading: PropTypes.Requireable<string>;
        const hoursList: PropTypes.Requireable<PropTypes.InferProps<{
            dayName: PropTypes.Requireable<string>;
            hours: PropTypes.Requireable<string>;
            id: PropTypes.Requireable<string>;
            isAlternate: PropTypes.Requireable<boolean>;
        }>[]>;
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const alternateHoursNote_1: any;
        export { alternateHoursNote_1 as alternateHoursNote };
        const className_1: any;
        export { className_1 as className };
        const heading_1: any;
        export { heading_1 as heading };
        const hoursList_1: any[];
        export { hoursList_1 as hoursList };
        const theme_1: string;
        export { theme_1 as theme };
    }
}

export { StoreHoursList };
