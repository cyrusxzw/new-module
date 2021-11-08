import { ReactNode } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import { V as VideoProps } from '../../sharedChunks/Video.types';
import '../../sharedChunks/Themes.types';
import '../../sharedChunks/Poster.types';

declare type TextOverFullWidthAssetProps = {
    backgroundImage?: ImageProps;
    backgroundVideo?: VideoProps;
    className?: string;
    content: ReactNode;
    copyHeight?: 'Top' | 'Bottom';
    copySide?: 'Left' | 'Right';
    mediaType: 'Image' | 'Video';
};
declare type TextOverFullWidthAssetType = ComponentWithoutChildren<TextOverFullWidthAssetProps>;

declare const TextOverFullWidthAsset: TextOverFullWidthAssetType;

export { TextOverFullWidthAsset };
