import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useWindowHasResized } from '~/customHooks';
import { isViewport } from '~/utils/viewport';
import { List } from '~/components/List';
import { Select } from '~/components/Select/index';
import { Heading } from '~/components/Heading/index';
import { getLinkItems, getSelectOptions, handleOnChange } from './SubNav.utils';
import type { SubNavProps } from './SubNav.types';
import styles from './SubNav.module.css';

const SubNav = forwardRef<HTMLElement, SubNavProps>(function SubNavRef(
  {
    className,
    heading,
    headingClassName,
    id,
    isSelect,
    links,
    theme,
    onSelectCallback,
  },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');

  useWindowHasResized();

  const classSet = cx(
    styles.base,
    styles[currentTheme],
    { [styles.select]: isSelect },
    className,
  );

  return (
    <nav className={classSet} ref={ref}>
      {heading && (
        <Heading
          className={cx(styles.heading, headingClassName)}
          level="3"
          size="small"
          theme={currentTheme}
        >
          {heading}
        </Heading>
      )}
      {isSelect && isViewport('xs to md only') ? (
        <Select
          isBlock={isSelect}
          name={id}
          onChange={(event) => {
            onSelectCallback?.(event);
            handleOnChange(event);
          }}
          options={getSelectOptions(links)}
          theme={currentTheme}
        />
      ) : (
        <List
          items={getLinkItems(links, currentTheme)}
          listItemClassName={styles.item}
          theme={currentTheme}
        />
      )}
    </nav>
  );
});

export { SubNav };
