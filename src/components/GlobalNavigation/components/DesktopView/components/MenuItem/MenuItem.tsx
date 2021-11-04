import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { MenuItemContextProvider } from './MenuItem.context';
import { Button } from '~/components/Button';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Hyperlink } from '~/components/Hyperlink';
import type { MenuItemType } from './MenuItem.types';
import styles from './MenuItem.module.css';

const MenuItem: MenuItemType = ({
  children,
  dataCount,
  dataTestRef,
  dataTestId,
  id,
  label,
  onClick,
  onMouseEnter,
  title,
  type,
  url,
}) => {
  const { activeCollectionId } = useGlobalNavigationStateContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const isActive = activeCollectionId === id;
  const sharedProps = {
    className: cx(styles.element, styles[currentTheme]),
    dataTestRef,
    dataTestId,
    title,
  };

  const classSet = cx(styles.base, styles[currentTheme], {
    [styles.active]: type === 'trigger' && isActive,
  });

  return (
    <li className={classSet}>
      <ConditionalWrapper
        alternateWrapper={(children) => (
          <Hyperlink {...sharedProps} url={url}>
            {children}
          </Hyperlink>
        )}
        condition={type === 'trigger'}
        wrapper={(children) => (
          <Button
            {...sharedProps}
            aria={{
              expanded: isActive,
              haspopup: true,
            }}
            data-count={dataCount}
            isInline={true}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
          >
            {children}
          </Button>
        )}
      >
        {label}
      </ConditionalWrapper>

      <MenuItemContextProvider id={id} isActive={isActive}>
        {children}
      </MenuItemContextProvider>
    </li>
  );
};

export { MenuItem };
