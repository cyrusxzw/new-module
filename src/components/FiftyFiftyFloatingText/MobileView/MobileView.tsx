import React from 'react';
import { ImageSection } from '../components/ImageSection';
import { TextSection } from '../components/TextSection';

const MobileView = ({ backgroundImages, textBlocks }) => {
  return (
    <div>
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
