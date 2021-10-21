import type { ComponentWithoutChildren } from '~/types';
import { HyperlinkProps } from '~/components/Hyperlink/Hyperlink.types';

type Link = Pick<HyperlinkProps, 'hasTargetInNewWindow' | 'url'> & {
  text: string;
};

type NavigationBarProps = {
  childLinks?: Link[];
  className?: string;
  parentLink?: Link;
  selectedUrl?: string;
};

type NavigationBarType = ComponentWithoutChildren<NavigationBarProps>;

export { NavigationBarType };
