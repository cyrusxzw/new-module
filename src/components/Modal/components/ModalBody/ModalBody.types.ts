import type { Themes } from '~/types';

type ModalBodyProps = {
  className?: string;
  copy?: {
    close?: string;
  };
  isVisible: boolean;
  onClose: () => void;
  theme?: Themes;
};

export type { ModalBodyProps };
