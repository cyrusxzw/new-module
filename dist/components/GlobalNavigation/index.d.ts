import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type GlobalNavigationProps = {
    className?: string;
};
declare type GlobalNavigationType = ComponentWithChildren<GlobalNavigationProps>;

declare const GlobalNavigation: GlobalNavigationType;

export { GlobalNavigation };
