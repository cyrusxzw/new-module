import PropTypes from 'prop-types';

declare function GoogleMap({ center, className, copy, customMarker, hasMarkerIndexes, id, initialZoom, places, theme, }: {
    center: any;
    className?: any;
    copy?: {};
    customMarker: any;
    hasMarkerIndexes: any;
    id: any;
    initialZoom: any;
    places: any;
    theme: any;
}): JSX.Element;
declare namespace GoogleMap {
    namespace propTypes {
        const center: PropTypes.Validator<PropTypes.InferProps<{
            lat: PropTypes.Requireable<number>;
            lng: PropTypes.Requireable<number>;
        }>>;
        const className: PropTypes.Requireable<string>;
        const copy: PropTypes.Requireable<PropTypes.InferProps<{
            directions: PropTypes.Requireable<string>;
            storeLocator: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                message: PropTypes.Requireable<string>;
                title: PropTypes.Requireable<string>;
                url: PropTypes.Requireable<string>;
            }>>;
            openingHours: PropTypes.Requireable<PropTypes.InferProps<{
                alternateHoursNote: PropTypes.Requireable<string>;
                heading: PropTypes.Requireable<string>;
            }>>;
        }>>;
        const customMarker: PropTypes.Requireable<PropTypes.InferProps<{
            lat: PropTypes.Requireable<number>;
            lng: PropTypes.Requireable<number>;
            type: PropTypes.Requireable<string>;
        }>>;
        const hasMarkerIndexes: PropTypes.Requireable<boolean>;
        const id: PropTypes.Requireable<string>;
        const initialZoom: PropTypes.Requireable<number>;
        const places: PropTypes.Requireable<PropTypes.InferProps<{
            lat: PropTypes.Requireable<number>;
            lng: PropTypes.Requireable<number>;
            id: PropTypes.Requireable<string>;
            storeName: PropTypes.Requireable<string>;
            storeType: PropTypes.Requireable<string>;
            address: PropTypes.Requireable<string>;
            phoneNumber: PropTypes.Requireable<string>;
            openingHours: PropTypes.Requireable<any[]>;
        }>[]>;
        const theme: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const center_1: {};
        export { center_1 as center };
        const className_1: any;
        export { className_1 as className };
        export namespace copy_1 {
            const directions: string;
            namespace storeLocator {
                const label: string;
                const message: string;
                const title: string;
                const url: string;
            }
            namespace openingHours {
                const alternateHoursNote: string;
                const heading: string;
            }
        }
        export { copy_1 as copy };
        const customMarker_1: any;
        export { customMarker_1 as customMarker };
        const hasMarkerIndexes_1: boolean;
        export { hasMarkerIndexes_1 as hasMarkerIndexes };
        const id_1: any;
        export { id_1 as id };
        const initialZoom_1: number;
        export { initialZoom_1 as initialZoom };
        const places_1: any[];
        export { places_1 as places };
        const theme_1: number;
        export { theme_1 as theme };
    }
}

export { GoogleMap };
