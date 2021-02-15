import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useWindowHasResized } from '~/customHooks';
import { Transition } from '~/components/Transition';
import { getVideoSrc } from './VideoPlayer.utils';
import styles from './VideoPlayer.module.css';

const VideoPlayer = forwardRef(function VideoPlayerRef(
  {
    captions,
    className,
    hasActiveVideo = false,
    hasAllowAudio = false,
    hasAutoplay = false,
    hasLoop = true,
    hasNativeControls = false,
    hasPlayInFullScreen = false,
    isActive = true,
    isBackground = false,
    isMuted = true,
    sizes,
  },
  ref,
) {
  useWindowHasResized();

  const src = getVideoSrc(sizes);
  const shouldShowCaptions =
    captions && captions.isActive && captions.fileUrl && captions.languageCode;

  const classSet = cx(
    styles.base,
    {
      [styles.playsInFullScreen]: hasPlayInFullScreen,
      [styles.isPlayingInFullScreen]: hasActiveVideo && hasPlayInFullScreen,
      [styles.background]: isBackground,
    },
    className,
  );

  return (
    <Transition isActive={isActive} type="fade">
      <video
        autoPlay={hasAutoplay}
        className={classSet}
        controls={hasNativeControls}
        data-testid="data-testid-VideoPlayer"
        loop={hasLoop}
        muted={!hasAllowAudio || (hasAllowAudio && isMuted)}
        playsInline={true}
        ref={ref}
      >
        <source src={src} type="video/mp4" />

        {shouldShowCaptions && (
          <track
            default={true}
            kind="subtitles"
            label={captions.languageLabel}
            src={captions.fileUrl}
            srcLang={captions.languageCode}
          />
        )}
      </video>
    </Transition>
  );
});

VideoPlayer.propTypes = {
  captions: PropTypes.shape({
    fileUrl: PropTypes.string,
    isActive: PropTypes.bool,
    languageCode: PropTypes.string,
    languageLabel: PropTypes.string,
  }),
  className: PropTypes.string,
  hasActiveVideo: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  hasLoop: PropTypes.bool,
  hasNativeControls: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  isActive: PropTypes.bool,
  isBackground: PropTypes.bool,
  isMuted: PropTypes.bool,
  sizes: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
};

export { VideoPlayer };
