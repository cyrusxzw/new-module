import React from 'react';
import { BREAKPOINTS } from '~/constants';
import { uid } from 'react-uid';
import type { BreakpointNames } from '~/types';
import type { ImageProps, ImageSizeName, ImageSizeCode } from './Image.types';

const IMAGE_SIZES: Map<ImageSizeName, ImageSizeCode> = new Map([
  ['xSmall', 'xs'],
  ['small', 'sm'],
  ['medium', 'md'],
  ['large', 'lg'],
  ['xLarge', 'x3l'],
]);

function getReorderedSizes(sizes: ImageProps['sizes']) {
  /** Reorder props */
  const IMAGE_SOURCES: Map<ImageSizeName, string> = new Map([
    ['xLarge', sizes.xLarge],
    ['large', sizes.large],
    ['medium', sizes.medium],
    ['small', sizes.small],
    ['xSmall', sizes.xSmall],
  ]);

  return IMAGE_SOURCES;
}

function getImageSourcesBySize(
  sizes: ImageProps['sizes'],
): null | JSX.Element[] {
  if (!sizes) return null;
  /**
   * Ensure that there is a base / mobile first image if xSmall size prop is absent
   */
  let hasMobileFirstImage = false;

  if (!!Object.keys(sizes).indexOf('xSmall') && !!sizes['xSmall']) {
    hasMobileFirstImage = true;
  }

  const IMAGE_SOURCES = getReorderedSizes(sizes);
  const imageSources = [];

  IMAGE_SOURCES.forEach((source, name) => {
    const code: BreakpointNames | undefined =
      name === 'small' && !hasMobileFirstImage ? 'xs' : IMAGE_SIZES.get(name);

    if (!code || !source) return null;

    // eslint-disable-next-line
    console.log({ source, name, code });

    imageSources.push(
      <source
        key={uid(code)}
        media={`(min-width: ${BREAKPOINTS.get(code).minWidth}px)`}
        srcSet={source}
      />,
    );
  });

  // eslint-disable-next-line
  console.log({ imageSources, hasMobileFirstImage });

  return imageSources;
}

export { getImageSourcesBySize };
