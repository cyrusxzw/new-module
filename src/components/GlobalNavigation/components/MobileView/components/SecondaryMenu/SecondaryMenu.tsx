import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Transition } from '~/components/Transition';
import { Collection } from '../Collection';
import type {
  SecondaryMenuType,
  SecondaryMenuItem,
} from './SecondaryMenu.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './SecondaryMenu.module.css';

const SecondaryMenu: SecondaryMenuType = ({ items }) => {
  const {
    activeCollectionId,
    isOpen,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();

  const {
    actions: { stores },
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(null, 'dark');

  if (!items?.length) return null;

  const isVisible = isOpen && activeCollectionId === 'top';
  const handleSetActiveCollectionId = (id: string) => setActiveCollectionId(id);
  const classSet = cx(styles.base, styles[currentTheme]);

  const elementClassName = cx(
    styles.element,
    { [styles.hidden]: activeCollectionId !== 'top' },
    compositionStyles.ornamentalWrapper,
  );

  const handleOnStoresClick = () => {
    stores?.onClick();
    setActiveCollectionId(stores.id);
  };

  const getElement = (props: SecondaryMenuItem) => {
    if (!props) return null;

    const handleOnClick = () => {
      if (props.type === 'read-collection') {
        handleSetActiveCollectionId(props.id);
      } else if (props.id === stores.id) {
        handleOnStoresClick();
      } else if (props.type === 'trigger') {
        props.onClick();
      }
    };

    return props.type === 'link' ? (
      <Hyperlink
        className={elementClassName}
        dataTestRef={props.dataTestRef}
        tabIndex={!isVisible ? -1 : null}
        title={props.title}
        url={props.url}
      >
        <span className={compositionStyles.ornamentalHover}>{props.label}</span>
      </Hyperlink>
    ) : (
      <>
        <Button
          className={elementClassName}
          dataTestRef={props.dataTestRef}
          isInline={true}
          onClick={handleOnClick}
          tabIndex={!isVisible ? -1 : null}
          title={props.title}
        >
          <span className={compositionStyles.ornamentalHover}>
            {props.label}
          </span>
        </Button>

        {props.type === 'read-collection' && (
          <Collection
            {...props}
            isVisible={activeCollectionId === 'read-collection'}
            shouldHideTopCollection={true}
          />
        )}

        {props.id === stores.id && (
          <Transition
            isActive={activeCollectionId === stores.id}
            shouldMountOnEnter={true}
            shouldUnmountOnExit={true}
            type="slideLeft"
          >
            <div className={cx(compositionStyles.slide, styles.stores)}>
              <stores.component />
            </div>
          </Transition>
        )}
      </>
    );
  };

  return (
    <nav
      aria-hidden={!isVisible}
      aria-label="supplementary"
      className={classSet}
      role="navigation"
    >
      <ul className={styles.list}>
        {items.filter(Boolean).map((props: SecondaryMenuItem) => {
          return (
            <li className={styles.item} key={props.label}>
              {getElement(props)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { SecondaryMenu };
