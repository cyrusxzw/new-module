import React from 'react';
import cx from 'classnames';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import styles from './BackgroundElement.module.css';
import type { BackgroundElementType } from './BackgroundElement.types';

const BackgroundElement: BackgroundElementType = ({ image, className }) => {
  const classSet = cx(styles.base, className);

  if (image) {
    return <Image {...image} className={classSet} />;
  }

  return null;
};

export { BackgroundElement };
