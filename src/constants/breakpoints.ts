import type { BreakpointNames } from '~/types';

type BreakpointValue = {
  minWidth?: number;
  maxWidth?: number;
};

const BREAKPOINTS: Map<BreakpointNames, BreakpointValue> = new Map([
  ['xs', { minWidth: 0, maxWidth: 320 }],
  ['sm', { minWidth: 321, maxWidth: 639 }],
  ['md', { minWidth: 640, maxWidth: 1024 }],
  ['lg', { minWidth: 1025, maxWidth: 1219 }],
  ['xl', { minWidth: 1220, maxWidth: 1599 }],
  ['x2l', { minWidth: 1600, maxWidth: 1919 }],
  ['x3l', { minWidth: 1920, maxWidth: 2399 }],
  ['x4l', { minWidth: 2400 }],
]);

export { BREAKPOINTS };
