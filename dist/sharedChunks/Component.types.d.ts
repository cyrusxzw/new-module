import { FC, ReactNode } from 'react';

declare type PropsWithChildren<Props> = Props & {
    children?: ReactNode;
};
declare type PropsWithoutChildren<Props> = Props & {
    children?: never;
};
declare type ComponentWithChildren<Props = {}> = FC<PropsWithChildren<Props>>;
declare type ComponentWithoutChildren<Props = {}> = FC<PropsWithoutChildren<Props>>;

export { ComponentWithoutChildren as C, ComponentWithChildren as a };
