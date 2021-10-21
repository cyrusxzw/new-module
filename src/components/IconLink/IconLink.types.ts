import type { ComponentWithoutChildren } from '~/types';
import type { ImageProps } from '../Image/Image.types';

type IconLinkProps = {
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

export type IconLinkType = ComponentWithoutChildren<IconLinkProps>;
