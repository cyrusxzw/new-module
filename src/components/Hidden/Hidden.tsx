import React, { ReactElement } from 'react';
import type { HiddenProps } from './Hidden.types';
// import cx from 'classnames';
import { useWindowHasResized } from '~/customHooks';
import { isViewport } from '~/utils/viewport';
// import styles from './Hidden.module.css';

const Hidden = ({
  children,
  isLarge = false,
  isMedium = false,
  isSmall = false,
  isXLarge = false,
}: HiddenProps): ReactElement | null => {
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

export { Hidden };
