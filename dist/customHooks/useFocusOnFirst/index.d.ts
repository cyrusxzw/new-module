/// <reference types="react" />
declare type UseFocusOnFirst = {
    <Type = any>(shouldUse?: boolean, query?: string): React.MutableRefObject<Type>[];
};
declare const useFocusOnFirst: UseFocusOnFirst;

export { useFocusOnFirst };
