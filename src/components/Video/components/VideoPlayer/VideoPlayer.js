import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeViewport,
} from '~/utils/viewports';
import Transition from '~/components/Transition';
import styles from './VideoPlayer.module.css';

const VideoPlayer = forwardRef(function VideoPlayerRef(
  {
    className,
    hasActiveVideo,
    hasAllowAudio,
    hasAutoplay,
    hasLoop,
    hasPlayInFullScreen,
    isActive,
    isBackground,
    isMuted,
    large,
    medium,
    small,
  },
  ref,
) {
  useWindowHasResized();

  const classSet = cx(
    styles.base,
    {
      [styles.playsInFullScreen]: hasPlayInFullScreen,
      [styles.isPlayingInFullScreen]: hasActiveVideo && hasPlayInFullScreen,
      [styles.background]: isBackground,
    },
    className,
  );

  const getVideoSrc = () => {
    if (small && ascertainIsSmallOnlyViewport()) return small;

    if (medium && ascertainIsMediumOnlyViewport()) return medium;

    if (large && ascertainIsLargeViewport()) return large;

    return small || medium || large || '';
  };

  return (
    <Transition isActive={isActive} type="fade">
      <video
        autoPlay={hasAutoplay}
        className={classSet}
        controls={false}
        data-testid="data-testid-VideoPlayer"
        loop={hasLoop}
        muted={!hasAllowAudio || (hasAllowAudio && isMuted)}
        playsInline={true}
        ref={ref}
      >
        <source src={getVideoSrc()} type="video/mp4" />
      </video>
    </Transition>
  );
});

VideoPlayer.propTypes = {
  className: PropTypes.string,
  hasActiveVideo: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  hasLoop: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  isActive: PropTypes.bool,
  isBackground: PropTypes.bool,
  isMuted: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
};

VideoPlayer.defaultProps = {
  className: undefined,
  hasActiveVideo: false,
  hasAllowAudio: false,
  hasAutoplay: false,
  hasLoop: true,
  hasPlayInFullScreen: false,
  isActive: true,
  isBackground: false,
  isMuted: true,
  large: undefined,
  medium: undefined,
  small: undefined,
};

export default VideoPlayer;
