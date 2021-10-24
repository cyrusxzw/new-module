import type { ComponentWithoutChildren } from '~/types';

type LoadMoreButtonProps = {
  className?: string;
  copy?: {
    actionLabel?: string;
  };
  dataTestRef: string;
  isEnabled?: boolean;
};

type LoadMoreButtonType = ComponentWithoutChildren<LoadMoreButtonProps>;

export type { LoadMoreButtonType };
