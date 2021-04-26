import type { ProgressColor } from '../../Audio.types';
import type {
  OnSeekBackwardButtonClick,
  OnSeekForwardButtonClick,
} from '../AudioFooter/AudioFooter.types';
declare type SeekButtonProps = {
  copy: {
    title: string;
  };
  direction: 'forward' | 'backward';
  isLoading: boolean;
  onClick: OnSeekBackwardButtonClick | OnSeekForwardButtonClick;
  progressColor: ProgressColor;
};
export type { SeekButtonProps };
