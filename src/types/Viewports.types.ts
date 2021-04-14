type BreakpointNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2l' | 'x3l' | 'x4l';

type ViewportNames =
  | BreakpointNames
  | 'xs to sm only'
  | 'lg to xl only'
  | 'xs to xl only'
  | 'xl only'
  | 'lg only'
  | 'md only'
  | 'xs to md only';

export type { ViewportNames, BreakpointNames };
