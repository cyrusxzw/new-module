import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import VideoScroller from 'video-scroller';
import {
  useEscapeKeyListener,
  useOverflowHidden,
  useWindowHasResized,
} from '~/customHooks';
import { ascertainIsSmallOrMediumOnlyViewport } from '~/utils/viewports';
import Image from '~/components/Image';
import Controls from './components/Controls';
import Poster from './components/Poster';
import VideoPlayer from './components/VideoPlayer';
import styles from './Video.module.css';

export const Video = forwardRef(function VideoRef(
  {
    className,
    copy,
    fallbackImage,
    hasControls,
    hasAllowAudio,
    hasAutoplay,
    hasLoop,
    hasSpanContent,
    hasPlayInFullScreen,
    id,
    isBackground,
    isFullWidth,
    isHeroFullWidth,
    isScrollBasedVideo,
    large,
    medium,
    poster,
    small,
  },
  ref,
) {
  const [isPlaying, setIsPlaying] = useState(hasAutoplay);
  const [hasActiveVideo, setHasActiveVideo] = useState(hasAutoplay);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(!hasAllowAudio);
  const isMobileOrTablet = ascertainIsSmallOrMediumOnlyViewport();
  const videoRef = useRef();

  useWindowHasResized();

  useOverflowHidden(hasActiveVideo && hasPlayInFullScreen && !isMobileOrTablet);

  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    const handleProgress = () => {
      const percent =
        videoRefCurrent.currentTime && videoRefCurrent.duration
          ? (videoRefCurrent.currentTime / videoRefCurrent.duration) * 100
          : 0;

      setProgress(percent);
    };

    if (videoRefCurrent) {
      videoRefCurrent.addEventListener('timeupdate', handleProgress);
    }

    return function cleanup() {
      if (videoRefCurrent) {
        videoRefCurrent.removeEventListener('timeupdate', handleProgress);
      }
    };
  });

  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    if (isScrollBasedVideo && videoRefCurrent) {
      // eslint-disable-next-line no-new
      new VideoScroller({ el: videoRefCurrent });
    }
  }, [isScrollBasedVideo]);

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const stopVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
    setHasActiveVideo(false);

    setTimeout(() => {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      setProgress(0);
    }, 500);
  };

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
    setHasActiveVideo(true);
  };

  useEscapeKeyListener(stopVideo);

  const hasVideo = large || medium || small;
  const handleOnPosterClick = () => playVideo();
  const handlePlayPauseButtonOnClick = isPlaying ? pauseVideo : playVideo;
  const handleAudioButtonClick = () => setIsMuted(!isMuted);

  const classSet = cx(styles.base, className, {
    [styles.spanContent]: hasSpanContent,
    [styles.heroFullWidth]: isHeroFullWidth,
    [styles.fullWidth]: isFullWidth,
  });

  return (
    <div className={classSet} id={id} ref={ref} role="group">
      {!!fallbackImage && (!hasVideo || hasAutoplay) && (
        <figure className={styles.fallbackImageFigure} id={id} ref={ref}>
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
        hasActiveVideo={hasActiveVideo}
        hasAllowAudio={hasAllowAudio}
        hasAutoplay={hasAutoplay}
        hasLoop={hasLoop}
        hasPlayInFullScreen={hasPlayInFullScreen}
        isActive={!poster || hasActiveVideo || isScrollBasedVideo}
        isBackground={isBackground}
        isMuted={isMuted}
        large={large}
        medium={medium}
        ref={videoRef}
        small={small}
      />

      {!isScrollBasedVideo && (
        <Poster
          copy={{
            playButtonTitle: copy.playButtonTitle,
            altText: poster.copy?.altText,
          }}
          isActive={!hasActiveVideo}
          large={poster.large}
          medium={poster.medium}
          onClick={handleOnPosterClick}
          small={poster.small}
        />
      )}

      {hasControls && (
        <Controls
          copy={{
            closeButtonTitle: copy.closeButtonTitle,
            pauseButtonTitle: copy.pauseButtonTitle,
            playButtonTitle: copy.playButtonTitle,
            muteButtonTitle: copy.muteButtonTitle,
            unmuteButtonTitle: copy.unmuteButtonTitle,
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

Video.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
    muteButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
    pauseButtonTitle: PropTypes.string,
    unmuteButtonTitle: PropTypes.string,
  }),
  fallbackImage: PropTypes.shape({
    className: PropTypes.string,
    copy: PropTypes.shape({
      altText: PropTypes.string,
    }),
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  hasControls: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  hasLoop: PropTypes.bool,
  hasSpanContent: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  id: PropTypes.string,
  isBackground: PropTypes.bool,
  /**
    `isFullWidth` is set true by default and this will allow videos to display at the correct aspect ratio.
    In the event that a different, more fluid ratio is required, set this prop to false, this will collase the hieght of th Video,
    but it will react to the height of the surrounding element.
  */
  isFullWidth: PropTypes.bool,
  /**
    This prop negates the 16:9 aspect ratio on tablet so Full Width Hero Videos fill any avaliable space.
   */
  isHeroFullWidth: PropTypes.bool,
  isScrollBasedVideo: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  poster: PropTypes.shape({
    className: PropTypes.string,
    copy: PropTypes.shape({
      playButtonTitle: PropTypes.string,
      altText: PropTypes.string,
    }),
    isActive: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    onClick: PropTypes.func,
    small: PropTypes.string,
  }),
  small: PropTypes.string,
};

Video.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close',
    muteButtonTitle: 'Mute video',
    playButtonTitle: 'View video',
    pauseButtonTitle: 'Pause video',
    unmuteButtonTitle: 'Unmute video',
  },
  fallbackImage: undefined,
  hasControls: true,
  hasAllowAudio: false,
  hasAutoplay: false,
  hasLoop: true,
  hasSpanContent: false,
  hasPlayInFullScreen: false,
  id: undefined,
  isBackground: false,
  isHeroFullWidth: false,
  isFullWidth: true,
  isScrollBasedVideo: false,
  large: undefined,
  medium: undefined,
  poster: {
    className: undefined,
    copy: {
      playButtonTitle: undefined,
      altText: undefined,
    },
    isActive: undefined,
    large: undefined,
    medium: undefined,
    onClick: undefined,
    small: undefined,
  },
  small: undefined,
};

export default Video;
