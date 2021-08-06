import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { ArticleCard } from '../ArticleCard';
import type { ArticleListType } from './ArticleList.types';
import styles from './ArticleList.module.css';

const ArticleList: ArticleListType = ({
  className,
  isVisible = true,
  theme,
  items,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!items?.length) return null;

  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <div className={classSet}>
      <aside>
        {items?.map((item) => (
          <ArticleCard {...item} isVisible={isVisible} key={item.id} />
        ))}
      </aside>
    </div>
  );
};

export { ArticleList };
