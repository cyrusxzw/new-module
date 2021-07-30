import { RefObject } from 'react';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import '../../sharedChunks/Themes.types';

declare type EmptyObject = Record<string, never>;
declare type UseImageTransition = <Attributes>(image: ImageProps, ref: RefObject<HTMLImageElement>, duration?: number, attributes?: Attributes | EmptyObject) => [(ImageProps & Attributes) | EmptyObject, boolean];

declare const useImageTransition: UseImageTransition;

export { useImageTransition };
