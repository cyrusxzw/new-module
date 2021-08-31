import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useFocusOnFirst } from '~/customHooks';
import { Transition } from '~/components/Transition';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMobileViewContext } from '~/components/GlobalNavigation/components/MobileView/MobileView.context';
import { ListItem } from '~/components/GlobalNavigation/components/MobileView/components';
import type { CollectionType } from './Collection.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './Collection.module.css';

const Collection: CollectionType = ({
  backLabel,
  id,
  isVisible,
  items,
  label,
  promotion,
  shouldHideTopCollection = false,
  title,
}) => {
  const {
    activeCollectionId,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();
  const { onBackButtonClick } = useMobileViewContext();
  const currentTheme = useThemeContext(null, 'dark');

  const isActive = activeCollectionId === id;
  const [listRef] = useFocusOnFirst(
    isActive,
    'a:not([tabindex="-1"]), button:not([tabindex="-1"])',
  );
  const handleOnClick = () => setActiveCollectionId(id);

  const handleOnBackButtonClick = () => {
    setActiveCollectionId('top');
    onBackButtonClick();
  };

  const listClassSet = cx(
    compositionStyles.list,
    compositionStyles.sublist,
    compositionStyles.slide,
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
      {!shouldHideTopCollection && (
        <Button
          aria={{
            expanded: isActive,
            haspopup: true,
            hidden: !isActive,
          }}
          className={cx(compositionStyles.itemElement)}
          isInline={true}
          onClick={handleOnClick}
          tabIndex={activeCollectionId === 'top' && isVisible ? null : -1}
          theme={currentTheme}
          title={title}
        >
          {label}
          <Icon
            className={forwardIconClassSet}
            height={12}
            name="chevron"
            theme={currentTheme}
            width={12}
          />
        </Button>
      )}

      <Transition
        isActive={isActive && !!items && !!items.length}
        type="slideLeft"
      >
        <ul
          aria-hidden={!isActive}
          aria-label="submenu"
          className={listClassSet}
          ref={listRef}
        >
          <li className={compositionStyles.listItem}>
            <Button
              aria={{ hidden: !isActive, label: 'back' }}
              className={backButtonClassSet}
              isInline={true}
              onClick={handleOnBackButtonClick}
              tabIndex={isActive ? null : -1}
              theme={currentTheme}
              title={backLabel}
            >
              <Icon
                className={backIconClassSet}
                height={14}
                name="chevron"
                width={14}
              />{' '}
              {backLabel || label}
            </Button>
          </li>

          {items.map((props) => (
            <ListItem
              isVisible={isActive}
              itemProps={props}
              key={props.label}
            />
          ))}

          {promotion && <ListItem isVisible={isActive} itemProps={promotion} />}
        </ul>
      </Transition>
    </>
  );
};

export { Collection };
