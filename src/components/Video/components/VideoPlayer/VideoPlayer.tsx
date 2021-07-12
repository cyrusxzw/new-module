import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useWindowHasResized } from '~/customHooks';
import { Transition } from '~/components/Transition';
import { getVideoSrc } from './VideoPlayer.utils';
import type { VideoPlayerProps } from './VideoPlayer.types';
import styles from './VideoPlayer.module.css';

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  function VideoPlayerRef(
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
    const shouldShowCaptions = captions?.fileUrl && captions?.languageCode;

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
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay={hasAutoplay}
          className={classSet}
          controls={hasNativeControls}
          crossOrigin="anonymous"
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
              label={captions?.languageLabel}
              src={captions.fileUrl}
              srcLang={captions.languageCode}
            />
          )}
        </video>
      </Transition>
    );
  },
);

export { VideoPlayer };
