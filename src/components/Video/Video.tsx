import React, { forwardRef, useRef, useState } from 'react';
import cx from 'classnames';
import {
  useEscapeKeyListener,
  useHasMounted,
  useOverflowHidden,
  useWindowHasResized,
} from '~/customHooks';
import { isViewport } from '~/utils/viewport';
import { isIE, isChrome } from '~/utils/environment';
import { Image } from '~/components/Image';
import { Controls } from './components/Controls';
import { Poster } from './components/Poster';
import { VideoPlayer } from './components/VideoPlayer';
import { useVideoScroller, useProgress } from './Video.customHooks';
import type { VideoProps } from './Video.types';
import styles from './Video.module.css';

const Video = forwardRef<HTMLDivElement, VideoProps>(function VideoRef(
  {
    captions,
    className,
    copy,
    fallbackImage,
    hasAllowAudio = false,
    hasAutoplay = false,
    hasControls = true,
    hasLoop = true,
    hasNativeControls = false,
    hasPlayInFullScreen = false,
    hasSpanContent = false,
    id,
    isBackground = false,
    isFullWidth = true,
    isHeroFullWidth = false,
    isHeroFullWidthMobile = false,
    isScrollBasedVideo = false,
    large,
    medium,
    poster,
    small,
  },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>();
  const [isPlaying, setIsPlaying] = useState(hasAutoplay);
  const [hasActiveCaptions, setHasActiveCaptions] = useState(
    !!captions?.isActiveOnLoad,
  );
  const [hasActiveVideo, setHasActiveVideo] = useState(hasAutoplay);
  const [isMuted, setIsMuted] = useState(!hasAllowAudio);
  const isMobileOrTablet = isViewport('xs to md only');
  const { progress, setProgress } = useProgress(videoRef);
  const hasMounted = useHasMounted();

  useWindowHasResized();
  useVideoScroller(videoRef, isScrollBasedVideo);
  useOverflowHidden(hasActiveVideo && hasPlayInFullScreen && !isMobileOrTablet);
  useEscapeKeyListener(stopVideo);

  const captionsTrack = videoRef.current?.textTracks[0];

  React.useEffect(() => {
    /** Stop and reset video if the source changes */
    if (hasMounted && videoRef.current) {
      videoRef.current.load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [large, medium, small]);

  if (!!captionsTrack && !isIE) {
    if (hasActiveCaptions) {
      captionsTrack.mode = 'showing';
    } else {
      captionsTrack.mode = 'hidden';
    }
  }

  const hasVideo = large || medium || small;
  const handleOnPosterClick = () => playVideo();
  const handlePlayPauseButtonOnClick = isPlaying ? pauseVideo : playVideo;
  const handleAudioButtonClick = () => setIsMuted(!isMuted);
  const handleOnCaptionsToggleClick = () =>
    setHasActiveCaptions(state => !state);

  const classSet = cx(styles.base, className, {
    [styles.spanContent]: hasSpanContent,
    [styles.heroFullWidth]: isHeroFullWidth,
    [styles.heroFullWidthMobile]: isHeroFullWidthMobile,
    [styles.fullWidth]: isFullWidth,
    [styles.chrome]: isChrome,
  });

  function pauseVideo() {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  function stopVideo() {
    videoRef.current.pause();
    setIsPlaying(false);
    setHasActiveVideo(false);

    setTimeout(() => {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      setProgress(0);
    }, 500);
  }

  function playVideo() {
    videoRef.current.play();
    setIsPlaying(true);
    setHasActiveVideo(true);
  }

  return (
    <div className={classSet} id={id} ref={ref} role="group">
      {!!fallbackImage && (!hasVideo || hasAutoplay) && (
        <figure className={styles.fallbackImageFigure} ref={ref}>
          <Image
            altText={fallbackImage.copy?.altText}
            className={cx(styles.fallbackImage, fallbackImage.className)}
            large={fallbackImage.large}
            medium={fallbackImage.medium}
            small={fallbackImage.small}
          />
        </figure>
      )}

      <VideoPlayer
        captions={{
          fileUrl: captions?.fileUrl,
          languageCode: captions?.languageCode,
          languageLabel: captions?.languageLabel,
        }}
        hasActiveVideo={hasActiveVideo}
        hasAllowAudio={hasAllowAudio}
        hasAutoplay={hasAutoplay}
        hasLoop={hasLoop}
        hasNativeControls={hasNativeControls}
        hasPlayInFullScreen={hasPlayInFullScreen}
        isActive={!poster || hasActiveVideo || isScrollBasedVideo}
        isBackground={isBackground}
        isMuted={isMuted}
        ref={videoRef}
        sizes={{
          large,
          medium,
          small,
        }}
      />

      {!isScrollBasedVideo && (
        <Poster
          copy={{
            playButtonTitle: copy?.playButtonTitle,
            altText: poster?.copy?.altText,
          }}
          isActive={!hasActiveVideo}
          onClick={handleOnPosterClick}
          sizes={{
            large: poster?.large,
            medium: poster?.medium,
            small: poster?.small,
          }}
        />
      )}

      {hasControls && !hasNativeControls && (
        <Controls
          captions={{
            copy: captions?.copy,
            isActive: hasActiveCaptions,
            onToggleClick: handleOnCaptionsToggleClick,
            shouldShowToggleButton:
              !!captions?.fileUrl &&
              !!captions?.languageCode &&
              captions?.shouldShowToggleButton &&
              !isIE,
          }}
          copy={{
            closeButtonTitle: copy?.closeButtonTitle,
            pauseButtonTitle: copy?.pauseButtonTitle,
            playButtonTitle: copy?.playButtonTitle,
            muteButtonTitle: copy?.muteButtonTitle,
            unmuteButtonTitle: copy?.unmuteButtonTitle,
          }}
          hasActiveVideo={hasActiveVideo}
          hasAllowAudio={hasAllowAudio}
          hasPlayInFullScreen={hasPlayInFullScreen}
          isMobileOrTablet={isMobileOrTablet}
          isMuted={isMuted}
          isPlaying={isPlaying}
          onAudioButtonClick={handleAudioButtonClick}
          onCloseButtonClick={stopVideo}
          onPlayPauseButtonClick={handlePlayPauseButtonOnClick}
          progress={progress}
        />
      )}
    </div>
  );
});

export { Video };
