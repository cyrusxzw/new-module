import type { ComponentWithoutChildren, Themes } from '~/types';
import type { MessageProps } from './components/Message/Message.types';

type SecondaryMessageProps = {
  className?: string;
  id?: string;
  items?: [MessageProps?, MessageProps?];
  theme?: Themes;
};

type SecondaryMessageType = ComponentWithoutChildren<SecondaryMessageProps>;

export type { SecondaryMessageProps, SecondaryMessageType };
