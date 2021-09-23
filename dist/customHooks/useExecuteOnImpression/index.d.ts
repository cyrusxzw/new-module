import { RefObject } from 'react';

declare type UseExecuteOnImpressionOptions = {
    threshold?: number;
    isExecutableOnReEntry?: boolean;
};
declare type UseExecuteOnImpression = (ref: RefObject<HTMLElement>, callback: () => void, options?: UseExecuteOnImpressionOptions) => void;

/**
 * A hook to execute a callback when the element enters the fold
 * @param {HTMLElement} ref a DOM reference to the element
 * @param {Function} callback a callback function to execute
 * @param {{threshold: Number, isExecutableOnReEntry: Boolean}} options hook behaviour options
 *
 *
 * @example
 * const ref = React.useRef(null);
 * const myFunction = () => console.log('Execute order 66');
 * const options = {threshold: 0.5, isExecutableOnReEntry: true};
 *
 * useExecuteOnImpression(ref, myFunction, options)
 */
declare const useExecuteOnImpression: UseExecuteOnImpression;

export { useExecuteOnImpression };
