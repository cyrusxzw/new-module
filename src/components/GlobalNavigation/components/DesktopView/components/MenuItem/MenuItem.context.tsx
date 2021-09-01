import React from 'react';
import { createContext, useContext } from 'react';
import type {
  MenuItemContextProviderType,
  MenuItemContextType,
} from './MenuItem.types';

const MenuItemContext = createContext(undefined);

const MenuItemContextProvider: MenuItemContextProviderType = ({
  children,
  id,
  isActive,
}) => (
  <MenuItemContext.Provider value={{ id, isActive }}>
    {children}
  </MenuItemContext.Provider>
);

const useMenuItemContext = (fallbackId?: string): MenuItemContextType => {
  const context = useContext(MenuItemContext);

  if (context && !context?.id && fallbackId) {
    context.id = fallbackId;
  }

  if (context === undefined) {
    throw new Error(
      'useMenuItemContext must be used within a MenuItemContextProvider',
    );
  }

  return context;
};

export { MenuItemContextProvider, useMenuItemContext };
