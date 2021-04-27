import { isInBrowser } from '~/utils/environment';
import { VIEWPORTS } from '~/constants';
import type { ViewportNames } from '~/types';

const isViewport = (viewport: ViewportNames): boolean => {
  if (!VIEWPORTS.get(viewport)) {
    throw new Error(`The viewport '${viewport}' does not exist`);
  }

  return isInBrowser()
    ? window.matchMedia(VIEWPORTS.get(viewport)).matches
    : false;
};

export { isViewport };
