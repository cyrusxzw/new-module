import React, { forwardRef, FC } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import { constraintsByViewport } from '~/utils/viewports';
import { Hyperlink } from '~/components/Hyperlink';
import type { Props } from './Image.types';
import styles from './Image.module.css';

const Image: FC<Props> = forwardRef(function ImageRef(
  {
    altText,
    className,
    cta,
    isLazyLoaded = true,
    large,
    medium,
    small,
    style,
    type,
    theme = 'dark',
  },
  ref: React.LegacyRef<HTMLImageElement>,
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

export { Image };
