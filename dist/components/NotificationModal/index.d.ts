import { ReactElement } from 'react';

declare type NotificationModalProps = {
    backgroundColor?: string;
    className?: string;
    notificationMessage?: string;
};

declare const NotificationModal: ({ backgroundColor, className, notificationMessage, ...props }: NotificationModalProps) => ReactElement;

export { NotificationModal };
