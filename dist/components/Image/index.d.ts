import React from 'react';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import '../../sharedChunks/Themes.types';

declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;

export { Image };
