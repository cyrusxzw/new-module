import type { ComponentWithoutChildren, Themes } from '~/types';

type HeaderProps = {
  closedTheme?: Themes;
  isMenuOpen?: boolean;
  onCloseClick: () => void;
  onOpenClick: () => void;
};

type HeaderType = ComponentWithoutChildren<HeaderProps>;

export type { HeaderType };
