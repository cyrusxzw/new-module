import { GlobalNavigation } from './GlobalNavigation';
import type { GlobalNavigationType } from './GlobalNavigation.types';
import {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
  GlobalNavigationContextProvider,
  useGlobalNavigationContext,
} from './GlobalNavigation.context';
import { DesktopViewContextProvider } from './components/DesktopView/DesktopView.context';
import { MobileViewContextProvider } from './components/MobileView/MobileView.context';

export {
  GlobalNavigation,
  GlobalNavigationType,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
  GlobalNavigationContextProvider,
  useGlobalNavigationContext,
  DesktopViewContextProvider,
  MobileViewContextProvider,
};
