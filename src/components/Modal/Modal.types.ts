import type { ComponentWithChildren, Themes } from '~/types';
import type { ModalBodyCopy } from './components/ModalBody/ModalBody.types';

type ModalAndModalBodyProps = {
  className?: string;
  isVisible: boolean;
  onClose: () => void;
  theme?: Themes;
};

type ModalProps = ModalAndModalBodyProps & ModalBodyCopy;

type ModalType = ComponentWithChildren<ModalProps>;

export type { ModalType, ModalProps, ModalAndModalBodyProps };
