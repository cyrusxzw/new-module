import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { PausePlayButton } from '~/components/Audio/components/PausePlayButton';
import { SeekBackwardButton } from '~/components/Audio/components/SeekBackwardButton';
import { SeekForwardButton } from '~/components/Audio/components/SeekForwardButton';
import styles from './Footer.module.css';

const Footer = React.memo(
  ({
    audioUrl,
    copy,
    duration,
    isLoading,
    isPlaying,
    onSeekBackwardButtonClick,
    onSeekForwardButtonClick,
    onPlayPauseButtonClick,
    progress,
    progressColor,
  }) => {
    return (
      <footer className={cx(styles.base, styles[progressColor])}>
        <time className={cx(styles.time, { [styles.disabled]: isLoading })}>
          {moment.utc(progress * 1000).format('mm:ss')} /{' '}
          {moment.utc(duration * 1000).format('mm:ss')}
        </time>
        <div className={styles.controls}>
          <SeekForwardButton
            copy={{
              title: copy.seekBackwardTitle,
            }}
            isLoading={isLoading}
            onClick={onSeekForwardButtonClick}
            progressColor={progressColor}
          />
          <PausePlayButton
            copy={{
              loading: copy.loading,
              pause: copy.pause,
              play: copy.play,
            }}
            isLoading={isLoading}
            isPlaying={isPlaying}
            onClick={onPlayPauseButtonClick}
            progressColor={progressColor}
          />
          <SeekBackwardButton
            copy={{
              title: copy.seekBackwardTitle,
            }}
            isLoading={isLoading}
            onClick={onSeekBackwardButtonClick}
            progressColor={progressColor}
          />
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
    );
  },
);

Footer.propTypes = {
  audioUrl: PropTypes.string,
  copy: PropTypes.shape({
    downloadTitle: PropTypes.string,
    downloadLabel: PropTypes.string,
    loading: PropTypes.string,
    pause: PropTypes.string,
    play: PropTypes.string,
    seekBackwardTitle: PropTypes.string,
    seekForwardTitle: PropTypes.string,
  }),
  duration: PropTypes.number,
  isLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onSeekBackwardButtonClick: PropTypes.func,
  onSeekForwardButtonClick: PropTypes.func,
  onPlayPauseButtonClick: PropTypes.func,
  progress: PropTypes.number,
  progressColor: PropTypes.oneOf(['orange', 'green', 'blue']),
};

Footer.defaultProps = {
  audioUrl: undefined,
  copy: {
    downloadTitle: undefined,
    downloadLabel: undefined,
    loading: undefined,
    pause: undefined,
    play: undefined,
    seekBackwardTitle: undefined,
    seekForwardTitle: undefined,
  },
  duration: undefined,
  isLoading: undefined,
  isPlaying: undefined,
  onSeekBackwardButtonClick: undefined,
  onSeekForwardButtonClick: undefined,
  onPlayPauseButtonClick: undefined,
  progress: undefined,
  progressColor: 'orange',
};

export { Footer };
