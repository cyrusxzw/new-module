/// <reference types="react" />
import type { ProgressColor } from './Audio.types';
declare const useWaveSurfer: (
  progressColor: ProgressColor,
  hasAutoPlay: boolean,
) => {
  duration: number;
  isLoading: boolean;
  isPlaying: boolean;
  progress: number;
  togglePlaying: () => void;
  trackRef: import('react').MutableRefObject<any>;
  waveformRef: import('react').MutableRefObject<any>;
  wavesurfer: import('react').MutableRefObject<any>;
};
export { useWaveSurfer };
