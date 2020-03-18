import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import { constraintsByViewport } from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import styles from './Image.module.css';

const Image = ({
  altText,
  className,
  cta,
  forwardedRef,
  large,
  medium,
  small,
  type,
  theme,
}) => {
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
    <picture className={classSet} ref={forwardedRef}>
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

      <img alt={altText} />
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
};

Image.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  cta: PropTypes.object,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  id: PropTypes.string,
  isFullBleedImage: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Image.defaultProps = {
  altText: undefined,
  className: undefined,
  cta: undefined,
  forwardedRef: undefined,
  id: undefined,
  isFullBleedImage: undefined,
  large: undefined,
  medium: undefined,
  small: undefined,
  theme: 'dark',
  type: undefined,
};

export default Image;
