import React from 'react';
import cx from 'classnames';
import styles from './MobileView.module.css';
import { MobileViewType } from './MobileView.types';
import { ImageSection } from '../components/ImageSection';
import { TextSection } from '../components/TextSection';

const MobileView: MobileViewType = ({ backgroundImages, textBlocks }) => {
  return (
    <div className={cx(styles.base)}>
      {backgroundImages.map(({ image }, index) => (
        <div key={index}>
          <ImageSection image={image} />
          <TextSection text={textBlocks[index].text} />
        </div>
      ))}
    </div>
  );
};

export { MobileView };
