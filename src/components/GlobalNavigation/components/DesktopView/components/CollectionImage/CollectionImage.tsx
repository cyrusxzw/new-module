import React from 'react';
import cx from 'classnames';
import { Image } from '~/components/Image';
import type { CollectionImageType } from './CollectionImage.types';
import styles from './CollectionImage.module.css';

const CollectionImage: CollectionImageType = ({
  altText,
  dataTestRef,
  isVisible,
  sizes,
}) => {
  if (!sizes) return null;

  return (
    <div
      className={cx(styles.base, { [styles.hidden]: !isVisible })}
      data-test-ref={dataTestRef}
    >
      <Image
        altText={altText}
        className={styles.image}
        isLazyLoaded={false}
        sizes={sizes}
      />
    </div>
  );
};

export { CollectionImage };
