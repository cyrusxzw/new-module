import { isInBrowser } from '~/utils/environment';
import { VIEWPORTS } from '~/constants';
import type { ViewportNames } from '~/types';

const isViewport = (viewport: ViewportNames): boolean | Error => {
  /** @TODO remove this once TypeScript migration is complete */
  if (!VIEWPORTS.get(viewport)) {
    return new Error(`The viewport '${viewport}' does not exist`);
  }

  return isInBrowser()
    ? window.matchMedia(VIEWPORTS.get(viewport)).matches
    : false;
};

export { isViewport };
