import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import { constraintsByViewport } from '~/utils/viewports';
import { Hyperlink } from '~/components/Hyperlink';
import styles from './Image.module.css';

const Image = forwardRef(function ImageRef(
  {
    altText,
    className,
    cta,
    isLazyLoaded,
    large,
    medium,
    small,
    style,
    type,
    theme,
  },
  ref,
) {
  const fullBleedImage = type === 'componentFullBleedImage';
  const isRightAligned = type === 'componentSquareImage';

  const classSet = cx(
    { [styles.base]: !cta },
    styles.picture,
    { [styles.fullBleedImage]: fullBleedImage },
    { [styles.isRightAligned]: isRightAligned },
    styles[theme],
    className,
  );

  const picture = (
    <picture className={classSet} style={style}>
      {large && (
        <source
          media={`(min-width: ${get(
            constraintsByViewport,
            'large.minWidth',
          )}px)`}
          srcSet={large}
        />
      )}

      {medium && (
        <source
          media={`(min-width: ${get(
            constraintsByViewport,
            'medium.minWidth',
          )}px)`}
          srcSet={medium}
        />
      )}

      {small && (
        <source
          media={`(min-width: ${get(
            constraintsByViewport,
            'small.minWidth',
          )}px)`}
          srcSet={small}
        />
      )}

      <img alt={altText} loading={isLazyLoaded ? 'lazy' : 'eager'} ref={ref} />
    </picture>
  );

  return cta ? (
    <Hyperlink
      className={styles.base}
      hasTargetInNewWindow={cta.openInANewWindow}
      theme={theme}
      url={cta.url}
    >
      {picture}
    </Hyperlink>
  ) : (
    picture
  );
});

Image.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  cta: PropTypes.object,
  id: PropTypes.string,
  isFullBleedImage: PropTypes.bool,
  isLazyLoaded: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Image.defaultProps = {
  altText: undefined,
  className: undefined,
  cta: undefined,
  id: undefined,
  isFullBleedImage: undefined,
  isLazyLoaded: true,
  large: undefined,
  medium: undefined,
  small: undefined,
  style: undefined,
  theme: 'dark',
  type: undefined,
};

export { Image };
