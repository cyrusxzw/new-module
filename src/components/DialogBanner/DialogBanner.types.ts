import type { VFC } from 'react';

type DialogBannerProps = {
  className?: string;
  copy?: {
    closeButtonTitle?: string;
  };
  cta?: {
    dataTestRef?: string;
    id?: string;
    openInANewWindow?: boolean;
    text?: string;
    title?: string;
    url: string;
  };
  hasCloseButton?: boolean;
  isVisible?: boolean;
  message: string;
  onClose: () => void;
  position?: 'top' | 'bottom';
  theme?: 'dark' | 'black';
  heading: string;
};

export type DialogBannerType = VFC<DialogBannerProps>;
