import { ReactElement, ReactNode } from 'react';

declare type DefaultReactComponentReturn = ReactElement<any, any> | null;
declare type PropsWithChildren<P> = P & {
    children?: ReactNode;
};
declare type ComponentWithChildren<P = {}> = (props: PropsWithChildren<P>) => DefaultReactComponentReturn;
declare type ComponentWithoutChildren<P = {}> = (props: P) => DefaultReactComponentReturn;

export { ComponentWithoutChildren as C, ComponentWithChildren as a };
