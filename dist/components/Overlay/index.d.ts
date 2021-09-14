import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type OverlayProps = {
    className?: string;
    isVisible?: boolean;
    onClose: () => void;
};
declare type OverlayType = ComponentWithoutChildren<OverlayProps>;

declare const Overlay: OverlayType;

export { Overlay };
