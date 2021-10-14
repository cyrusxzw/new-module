import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { ArticleCard } from '../ArticleCard';
import type { ArticleListType } from './ArticleList.types';
import styles from './ArticleList.module.css';

const ArticleList: ArticleListType = ({ className, theme, items }) => {
  const { isOpen, activeCollectionId } = useGlobalNavigationStateContext();
  const currentTheme = useThemeContext(theme, 'dark');

  if (!items?.length) return null;

  const isVisible = isOpen && activeCollectionId === 'top';

  const articleScrollSet = styles.articleScroll;

  const classSet = cx(
    styles.base,
    { [styles.hidden]: activeCollectionId !== 'top' },
    styles[currentTheme],
    className,
  );

  return (
    <div className={classSet}>
      <div className={styles.cardHeading}>The Athenaeum</div>
      <aside aria-label="navigation read articles" className={articleScrollSet}>
        {items?.map((item) => (
          <ArticleCard {...item} isVisible={isVisible} key={item.id} />
        ))}
      </aside>
    </div>
  );
};

export { ArticleList };
