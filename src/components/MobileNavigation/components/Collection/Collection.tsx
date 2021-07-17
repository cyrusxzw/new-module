import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Transition } from '~/components/Transition';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { useMobileNavigationContext } from '~/components/MobileNavigation/MobileNavigation.context';
import { ListItem } from '~/components/MobileNavigation/components';
import type { CollectionType } from './Collection.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';
import styles from './Collection.module.css';

const Collection: CollectionType = ({ id, items, title, label }) => {
  const currentTheme = useThemeContext(null, 'dark');
  const { activeId, onClick, onBackButtonClick } = useMobileNavigationContext();
  const isActive = activeId === id;
  const handleOnClick = () => onClick(id);

  const listClassSet = cx(
    compositionStyles.list,
    compositionStyles.sublist,
    styles.slide,
  );

  const forwardIconClassSet = cx(
    styles.directionIcon,
    styles.forward,
    styles[currentTheme],
  );

  const backButtonClassSet = cx(
    compositionStyles.itemElement,
    styles.backButton,
  );

  const backIconClassSet = cx(
    styles.directionIcon,
    styles.backwards,
    styles[currentTheme],
  );

  return (
    <>
      <Button
        aria={{
          expanded: isActive,
          haspopup: true,
          hidden: !isActive,
        }}
        aria-expanded={isActive}
        aria-haspopup="true"
        className={compositionStyles.itemElement}
        isInline={true}
        onClick={handleOnClick}
        tabIndex={isActive ? -1 : null}
        theme={currentTheme}
        title={title}
      >
        <span className={compositionStyles.ornimentalHover}>{label}</span>{' '}
        <Icon
          className={forwardIconClassSet}
          height={14}
          name="chevron"
          theme={currentTheme}
          width={14}
        />
      </Button>

      <Transition
        isActive={isActive && !!items && !!items.length}
        type="slideLeft"
      >
        <ul
          aria-hidden={!isActive}
          aria-label="submenu"
          className={listClassSet}
        >
          <li className={compositionStyles.listItem}>
            <Button
              aria={{ hidden: !isActive, label: 'back' }}
              className={backButtonClassSet}
              isInline={true}
              onClick={onBackButtonClick}
              tabIndex={activeId === 'top' ? -1 : null}
              theme={currentTheme}
              title={title}
            >
              <Icon
                className={backIconClassSet}
                height={14}
                name="chevron"
                width={14}
              />{' '}
              <span className={compositionStyles.ornimentalHover}>{label}</span>
            </Button>
          </li>

          {items.map((props) => (
            <ListItem isActive={isActive} itemProps={props} key={props.label} />
          ))}
        </ul>
      </Transition>
    </>
  );
};

export { Collection };
