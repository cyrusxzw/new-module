type WindowSize = {
  height: number;
  width: number;
};

type UseWindowHasResized = (callback?: () => void) => WindowSize;

export type { UseWindowHasResized };
