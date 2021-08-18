declare type UseEscapeKeyListener = (onKeyPress: (event: KeyboardEvent) => void, shouldRunCallback?: boolean) => void;

declare const useEscapeKeyListener: UseEscapeKeyListener;

export { useEscapeKeyListener };
