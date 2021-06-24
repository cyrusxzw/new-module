import { ReactElement } from 'react';

declare type DefaultReactComponentReturn = ReactElement<any, any> | null;
declare type ComponentWithoutChildren<P = {}> = (props: P) => DefaultReactComponentReturn;

export { ComponentWithoutChildren as C };
