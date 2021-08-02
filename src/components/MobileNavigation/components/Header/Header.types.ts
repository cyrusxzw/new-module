import type { ComponentWithoutChildren, Themes } from '~/types';

type HeaderProps = {
  closedTheme?: Themes;
  isMenuOpen?: boolean;
  onCartClick: () => void;
  onCloseClick: () => void;
  onOpenClick: () => void;
};

type HeaderType = ComponentWithoutChildren<HeaderProps>;

export type { HeaderType };
