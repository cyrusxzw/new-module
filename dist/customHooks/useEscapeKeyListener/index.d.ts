declare type UseEscapeKeyListener = (onKeyPress: (event: KeyboardEvent) => void) => void;

declare const useEscapeKeyListener: UseEscapeKeyListener;

export { useEscapeKeyListener };
