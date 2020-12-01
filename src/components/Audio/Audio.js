import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';
import throttle from 'lodash/throttle';
import { COLORS, HYPERLINK_STYLE_TYPES } from '~/constants';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Icon from '~/components/Icon';
import Loading from '~/components/Loading';
import styles from './Audio.module.css';

const Audio = ({
  artistName,
  audioUrl,
  className,
  copy,
  hasAutoPlay,
  id,
  progressColor,
  trackTitle,
}) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getProgressColorHex = () => {
      if (progressColor === 'green') {
        return COLORS.HIGHLIGHT_GREEN;
      } else if (progressColor === 'blue') {
        return COLORS.HIGHLIGHT_BLUE;
      }

      return COLORS.HIGHLIGHT_ORANGE;
    };

    import(
      /* webpackMode: "eager" */
      'wavesurfer.js'
    ).then(module => {
      const WaveSurfer = module.default || module;

      if (waveformRef.current) {
        wavesurfer.current = WaveSurfer.create({
          backend: 'MediaElement',
          barGap: 2,
          barWidth: 1,
          container: waveformRef.current,
          cursorColor: 'transparent',
          cursorWidth: 1,
          height: 80,
          progressColor: getProgressColorHex(),
          responsive: true,
          skipLength: 30,
          waveColor: COLORS.GREY_60,
        });

        wavesurfer.current.load(trackRef.current);

        const updateProgress = throttle(currentProgress => {
          setProgress(currentProgress);
        }, 1000);

        const setCurrentDuration = () => {
          setDuration(wavesurfer.current.getDuration());
        };

        const onReady = () => {
          setIsLoading(false);
          setCurrentDuration();

          if (hasAutoPlay) {
            togglePlaying();
          }
        };

        wavesurfer.current.on('audioprocess', updateProgress);
        wavesurfer.current.on('waveform-ready', onReady);

        return function cleanup() {
          wavesurfer.current.unAll();
          wavesurfer.current.destroy();
        };
      }
    });
  }, [progressColor, hasAutoPlay]);

  const classSet = cx(
    styles.base,
    { [styles.disabled]: isLoading },
    styles[progressColor],
    className,
  );

  function togglePlaying() {
    setIsPlaying(state => !state);
    wavesurfer.current.playPause();
  }

  function handleOnClick() {
    togglePlaying();
  }

  const PausePlayButton = () => {
    return (
      <Button
        className={cx(styles.playPauseButton, { [styles.disabled]: isLoading })}
        isEnabled={!isLoading}
        isInline={true}
        onClick={handleOnClick}
        title={isLoading ? copy.loading : !isPlaying ? copy.play : copy.pause}
      >
        <Icon
          className={cx(
            styles.iconPlay,
            { [styles.hidden]: isPlaying },
            { [styles.disabled]: isLoading },
          )}
          height={15}
          name="play"
          theme="dark"
          width={15}
        />
        <Icon
          className={cx(
            styles.iconPause,
            { [styles.hidden]: !isPlaying },
            { [styles.disabled]: isLoading },
          )}
          height={15}
          name="pause"
          theme="dark"
          width={15}
        />
      </Button>
    );
  };

  const SeekForwardButton = () => {
    return (
      <Button
        className={styles.seekForward}
        isEnabled={!isLoading}
        isInline={true}
        onClick={() => {
          wavesurfer.current.skipForward();
        }}
        title={copy.seekForward}
      >
        <Icon
          className={cx(styles.icon, { [styles.disabled]: isLoading })}
          height={20}
          name="seek"
          width={20}
        />
      </Button>
    );
  };

  const SeekBackwardButton = () => {
    return (
      <Button
        className={styles.seekBackward}
        isEnabled={!isLoading}
        isInline={true}
        onClick={() => {
          wavesurfer.current.skipBackward();
        }}
        title={copy.seekBackward}
      >
        <Icon
          className={cx(styles.icon, { [styles.disabled]: isLoading })}
          height={20}
          name="seek"
          width={20}
        />
      </Button>
    );
  };

  return (
    <div className={classSet} id={id}>
      {(artistName || trackTitle) && (
        <header className={styles.header}>
          <Heading
            className={styles.artistName}
            isFlush={true}
            level="3"
            size="xXSmall"
          >
            {artistName}
          </Heading>
          <Heading hasSerifFont={true} isFlush={true} level="4" size="medium">
            {trackTitle}
          </Heading>
        </header>
      )}

      <div className={styles.waveContainer}>
        <Loading className={styles.loading} isLoading={isLoading} />
        <div className={styles.waveform} ref={waveformRef} />
        <audio ref={trackRef} src={audioUrl} />
      </div>

      <footer className={styles.footer}>
        <time className={cx(styles.time, { [styles.disabled]: isLoading })}>
          {moment.utc(progress * 1000).format('mm:ss')} /{' '}
          {moment.utc(duration * 1000).format('mm:ss')}
        </time>
        <div className={styles.controls}>
          <SeekForwardButton />
          <PausePlayButton />
          <SeekBackwardButton />
        </div>
        <div className={styles.download}>
          <Hyperlink
            className={styles.downloadButton}
            hasTargetInNewWindow={true}
            isDownload={true}
            style={HYPERLINK_STYLE_TYPES.EXTERNAL_NO_ICON_TEXT_LINK}
            title={copy.downloadTitle}
            url={audioUrl}
          >
            {`${copy.downloadLabel} `}
            <Icon
              className={styles.downloadButtonIcon}
              height={13}
              name="download"
              width={13}
            />
          </Hyperlink>
        </div>
      </footer>
    </div>
  );
};

Audio.propTypes = {
  audioUrl: PropTypes.string,
  artistName: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.shape({
    loading: PropTypes.string,
    play: PropTypes.string,
    pause: PropTypes.string,
    downloadLabel: PropTypes.string,
    downloadTitle: PropTypes.string,
    seekForward: PropTypes.string,
    seekBackward: PropTypes.string,
  }),
  hasAutoPlay: PropTypes.bool,
  id: PropTypes.string,
  progressColor: PropTypes.oneOf(['orange', 'green', 'blue']),
  trackTitle: PropTypes.string,
};

Audio.defaultProps = {
  audioUrl: undefined,
  artistName: undefined,
  className: undefined,
  copy: {
    loading: 'Loading audio file',
    play: 'Play',
    pause: 'Pause',
    downloadLabel: 'Download Music',
    downloadTitle: 'Download Music',
    seekForward: 'Seek Forward',
    seekBackward: 'Seek Backward',
  },
  hasAutoPlay: false,
  id: undefined,
  progressColor: 'orange',
  trackTitle: undefined,
};

export default Audio;
