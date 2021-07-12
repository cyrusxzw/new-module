import type { Themes } from '~/types';
import type { TransitionTypeLabel } from '~/components/Transition/Transition.types';

type HorizontalPadding = 'none' | 'small';
type VerticalPadding = 'none' | 'small' | 'medium' | 'large';

type PodiumProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  'data-test-ref'?: string;
  horizontalPadding?: HorizontalPadding;
  id?: string;
  isActive?: boolean;
  isActiveOnMount?: boolean;
  isHorizontalFlushOnLarge?: boolean;
  isHorizontalFlushOnMedium?: boolean;
  isHorizontalFlushOnSmall?: boolean;
  paddingBottom?: VerticalPadding;
  paddingLeft?: HorizontalPadding;
  paddingRight?: HorizontalPadding;
  paddingTop?: VerticalPadding;
  theme?: Themes;
  transition?: TransitionTypeLabel;
  verticalPadding?: VerticalPadding;
};

export type { PodiumProps };
