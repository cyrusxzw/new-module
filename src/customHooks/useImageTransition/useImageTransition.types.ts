import type { RefObject } from 'react';

type EmptyObject = Record<string, never>;

type UseImageTransition = <Image, Attributes>(
  image: Image,
  ref: RefObject<HTMLImageElement>,
  duration?: number,
  attributes?: Attributes | EmptyObject,
) => [(Image & Attributes) | EmptyObject, boolean];

export type { UseImageTransition };
