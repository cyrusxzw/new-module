/// <reference types="react" />
declare type OverlayProps = {
    className?: string;
    isVisible?: boolean;
    onClose: () => void;
};

declare const Overlay: ({ className, isVisible, onClose }: OverlayProps) => JSX.Element;

export { Overlay };
