import type { ComponentWithoutChildren, Themes } from '~/types';

type MessageProps = {
  className?: string;
  copy: string;
  heading: string;
  id?: string;
  link?: {
    title: string;
    url: string;
  };
  theme?: Themes;
};

type MessageType = ComponentWithoutChildren<MessageProps>;

export type { MessageProps, MessageType };
