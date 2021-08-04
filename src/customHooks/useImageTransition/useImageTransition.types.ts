import type { RefObject } from 'react';
import type { ImageProps } from '~/components/Image/Image.types';

type EmptyObject = Record<string, never>;

type UseImageTransition = <Attributes>(
  image: ImageProps,
  ref: RefObject<HTMLImageElement>,
  duration?: number,
  attributes?: Attributes | EmptyObject,
) => [(ImageProps & Attributes) | EmptyObject, boolean];

export type { UseImageTransition };
