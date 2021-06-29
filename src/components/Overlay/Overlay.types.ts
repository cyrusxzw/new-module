import type { ComponentWithoutChildren } from '~/types';

type OverlayProps = {
  className?: string;
  isVisible?: boolean;
  onClose: () => void;
};

type OverlayType = ComponentWithoutChildren<OverlayProps>;

export type { OverlayProps, OverlayType };
