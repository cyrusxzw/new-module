import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import { useWindowHasResized } from '~/customHooks';
import { isViewport } from '~/utils/viewport';
//
// import styles from './Hidden.module.css';

const Hidden = ({ children, isLarge, isMedium, isSmall, isXLarge }) => {
  // const classSet = cx(
  //   {
  //     [styles.small]: isSmall,
  //     [styles.medium]: isMedium,
  //     [styles.large]: isLarge,
  //     [styles.xLarge]: isXLarge,
  //     [styles.hidden]: isSmall || isMedium || isLarge || isXLarge,
  //   },
  //   className,
  // );
  //
  // return <div className={classSet}>{children}</div>;

  useWindowHasResized();

  const isHiddenOnSmall = isSmall && isViewport('xs to sm only');
  const isHiddenOnMedium = isMedium && isViewport('md only');
  const isHiddenOnLarge = isLarge && isViewport('lg only');
  const isHiddenOnXLarge = isXLarge && isViewport('xl');

  if (
    isHiddenOnSmall ||
    isHiddenOnMedium ||
    isHiddenOnLarge ||
    isHiddenOnXLarge
  ) {
    return null;
  }

  return <>{children}</>;
};

Hidden.propTypes = {
  children: PropTypes.any,
  isLarge: PropTypes.bool,
  isMedium: PropTypes.bool,
  isSmall: PropTypes.bool,
  isXLarge: PropTypes.bool,
};

Hidden.defaultProps = {
  children: undefined,
  isLarge: false,
  isMedium: false,
  isSmall: false,
  isXLarge: false,
};

export { Hidden };
