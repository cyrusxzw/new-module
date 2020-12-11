import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks';
import { Transition } from '~/components/Transition';
import styles from './FullscreenSection.module.css';

const FullscreenSection = ({ text, theme }) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 1, '0% 0% -10% 0%');

  return (
    <div className={cx(styles.base, styles[theme])}>
      <Transition isActive={isOnScreen} type="slowFade">
        <div ref={ref}>{text}</div>
      </Transition>
    </div>
  );
};

FullscreenSection.propTypes = {
  hasSerifFont: PropTypes.bool,
  text: PropTypes.node,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FullscreenSection.defaultProps = {
  hasSerifFont: false,
  text: undefined,
  theme: 'dark',
};

export { FullscreenSection };
