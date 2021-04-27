import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';

const IconLink = ({
  altText,
  className,
  dataTestRef,
  hasTargetInNewWindow,
  height,
  icon,
  iconImageClassName,
  target,
  width,
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

IconLink.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  hasTargetInNewWindow: PropTypes.bool,
  height: PropTypes.number,
  icon: PropTypes.object,
  iconImageClassName: PropTypes.string,
  target: PropTypes.string,
  width: PropTypes.number,
};

IconLink.defaultProps = {
  altText: undefined,
  className: undefined,
  dataTestRef: undefined,
  hasTargetInNewWindow: true,
  height: 21,
  icon: undefined,
  iconImageClassName: undefined,
  target: undefined,
  width: 21,
};

export { IconLink };
