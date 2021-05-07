import type { Themes } from '~/types';

type FlyinPanelProps = {
  children: React.ReactNode;
  className?: string;
  copy?: {
    close?: string;
  };
  heading?: string;
  isVisible?: boolean;
  onClose: () => void;
  theme?: Themes;
};

export type { FlyinPanelProps };
