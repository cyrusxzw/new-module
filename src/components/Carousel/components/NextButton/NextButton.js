import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import styles from './NextButton.module.css';

/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */
const NextButton = ({ isActive, onClick, theme }) => (
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

NextButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

NextButton.defaultProps = {
  isActive: true,
  onClick: undefined,
  theme: 'dark',
};

export { NextButton };
