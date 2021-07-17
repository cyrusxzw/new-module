import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import type { SecondaryNavigationType } from './SecondaryNavigation.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';
import styles from './SecondaryNavigation.module.css';

const SecondaryNavigation: SecondaryNavigationType = ({
  items,
  hasAriaHidden = false,
}) => {
  const currentTheme = useThemeContext(null, 'dark');

  if (!items && !items?.length) return null;

  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <footer aria-hidden={hasAriaHidden} className={classSet}>
      <nav aria-label="supplementary" role="navigation">
        <ul className={styles.list}>
          {items.map((props) => (
            <li className={styles.item} key={props.label}>
              {props.type === 'link' ? (
                <Hyperlink
                  className={styles.element}
                  tabIndex={hasAriaHidden ? -1 : null}
                  title={props.title}
                  url={props.url}
                >
                  <span className={compositionStyles.ornimentalHover}>
                    {props.label}
                  </span>
                </Hyperlink>
              ) : (
                <Button
                  className={styles.element}
                  isInline={true}
                  onClick={props.onClick}
                  tabIndex={hasAriaHidden ? -1 : null}
                  title={props.title}
                >
                  <span className={compositionStyles.ornimentalHover}>
                    {props.label}
                  </span>
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export { SecondaryNavigation };
