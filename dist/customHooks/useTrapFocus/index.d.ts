/// <reference types="react" />
declare type UseTrapFocus = {
    <Type = any>(shouldTrap?: boolean, query?: string): React.MutableRefObject<Type>[];
};
declare const useTrapFocus: UseTrapFocus;

export { useTrapFocus };
