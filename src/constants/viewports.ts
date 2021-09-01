import { BREAKPOINTS } from '~/constants/breakpoints';
import type { ViewportNames } from '~/types';

const VIEWPORTS: Map<ViewportNames, string> = new Map([
  ['xs', `(min-width: ${BREAKPOINTS.get('xs').minWidth}px)`],
  [
    'xs only',
    `(min-width: ${BREAKPOINTS.get('xs').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('xs').maxWidth
    }px)`,
  ],
  ['sm', `(min-width: ${BREAKPOINTS.get('sm').minWidth}px)`],
  [
    'sm only',
    `(min-width: ${BREAKPOINTS.get('sm').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('sm').maxWidth
    }px)`,
  ],
  [
    'xs to sm only',
    `(min-width: ${BREAKPOINTS.get('xs').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('sm').maxWidth
    }px)`,
  ],
  ['md', `(min-width: ${BREAKPOINTS.get('md').minWidth}px)`],
  [
    'md only',
    `(min-width: ${BREAKPOINTS.get('md').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('md').maxWidth
    }px)`,
  ],
  [
    'xs to md only',
    `(min-width: ${BREAKPOINTS.get('xs').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('md').maxWidth
    }px)`,
  ],
  ['lg', `(min-width: ${BREAKPOINTS.get('lg').minWidth}px)`],
  [
    'lg only',
    `(min-width: ${BREAKPOINTS.get('lg').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('lg').maxWidth
    }px)`,
  ],
  ['xl', `(min-width: ${BREAKPOINTS.get('xl').minWidth}px)`],
  [
    'xl only',
    `(min-width: ${BREAKPOINTS.get('xl').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('xl').maxWidth
    }px)`,
  ],
  [
    'lg to xl only',
    `(min-width: ${BREAKPOINTS.get('lg').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('xl').maxWidth
    }px)`,
  ],
  [
    'lg to x2l only',
    `(min-width: ${BREAKPOINTS.get('lg').minWidth}px) and (max-width: ${
      BREAKPOINTS.get('x2l').maxWidth
    }px)`,
  ],

  [
    'xs to xl only',
    `(min-width: ${BREAKPOINTS.get('xs').minWidth}px) && (max-width: ${
      BREAKPOINTS.get('xl').maxWidth
    }px)`,
  ],
  ['x2l', `(min-width: ${BREAKPOINTS.get('x2l').minWidth}px)`],
  ['x3l', `(min-width: ${BREAKPOINTS.get('x3l').minWidth}px)`],
  ['x4l', `(min-width: ${BREAKPOINTS.get('x4l').minWidth}px)`],
]);

export { VIEWPORTS };
