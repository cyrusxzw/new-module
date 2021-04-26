import type { RefObject } from 'react';
declare type EmptyObject = Record<string, never>;
declare type UseImageTransition = <Image, Attributes>(
  image: Image,
  ref: RefObject<HTMLImageElement>,
  duration?: number,
  attributes?: Attributes | EmptyObject,
) => [(Image & Attributes) | EmptyObject, boolean];
export type { UseImageTransition };
