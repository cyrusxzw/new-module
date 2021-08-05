import { VFC } from 'react';

declare type DialogBannerProps = {
    className?: string;
    copy?: {
        closeButtonTitle?: string;
    };
    cta?: {
        dataTestRef?: string;
        id?: string;
        openInANewWindow?: boolean;
        text?: string;
        title?: string;
        url: string;
    };
    hasCloseButton?: boolean;
    isVisible?: boolean;
    message: string;
    onClose: () => void;
    position?: 'top' | 'bottom';
    theme?: 'dark' | 'black';
    heading: string;
};
declare type DialogBannerType = VFC<DialogBannerProps>;

declare const DialogBanner: DialogBannerType;

export { DialogBanner };
