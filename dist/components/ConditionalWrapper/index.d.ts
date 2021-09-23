import { ReactNode, ReactElement } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';

declare type Wrapper = (children: ReactNode) => ReactElement;
declare type ConditionalWrapperProps = {
    /**
     * If the condition is false, this functional component will be used instead of simply returning the children unwrapped.
     */
    alternateWrapper?: Wrapper;
    /**
     * If this boolean prop resolves to true the children prop will be wrapped in the wrapper prop.
     */
    condition: boolean;
    /**
     * A functional component that receives the children prop as an argument, `children => <div>{children}</div>`
     */
    wrapper: Wrapper;
};
declare type ConditionalWrapperType = ComponentWithChildren<ConditionalWrapperProps>;

declare const ConditionalWrapper: ConditionalWrapperType;

export { ConditionalWrapper };
