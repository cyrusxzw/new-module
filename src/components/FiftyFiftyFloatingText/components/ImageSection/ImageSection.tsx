import React from 'react';
import cx from 'classnames';
import { Image } from '~/components/Image';
import styles from './ImageSection.module.css';
import type { ImageSectionType } from './ImageSection.types';

const ImageSection: ImageSectionType = ({ image, className }) => {
  const classSet = cx(styles.base, className);
  if (image) {
    return <Image {...image} className={classSet} />;
  }

  return null;
};

export { ImageSection };
