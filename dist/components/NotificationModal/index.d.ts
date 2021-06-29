import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type NotificationModalProps = {
    backgroundColor?: string;
    className?: string;
    notificationMessage?: string;
};
declare type NotificationModalType = ComponentWithoutChildren<NotificationModalProps>;

declare const NotificationModal: NotificationModalType;

export { NotificationModal };
