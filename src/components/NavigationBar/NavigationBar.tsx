import React from 'react';
import cx from 'classnames';
import { Hyperlink } from '~/components/Hyperlink';
import styles from './NavigationBar.module.css';
import type { NavigationBarType } from './NavigationBar.types';

const testRefs = {
  wrapper: 'NAVIGATION_BAR',
  parentLink: 'NAVIGATION_BAR_PARENT_LINK',
  childLink: 'NAVIGATION_BAR_CHILD_LINK',
};

const NavigationBar: NavigationBarType = ({
  childLinks = [],
  className,
  parentLink,
  selectedUrl,
}) => {
  const hasChildren = !!childLinks.length;

  if (!hasChildren && !parentLink) {
    return null;
  }

  const links = [...childLinks];

  if (parentLink) {
    links.splice(0, 0, parentLink);
  }

  return (
    <div
      className={cx(styles.wrapper, className)}
      data-test-ref={testRefs.wrapper}
      data-testid="data-testid-NavigationBar"
    >
      <ul className={cx(styles.list)}>
        {links.map(({ hasTargetInNewWindow, text, url }, index) => {
          const linkClasses = cx({
            [styles.link]: true,
            [styles.hasChildren]: hasChildren && parentLink && index === 0,
            [styles.isActive]: url === selectedUrl,
          });

          return (
            <li
              className={cx(styles.listItem)}
              data-testid={
                parentLink && index === 0
                  ? testRefs.parentLink
                  : testRefs.childLink
              }
              key={index}
            >
              <Hyperlink
                className={linkClasses}
                dataTestRef={
                  parentLink && index === 0
                    ? testRefs.parentLink
                    : testRefs.childLink
                }
                hasTargetInNewWindow={hasTargetInNewWindow}
                theme="dark"
                url={url}
              >
                <span className={cx(styles.linkInnerText)}>{text}</span>
              </Hyperlink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { NavigationBar };
