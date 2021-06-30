import React from 'react';
import type { HiddenType } from './Hidden.types';
import { useWindowHasResized } from '~/customHooks';
import { isViewport } from '~/utils/viewport';

/**
 * The Hidden component will unmount children components given they meet
 * the breakpoint criteria of the `sm`, `me`, `lg` and/or `xl` in the `when` prop.
 * @param children
 * @param when - 'sm' | 'md' | 'lg' | 'xl'
 */
const Hidden: HiddenType = ({ children, when }) => {
  useWindowHasResized();

  const isHiddenOnSmall = when?.includes('sm') && isViewport('xs to sm only');
  const isHiddenOnMedium = when?.includes('md') && isViewport('md only');
  const isHiddenOnLarge = when?.includes('lg') && isViewport('lg only');
  const isHiddenOnXLarge = when?.includes('xl') && isViewport('xl');

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
