import type { Themes } from '~/types';
import type { LinkStyle } from '~/components/Hyperlink/Hyperlink.types';

/**
 * Not using HyperlinkType as url is not required here
 * @TODO openInANewWindow needs to be updated
 */
type HyperlinkItem = {
  id: string;
  text: string;
  style?: LinkStyle;
  url?: string;
  openInANewWindow?: boolean;
};

type List = {
  id: string;
  heading?: string;
  subHeading?: string;
  items?: HyperlinkItem[];
};

type ColumnProps = {
  lists: List[];
  theme?: Themes;
};

type TwoColumnListProps = {
  className?: string;
  leftColumn: List[];
  rightColumn: List[];
  theme?: Themes;
};

export type { TwoColumnListProps, ColumnProps };
