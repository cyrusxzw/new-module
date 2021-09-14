import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { ArticleCard } from '../ArticleCard';
import type { ArticleListType } from './ArticleList.types';
import styles from './ArticleList.module.css';

const ArticleList: ArticleListType = ({
  className,
  isVisible,
  items,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!items?.length) return null;

  const classSet = cx(
    styles.base,
    { [styles.hidden]: !isVisible },
    styles[currentTheme],
    className,
  );

  return (
    <div className={classSet}>
      <aside aria-label="navigation read articles">
        {items.map((item) => (
          <ArticleCard {...item} isVisible={isVisible} key={item.id} />
        ))}
      </aside>
    </div>
  );
};

export { ArticleList };
