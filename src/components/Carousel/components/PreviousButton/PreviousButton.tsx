import React from 'react';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import type { PreviousButtonType } from './PreviousButton.types';
import styles from './PreviousButton.module.css';

/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */
const PreviousButton: PreviousButtonType = ({
  isActive = true,
  onClick,
  theme = 'dark',
}) => (
  <Button
    className={cx(styles.base, { [styles.hidden]: !isActive })}
    isInline={true}
    onClick={onClick}
    theme={theme}
    title="previous slide"
  >
    <Icon height={16} name="chevron" theme={theme} width={16} />
  </Button>
);

export { PreviousButton };
