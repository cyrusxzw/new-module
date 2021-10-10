/* eslint-disable @typescript-eslint/ban-types */
import type { FC, ReactNode } from 'react';

type PropsWithChildren<Props> = Props & { children?: ReactNode };
type PropsWithoutChildren<Props> = Props & { children?: never };

type ComponentWithChildren<Props = {}> = FC<PropsWithChildren<Props>>;
type ComponentWithoutChildren<Props = {}> = FC<PropsWithoutChildren<Props>>;

export type { ComponentWithChildren, ComponentWithoutChildren };
