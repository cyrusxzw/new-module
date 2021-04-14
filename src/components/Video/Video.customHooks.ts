import { useEffect, useState, MutableRefObject } from 'react';
import VideoScroller from 'video-scroller';

type VideoRef = MutableRefObject<HTMLVideoElement>;
type UseProgressReturn = {
  progress: number;
  setProgress: (progress: number) => void;
};

const useVideoScroller = (
  videoRef: VideoRef,
  isScrollBasedVideo: boolean,
): void => {
  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    if (isScrollBasedVideo && videoRefCurrent) {
      // eslint-disable-next-line no-new
      new VideoScroller({
        el: videoRefCurrent,
        invert: true,
      });
    }
  }, [isScrollBasedVideo, videoRef]);
};

const useProgress = (videoRef: VideoRef): UseProgressReturn => {
  const [progress, setProgress] = useState(0);
  const videoRefCurrent = videoRef.current;

  const handleProgress = () => {
    if (!videoRefCurrent) return;

    const percent =
      videoRefCurrent.currentTime && videoRefCurrent.duration
        ? (videoRefCurrent.currentTime / videoRefCurrent.duration) * 100
        : 0;

    setProgress(percent);
  };

  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    if (videoRefCurrent) {
      videoRefCurrent.addEventListener('timeupdate', handleProgress);
    }

    return function cleanup() {
      if (videoRefCurrent) {
        videoRefCurrent.removeEventListener('timeupdate', handleProgress);
      }
    };
  });

  return {
    progress,
    setProgress,
  };
};

export { useVideoScroller, useProgress };
