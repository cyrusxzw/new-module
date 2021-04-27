type BreakpointNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2l' | 'x3l' | 'x4l';

type ViewportNames =
  | BreakpointNames
  | 'xs only'
  | 'xs to sm only'
  | 'xs to md only'
  | 'xs to xl only'
  | 'sm only'
  | 'md only'
  | 'lg only'
  | 'lg to xl only'
  | 'xl only';

export type { ViewportNames, BreakpointNames };
