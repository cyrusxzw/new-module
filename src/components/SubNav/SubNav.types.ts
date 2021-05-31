import { MouseEvent, ReactNode } from 'react';
import type { Themes } from '~/types';
import type { LinkStyle } from '~/components/Hyperlink/Hyperlink.types';

type SubNavLink = {
  children: string /** @todo change this prop api to content or text  */;
  id?: string;
  hasTargetInNewWindow?: boolean;
  style?: LinkStyle;
  url: string;
  onClick?: (event: MouseEvent) => void;
};

type GetLinkItems = (
  links: SubNavLink[],
  theme: Themes,
) => { content: ReactNode; id: string }[];

type GetSelectOption = (
  links: SubNavLink[],
) => { id: string; label: string; value: string }[];

type SubNavProps = {
  className?: string;
  id: string;
  isSelect?: boolean;
  links: SubNavLink[];
  heading?: string;
  headingClassName?: string;
  theme?: Themes;
};

export type { SubNavProps, SubNavLink, GetLinkItems, GetSelectOption };
