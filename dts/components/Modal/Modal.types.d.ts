import type { Themes } from '~/types';
import type { ModalBodyCopy } from './components/ModalBody/ModalBody.types';
declare type ModalAndModalBodyProps = {
  className?: string;
  isVisible: boolean;
  onClose: () => void;
  theme?: Themes;
};
declare type ModalProps = ModalAndModalBodyProps & ModalBodyCopy;
export type { ModalProps, ModalAndModalBodyProps };
