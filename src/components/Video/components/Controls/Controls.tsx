import React, { useEffect, useState, useRef, FC } from 'react';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import { useEscapeKeyListener } from '~/customHooks';
import { isViewport } from '~/utils/viewports';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { Transition } from '~/components/Transition';
import type { ControlsProps } from './Controls.types';
import styles from './Controls.module.css';

const Controls: FC<ControlsProps> = ({
  captions,
  className,
  copy,
  hasActiveVideo = false,
  hasAllowAudio = false,
  hasPlayInFullScreen = false,
  isMobileOrTablet = false,
  isMuted = true,
  isPlaying = false,
  onAudioButtonClick,
  onCloseButtonClick,
  onPlayPauseButtonClick,
  progress = 0,
}) => {
  const [isActiveVideoControlActive, setIsActiveVideoControlActive] = useState(
    true,
  );

  useEscapeKeyListener(() => {
    setIsActiveVideoControlActive(true);
    onCloseButtonClick();
  });

  const eventTimeout = useRef(null);
  const TIMEOUT = 3000;

  useEffect(() => {
    clearTimeout(eventTimeout.current);

    const startTimeout = () => {
      setIsActiveVideoControlActive(true);

      clearTimeout(eventTimeout.current);

      eventTimeout.current = setTimeout(() => {
        setIsActiveVideoControlActive(false);
      }, TIMEOUT);
    };

    if (hasActiveVideo) {
      startTimeout();
    }

    const handleMouseMove = debounce(() => {
      if (hasActiveVideo) {
        startTimeout();
      }
    }, 10);

    addEventListener('mousemove', handleMouseMove);
    addEventListener('touchstart', handleMouseMove);

    return function cleanup() {
      removeEventListener('mousemove', handleMouseMove);
      removeEventListener('touchstart', handleMouseMove);
      clearTimeout(eventTimeout.current);
    };
  }, [hasActiveVideo, hasPlayInFullScreen]);

  const handleCloseButtonClick = () => {
    setIsActiveVideoControlActive(true);
    onCloseButtonClick();
  };

  const handleOnCaptionsToggleClick = () => {
    if (captions?.onToggleClick) {
      captions.onToggleClick();
    }
  };

  const classSet = cx(styles.base, className);

  const progressBarClassSet = cx(styles.progressBar, className, {
    [styles.fullScreenProgressBar]: hasActiveVideo && hasPlayInFullScreen,
    [styles.hidden]: !isActiveVideoControlActive && isPlaying,
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
    ? copy?.pauseButtonTitle
    : copy?.playButtonTitle;

  const playPauseButtonIconName = isPlaying ? 'pause' : 'play';

  const isSmallMediumViewport = isViewport('xs to md only');

  const isInlineMuteActive =
    hasAllowAudio &&
    hasActiveVideo &&
    (!hasPlayInFullScreen || isSmallMediumViewport);

  const isInlineCaptionsToggleActive =
    captions?.shouldShowToggleButton &&
    hasActiveVideo &&
    (!hasPlayInFullScreen || isSmallMediumViewport);

  const isInlinePlayPauseButtonActive =
    isSmallMediumViewport ||
    (!isSmallMediumViewport && !hasActiveVideo) ||
    (!isSmallMediumViewport && !hasPlayInFullScreen);

  const captionsToggleButtonTitle = !captions?.isActive
    ? captions?.copy?.toggleButtonTitleOn
    : captions?.copy?.toggleButtonTitleOff;

  return (
    <div className={classSet}>
      {isInlineMuteActive && (
        <Button
          className={cx(styles.mute, {
            [styles.hidden]: !isActiveVideoControlActive && isPlaying,
          })}
          isInline={true}
          onClick={onAudioButtonClick}
          title={isMuted ? copy?.unmuteButtonTitle : copy?.muteButtonTitle}
        >
          <Icon
            height={16}
            name={isMuted ? 'muted' : 'unmuted'}
            theme="light"
            width={16}
          />
        </Button>
      )}

      {isInlineCaptionsToggleActive && (
        <Button
          className={cx(styles.captionsToggle, {
            [styles.hidden]: !isActiveVideoControlActive && isPlaying,
            [styles.isActive]: captions?.isActive,
          })}
          isInline={true}
          onClick={handleOnCaptionsToggleClick}
          title={captionsToggleButtonTitle}
        >
          CC
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
                title={
                  isMuted ? copy?.unmuteButtonTitle : copy?.muteButtonTitle
                }
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
              isActive={captions?.shouldShowToggleButton && hasActiveVideo}
              type="fade"
            >
              <Button
                className={cx(styles.captionsToggle, {
                  [styles.hidden]: !isActiveVideoControlActive && isPlaying,
                  [styles.isActive]: captions?.isActive,
                })}
                isInline={true}
                onClick={handleOnCaptionsToggleClick}
                title={captionsToggleButtonTitle}
              >
                CC
              </Button>
            </Transition>

            <Button
              className={styles.close}
              isInline={true}
              onClick={handleCloseButtonClick}
              title={copy?.closeButtonTitle}
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

export { Controls };
