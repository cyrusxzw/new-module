import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Collection } from '../Collection';
import type {
  SecondaryNavigationType,
  SecondaryNavigationItem,
} from './SecondaryNavigation.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './SecondaryNavigation.module.css';

const SecondaryNavigation: SecondaryNavigationType = ({ items }) => {
  const {
    activeCollectionId,
    isOpen,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();

  const currentTheme = useThemeContext(null, 'dark');

  if (!items && !items?.length) return null;

  const isVisible = isOpen && activeCollectionId === 'top';
  const handleSetActiveCollectionId = (id: string) => setActiveCollectionId(id);
  const classSet = cx(
    styles.base,
    { [styles.hidden]: activeCollectionId !== 'top' },
    styles[currentTheme],
  );

  const getElement = (props: SecondaryNavigationItem) => {
    if (!props) return null;

    return props.type === 'link' ? (
      <Hyperlink
        className={cx(styles.element, compositionStyles.ornamentalWrapper)}
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
          className={cx(styles.element, compositionStyles.ornamentalWrapper)}
          dataTestRef={props.dataTestRef}
          isInline={true}
          onClick={() =>
            props.type === 'read-collection'
              ? handleSetActiveCollectionId(props.id)
              : props.onClick
          }
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
        {items.filter(Boolean).map((props: SecondaryNavigationItem) => {
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

export { SecondaryNavigation };
