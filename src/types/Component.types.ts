/* eslint-disable @typescript-eslint/ban-types */
import type { ReactElement, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DefaultReactComponentReturn = ReactElement<any, any> | null;
type PropsWithChildren<P> = P & { children?: ReactNode };

type ComponentWithChildren<P = {}> = (
  props: PropsWithChildren<P>,
) => DefaultReactComponentReturn;
type ComponentWithoutChildren<P = {}> = (
  props: P,
) => DefaultReactComponentReturn;

export { ComponentWithChildren, ComponentWithoutChildren };
