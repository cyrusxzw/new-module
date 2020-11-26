import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import styles from './PausePlayButton.module.css';

const PausePlayButton = React.memo(
  ({ copy, isLoading, isPlaying, onClick, progressColor }) => (
    <Button
      className={cx(styles.base, styles[progressColor], {
        [styles.disabled]: isLoading,
      })}
      isEnabled={!isLoading}
      isInline={true}
      onClick={onClick}
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
  ),
);

PausePlayButton.propTypes = {
  copy: PropTypes.shape({
    loading: PropTypes.string,
    pause: PropTypes.string,
    play: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func,
  progressColor: PropTypes.oneOf(['orange', 'green', 'blue']),
};

PausePlayButton.defaultProps = {
  copy: {
    loading: undefined,
    pause: undefined,
    play: undefined,
  },
  isLoading: false,
  isPlaying: false,
  onClick: undefined,
  progressColor: 'orange',
};

export default PausePlayButton;
