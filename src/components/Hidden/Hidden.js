import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import { useWindowHasResized } from '~/customHooks';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeOnlyViewport,
  ascertainIsXLargeViewport,
} from '~/utils/viewports';
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

  const isHiddenOnSmall = isSmall && ascertainIsSmallOnlyViewport();
  const isHiddenOnMedium = isMedium && ascertainIsMediumOnlyViewport();
  const isHiddenOnLarge = isLarge && ascertainIsLargeOnlyViewport();
  const isHiddenOnXLarge = isXLarge && ascertainIsXLargeViewport();

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

export default Hidden;
