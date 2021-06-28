import type { ComponentWithoutChildren } from '~/types';

type NotificationModalProps = {
  backgroundColor?: string;
  className?: string;
  notificationMessage?: string;
};

type NotificationModalType = ComponentWithoutChildren<NotificationModalProps>;

export type { NotificationModalProps, NotificationModalType };
