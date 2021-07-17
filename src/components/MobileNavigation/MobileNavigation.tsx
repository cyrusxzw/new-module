import React, { useState } from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import { useEscapeKeyListener } from '~/customHooks';
import { Transition } from '~/components/Transition';
import { MobileNavigationContextProvider } from './MobileNavigation.context';
import { Header, ListItem, SecondaryNavigation } from './components/';
import type { MobileNavigationType } from './MobileNavigation.types';
import styles from './MobileNavigation.module.css';

const MobileNavigation: MobileNavigationType = ({
  className,
  items,
  isOpen,
  onCloseButtonClick,
  secondaryItems,
  theme,
}) => {
  const [activeId, setActiveId] = useState('top');
  const [activeNestedIds, setActiveNestedIds] = useState([]);
  const currentTheme = useThemeContext(theme, 'dark');
  const handleOnClose = () => {
    setActiveId(() => 'top');
    setActiveNestedIds(() => []);
    onCloseButtonClick();
  };

  useEscapeKeyListener(handleOnClose);

  const handleOnClick = (id: string) => {
    setActiveId(() => id);
  };

  const handleOnNestedClick = (id: string) => {
    setActiveNestedIds((currentState) => {
      if (currentState.includes(id)) {
        return currentState.filter((item) => item !== id);
      }

      return [...currentState, id];
    });
  };

  const handleOnBackButtonClick = () => {
    setActiveId(() => 'top');
    setActiveNestedIds(() => []);
  };

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
    styles[currentTheme],
    className,
  );

  return (
    <MobileNavigationContextProvider
      activeId={activeId}
      activeNestedIds={activeNestedIds}
      onBackButtonClick={handleOnBackButtonClick}
      onClick={handleOnClick}
      onNestedClick={handleOnNestedClick}
    >
      <ThemeContextProvider theme={currentTheme}>
        <Transition isActive={isOpen} type="fade">
          <div className={classSet}>
            <Header isActive={isOpen} onCloseButtonClick={handleOnClose} />

            <div className={styles.main}>
              <nav aria-hidden={!isOpen} aria-label="primary" role="navigation">
                <ul className={styles.list}>
                  {items.map((props) => (
                    <ListItem itemProps={props} key={props.id} />
                  ))}
                </ul>
              </nav>

              <SecondaryNavigation
                hasAriaHidden={activeId !== 'top'}
                items={secondaryItems}
              />
            </div>
          </div>
        </Transition>
      </ThemeContextProvider>
    </MobileNavigationContextProvider>
  );
};

export { MobileNavigation };
