import type { Themes } from '~/types';
import type { ModalBodyCopy } from './components/ModalBody/ModalBody.types';

type ModalAndModalBodyProps = {
  className?: string;
  isVisible: boolean;
  onClose: () => void;
  theme?: Themes;
};

type ModalProps = ModalAndModalBodyProps & ModalBodyCopy;

export type { ModalProps, ModalAndModalBodyProps };
