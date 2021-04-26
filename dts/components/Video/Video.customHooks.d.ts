import { MutableRefObject } from 'react';
declare type VideoRef = MutableRefObject<HTMLVideoElement>;
declare type UseProgressReturn = {
  progress: number;
  setProgress: (progress: number) => void;
};
declare const useVideoScroller: (
  videoRef: VideoRef,
  isScrollBasedVideo: boolean,
) => void;
declare const useProgress: (videoRef: VideoRef) => UseProgressReturn;
export { useVideoScroller, useProgress };
