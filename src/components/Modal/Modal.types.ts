import type { Themes } from '~/types';

type ModalProps = {
  className?: string;
  copy?: {
    close?: string;
  };
  isVisible: boolean;
  onClose: () => void;
  theme?: Themes;
};

export type { ModalProps };
