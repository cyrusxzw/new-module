import React from 'react';
import cx from 'classnames';
import { Loading } from '~/components/Loading';
import { AudioHeader } from './components/AudioHeader';
import { AudioFooter } from './components/AudioFooter';
import { useWaveSurfer } from './Audio.customHooks';
import type { AudioType } from './Audio.types';
import styles from './Audio.module.css';

const Audio: AudioType = ({
  artistName,
  audioUrl,
  className,
  copy,
  hasAutoPlay = false,
  id,
  progressColor = 'orange',
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
      <AudioHeader artistName={artistName} trackTitle={trackTitle} />

      <div className={styles.waveContainer}>
        <Loading className={styles.loading} isLoading={isLoading} />
        <figure className={styles.waveform} ref={waveformRef} />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio ref={trackRef} src={audioUrl} />
      </div>

      <AudioFooter
        audioUrl={audioUrl}
        copy={{
          downloadLabel: copy?.downloadLabel,
          downloadTitle: copy?.downloadTitle,
          loading: copy?.loading,
          pause: copy?.pause,
          play: copy?.play,
          seekBackward: copy?.seekBackward,
          seekForward: copy?.seekForward,
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

export { Audio };
