import type {
  ComponentWithChildren,
  ComponentWithoutChildren,
  Themes,
} from '~/types';
import type { MenuItemNavBarTrackingWithAction } from '~/components/GlobalNavigation/GlobalNavigation.types';

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

type MenuItemNavBarTrackingWithActionType = MenuItemNavBarTrackingWithAction;

type UseDesktopViewContextStore = (
  props: DesktopViewContextType,
) => DesktopViewContextType;

export type {
  DesktopViewContextProviderType,
  DesktopViewContextType,
  DesktopViewType,
  MenuItemNavBarTrackingWithActionType,
  UseDesktopViewContextStore,
};
