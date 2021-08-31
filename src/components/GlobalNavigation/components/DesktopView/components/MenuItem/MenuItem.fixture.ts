import type { MenuItemProps } from './MenuItem.types';

const MenuItemFixture: MenuItemProps = {
  dataTestRef: 'MENU_ITEM_TEST_REF',
  id: 'menu-item-id',
  label: 'menu item label',
  onClick: () => null,
  title: 'menu item title',
  type: 'trigger' as const,
  url: '#menu-item-url',
};

export { MenuItemFixture };
