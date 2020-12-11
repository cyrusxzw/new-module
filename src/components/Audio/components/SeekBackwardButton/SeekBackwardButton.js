import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import styles from './SeekBackwardButton.module.css';

const SeekBackwardButton = React.memo(
  ({ copy, isLoading, onClick, progressColor }) => {
    return (
      <Button
        className={cx(styles.base, styles[progressColor])}
        isEnabled={!isLoading}
        isInline={true}
        onClick={onClick}
        title={copy.title}
      >
        <Icon
          className={cx(styles.icon, { [styles.disabled]: isLoading })}
          height={20}
          name="seek"
          width={20}
        />
      </Button>
    );
  },
);

SeekBackwardButton.propTypes = {
  copy: PropTypes.shape({
    title: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  progressColor: PropTypes.oneOf(['orange', 'green', 'blue']),
};

SeekBackwardButton.defaultProps = {
  copy: {
    title: undefined,
  },
  isLoading: false,
  onClick: undefined,
  progressColor: 'orange',
};

export { SeekBackwardButton };
