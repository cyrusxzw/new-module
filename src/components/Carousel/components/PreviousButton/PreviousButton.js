import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import styles from './PreviousButton.module.css';

/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */
const PreviousButton = ({ isActive, onClick, theme }) => (
  <Button
    className={cx(styles.base, { [styles.hidden]: !isActive })}
    isInline={true}
    onClick={onClick}
    theme={theme}
    title="next slide"
  >
    <Icon height={16} name="chevron" theme={theme} width={16} />
  </Button>
);

PreviousButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

PreviousButton.defaultProps = {
  isActive: true,
  onClick: undefined,
  theme: 'dark',
};

export { PreviousButton };
