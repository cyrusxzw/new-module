import type {
  ComponentWithChildren,
  ComponentWithoutChildren,
  Themes,
} from '~/types';

type DesktopViewProps = {
  className?: string;
};

type DesktopViewType = ComponentWithoutChildren<DesktopViewProps>;

type DesktopViewContextType = {
  closedClassName?: string;
  closedLogoTheme?: Themes;
  openClassName?: string;
};

type DesktopViewContextProviderType = ComponentWithChildren<DesktopViewContextType>;

type UseDesktopViewContextStore = (
  props: DesktopViewContextType,
) => DesktopViewContextType;

export type {
  DesktopViewContextProviderType,
  DesktopViewContextType,
  DesktopViewType,
  UseDesktopViewContextStore,
};
