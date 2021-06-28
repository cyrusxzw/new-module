import React from 'react';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import type { NextButtonType } from './NextButton.types';
import styles from './NextButton.module.css';

/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */
const NextButton: NextButtonType = ({
  isActive = true,
  onClick,
  theme = 'dark',
}) => (
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

export { NextButton };
