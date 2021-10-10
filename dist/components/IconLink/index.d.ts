import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import 'react';
import '../../sharedChunks/Themes.types';

declare type IconLinkProps = {
    altText?: string;
    className?: string;
    dataTestRef?: string;
    hasTargetInNewWindow?: boolean;
    height?: number;
    icon?: {
        sizes: ImageProps['sizes'];
    };
    iconImageClassName?: string;
    target?: string;
    width?: number;
};
declare type IconLinkType = ComponentWithoutChildren<IconLinkProps>;

declare const IconLink: IconLinkType;

export { IconLink };
