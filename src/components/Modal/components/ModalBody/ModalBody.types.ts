import type { Themes } from '~/types';

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
  copy?: {
    close?: string;
  };
  isVisible: boolean;
  onClose: () => void;
  theme?: Themes;
};

export type { ModalBodyProps };
