import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import { useEscapeKeyListener } from '~/customHooks';
import { ascertainIsSmallOrMediumOnlyViewport } from '~/utils/viewports';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Transition from '~/components/Transition';
import { isInBrowser } from '~/utils/environment';
import styles from './Controls.module.css';

const Controls = ({
  className,
  copy,
  hasActiveVideo,
  hasAllowAudio,
  hasPlayInFullScreen,
  isMobileOrTablet,
  isMuted,
  isPlaying,
  onAudioButtonClick,
  onCloseButtonClick,
  onPlayPauseButtonClick,
  progress,
}) => {
  const [isActiveVideoControlActive, setIsActiveVideoControlActive] = useState(
    true,
  );

  useEscapeKeyListener(() => {
    setIsActiveVideoControlActive(true);
    onCloseButtonClick();
  });

  const eventTimeout = useRef(null);
  const windowIsDefined = isInBrowser();
  const TIMEOUT = 3000;

  useEffect(() => {
    // TODO: wrapping calls inside a useEffect in window presence checks may be redundant
    if (windowIsDefined) {
      window.clearTimeout(eventTimeout.current);
    }

    const startTimeout = () => {
      setIsActiveVideoControlActive(true);

      if (windowIsDefined) {
        window.clearTimeout(eventTimeout.current);

        eventTimeout.current = window.setTimeout(() => {
          setIsActiveVideoControlActive(false);
        }, TIMEOUT);
      }
    };

    if (hasActiveVideo) {
      startTimeout();
    }

    const handleMouseMove = debounce(() => {
      if (hasActiveVideo) {
        startTimeout();
      }
    }, 10);

    if (windowIsDefined) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchstart', handleMouseMove);
    }

    return function cleanup() {
      if (windowIsDefined) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchstart', handleMouseMove);
        window.clearTimeout(eventTimeout.current);
      }
    };
  }, [windowIsDefined, hasActiveVideo, hasPlayInFullScreen]);

  const handleCloseButtonClick = () => {
    setIsActiveVideoControlActive(true);
    onCloseButtonClick();
  };

  const classSet = cx(styles.base, className);

  const progressBarClassSet = cx(styles.progressBar, className, {
    [styles.fullScreenProgressBar]: hasPlayInFullScreen,
  });

  const fullScreenControlsClassSet = cx({
    [styles.fullScreenControls]: hasPlayInFullScreen,
    [styles.activeFullScreenControls]: hasActiveVideo && hasPlayInFullScreen,
  });

  const isPlayPauseButtonActive =
    (!isPlaying && hasPlayInFullScreen) ||
    isMobileOrTablet ||
    !hasPlayInFullScreen;

  const playPauseButtonTitle = isPlaying
    ? copy.pauseButtonTitle
    : copy.playButtonTitle;

  const playPauseButtonIconName = isPlaying ? 'pause' : 'play';

  const isSmallMediumViewport = ascertainIsSmallOrMediumOnlyViewport();

  const isInlineMuteActive =
    hasAllowAudio &&
    hasActiveVideo &&
    (!hasPlayInFullScreen || isSmallMediumViewport);

  const isInlinePlayPauseButtonActive =
    isSmallMediumViewport ||
    (!isSmallMediumViewport && !hasActiveVideo) ||
    (!isSmallMediumViewport && !hasPlayInFullScreen);

  return (
    <div className={classSet}>
      {isInlineMuteActive && (
        <Button
          className={cx(styles.mute, {
            [styles.hidden]: !isActiveVideoControlActive && isPlaying,
          })}
          isInline={true}
          onClick={onAudioButtonClick}
          title={isMuted ? copy.unmuteButtonTitle : copy.muteButtonTitle}
        >
          <Icon
            height={16}
            name={isMuted ? 'muted' : 'unmuted'}
            theme="light"
            width={16}
          />
        </Button>
      )}

      <Transition
        isActive={hasActiveVideo && hasPlayInFullScreen && !isMobileOrTablet}
        type="zoom"
      >
        <div className={fullScreenControlsClassSet}>
          <div
            className={cx(styles.fullScreenControlsHeader, {
              [styles.hidden]: !isActiveVideoControlActive && isPlaying,
            })}
          >
            {hasAllowAudio && (
              <Button
                className={styles.mute}
                isInline={true}
                onClick={onAudioButtonClick}
                title={isMuted ? copy.unmuteButtonTitle : copy.muteButtonTitle}
              >
                <Icon
                  height={16}
                  name={isMuted ? 'muted' : 'unmuted'}
                  theme="light"
                  width={16}
                />
              </Button>
            )}

            <Button
              className={styles.close}
              isInline={true}
              onClick={handleCloseButtonClick}
              title={copy.closeButtonTitle}
            >
              <Icon height={16} name="close" theme="light" width={16} />
            </Button>

            <Button
              className={styles.fullScreenPlayPauseButton}
              isInline={true}
              onClick={onPlayPauseButtonClick}
              title={playPauseButtonTitle}
            >
              <Icon
                className={cx({ [styles.playButtonIcon]: !isPlaying })}
                height={10}
                name={playPauseButtonIconName}
                theme="light"
                width={10}
              />
            </Button>
          </div>
        </div>
      </Transition>

      <Transition isActive={isPlayPauseButtonActive} type="fade">
        <Button
          className={cx(styles.playPauseButton, {
            [styles.activePlayPauseButton]: hasActiveVideo,
            [styles.inactivePlayPauseButton]: !isInlinePlayPauseButtonActive,
            [styles.hidden]: !isActiveVideoControlActive && isPlaying,
          })}
          isInline={true}
          onClick={onPlayPauseButtonClick}
          title={playPauseButtonTitle}
        >
          <Icon
            className={cx({ [styles.playButtonIcon]: !isPlaying })}
            height={10}
            name={playPauseButtonIconName}
            width={10}
          />
        </Button>
      </Transition>

      <Transition isActive={hasActiveVideo} type="fade">
        <div className={progressBarClassSet}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
      </Transition>
    </div>
  );
};

Controls.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
    muteButtonTitle: PropTypes.string,
    pauseButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
    unmuteButtonTitle: PropTypes.string,
  }),
  hasActiveVideo: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  isMobileOrTablet: PropTypes.bool,
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onAudioButtonClick: PropTypes.func,
  onCloseButtonClick: PropTypes.func,
  onPlayPauseButtonClick: PropTypes.func,
  progress: PropTypes.number,
};

Controls.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close',
    muteButtonTitle: 'Mute video',
    pauseButtonTitle: 'View video',
    playButtonTitle: 'Pause video',
    unmuteButtonTitle: 'Unmute video',
  },
  hasActiveVideo: false,
  hasAllowAudio: false,
  hasPlayInFullScreen: false,
  isMobileOrTablet: false,
  isMuted: true,
  isPlaying: false,
  onAudioButtonClick: undefined,
  onCloseButtonClick: undefined,
  onPlayPauseButtonClick: undefined,
  progress: 0,
};

export default Controls;
