declare type WindowSize = {
  height: number;
  width: number;
};
declare type UseWindowHasResized = (callback?: () => void) => WindowSize;
export type { UseWindowHasResized };
