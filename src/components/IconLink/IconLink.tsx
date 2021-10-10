import React from 'react';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import type { IconLinkType } from './IconLink.types';

const IconLink: IconLinkType = ({
  altText,
  className,
  dataTestRef,
  hasTargetInNewWindow = true,
  height = 21,
  icon,
  iconImageClassName,
  target,
  width = 21,
}) => {
  return (
    <Hyperlink
      className={className}
      dataTestRef={dataTestRef}
      hasTargetInNewWindow={hasTargetInNewWindow}
      title={altText}
      url={target}
    >
      <Image
        altText={altText}
        className={iconImageClassName}
        sizes={icon.sizes}
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </Hyperlink>
  );
};

export { IconLink };
