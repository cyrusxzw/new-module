import React from 'react';
import { Image } from '~/components/Image';
import type { CollectionImageType } from './CollectionImage.types';
import styles from './CollectionImage.module.css';

const CollectionImage: CollectionImageType = ({ altText, sizes, dataTestRef }) => {
  if (!sizes) return null;

  return (
    <div className={styles.base} data-test-ref={dataTestRef}>
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
