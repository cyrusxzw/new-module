import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type GoogleMapProps = {
    center: {
        lat?: number;
        lng?: number;
    };
    className?: string;
    copy?: {
        directions?: string;
        storeLocator?: {
            label?: string;
            message?: string;
            title?: string;
            url?: string;
        };
        openingHours?: {
            alternateHoursNote?: string;
            heading?: string;
        };
    };
    customMarker?: {
        lat?: number;
        lng?: number;
        type?: 'PIN' | 'PLACE';
    };
    hasMarkerIndexes?: boolean;
    id?: string;
    initialZoom?: number;
    places?: {
        lat?: number;
        lng?: number;
        id?: string;
        storeName?: string;
        storeType?: string;
        address?: string;
        phoneNumber?: string;
        openingHours?: any[];
    }[];
    theme?: Themes;
};
declare type GoogleMapType = ComponentWithoutChildren<GoogleMapProps>;

declare const GoogleMap: GoogleMapType;

export { GoogleMap };
