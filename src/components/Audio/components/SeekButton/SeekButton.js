import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import styles from './SeekButton.module.css';

const SeekButton = React.memo(
  ({ copy, direction, isLoading, onClick, progressColor }) => {
    const classSet = cx(styles.base, styles[progressColor], {
      [styles.forward]: direction === 'forward',
    });

    return (
      <Button
        className={classSet}
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

SeekButton.propTypes = {
  copy: PropTypes.shape({
    title: PropTypes.string,
  }),
  direction: PropTypes.oneOf(['forward', 'backward']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  progressColor: PropTypes.oneOf(['orange', 'green', 'blue']),
};

SeekButton.defaultProps = {
  copy: {
    title: undefined,
  },
  direction: 'forward',
  isLoading: false,
  onClick: undefined,
  progressColor: 'orange',
};

export { SeekButton };
