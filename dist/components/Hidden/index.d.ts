/// <reference types="react" />
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type HiddenViewports = 'sm' | 'md' | 'lg' | 'xl';
declare type HiddenProps = {
    children: React.ReactNode;
    /** An array of strings representing viewports that the children components
     * will be unmounted on. 'sm' | 'md' | 'lg' | 'xl'.
     */
    when: HiddenViewports[];
};
declare type HiddenType = ComponentWithChildren<HiddenProps>;

/**
 * The Hidden component will unmount children components given they meet
 * the breakpoint criteria of the `sm`, `me`, `lg` and/or `xl` in the `when` prop.
 * @param children
 * @param when - 'sm' | 'md' | 'lg' | 'xl'
 */
declare const Hidden: HiddenType;

export { Hidden };
