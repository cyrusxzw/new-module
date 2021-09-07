declare type WindowSize = {
    height: number;
    width: number;
};
declare type UseWindowHasResized = (callback?: () => void) => WindowSize;

declare const useWindowHasResized: UseWindowHasResized;

export { useWindowHasResized };
