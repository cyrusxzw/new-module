import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Loading } from '~/components/Loading';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useWaveSurfer } from './Audio.customHooks';
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
  const {
    duration,
    isLoading,
    isPlaying,
    progress,
    togglePlaying,
    trackRef,
    waveformRef,
    wavesurfer,
  } = useWaveSurfer(progressColor, hasAutoPlay);

  const classSet = cx(styles.base, { [styles.disabled]: isLoading }, className);

  const handleOnPlayPauseButtonClick = () => {
    togglePlaying();
  };

  const handleOnSeekBackwardButtonClick = () => {
    wavesurfer.current.skipBackward();
  };

  const handleOnSeekForwardButtonClick = () => {
    wavesurfer.current.skipForward();
  };

  return (
    <article className={classSet} id={id}>
      <Header artistName={artistName} trackTitle={trackTitle} />

      <div className={styles.waveContainer}>
        <Loading className={styles.loading} isLoading={isLoading} />
        <figure className={styles.waveform} ref={waveformRef} />
        <audio ref={trackRef} src={audioUrl} />
      </div>

      <Footer
        audioUrl={audioUrl}
        copy={{
          downloadLabel: copy.downloadLabel,
          downloadTitle: copy.downloadTitle,
          loading: copy.loading,
          pause: copy.pause,
          play: copy.play,
          seekBackwardTitle: copy.seekBackward,
          seekForwardTitle: copy.seekForward,
        }}
        duration={duration}
        isLoading={isLoading}
        isPlaying={isPlaying}
        onPlayPauseButtonClick={handleOnPlayPauseButtonClick}
        onSeekBackwardButtonClick={handleOnSeekBackwardButtonClick}
        onSeekForwardButtonClick={handleOnSeekForwardButtonClick}
        progress={progress}
        progressColor={progressColor}
      />
    </article>
  );
};

Audio.propTypes = {
  audioUrl: PropTypes.string,
  artistName: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.shape({
    downloadLabel: PropTypes.string,
    downloadTitle: PropTypes.string,
    loading: PropTypes.string,
    pause: PropTypes.string,
    play: PropTypes.string,
    seekBackward: PropTypes.string,
    seekForward: PropTypes.string,
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
    downloadLabel: undefined,
    downloadTitle: undefined,
    loading: undefined,
    pause: undefined,
    play: undefined,
    seekBackward: undefined,
    seekForward: undefined,
  },
  hasAutoPlay: false,
  id: undefined,
  progressColor: 'orange',
  trackTitle: undefined,
};

export { Audio };
