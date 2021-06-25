import React, { ReactElement } from 'react';
import type { HiddenProps } from './Hidden.types';
import { useWindowHasResized } from '~/customHooks';
import { isViewport } from '~/utils/viewport';

const Hidden = ({
  children,
  isLarge = false,
  isMedium = false,
  isSmall = false,
  isXLarge = false,
}: HiddenProps): ReactElement | null => {
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
