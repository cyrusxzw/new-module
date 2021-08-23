import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMobileViewContext } from '../../MobileView.context';
import { ArticleCard } from '../ArticleCard';
import type { ArticleListType } from './ArticleList.types';
import styles from './ArticleList.module.css';

const ArticleList: ArticleListType = ({ className, theme, items }) => {
  const { isOpen } = useGlobalNavigationStateContext();
  const { activeCollectionId } = useMobileViewContext();
  const currentTheme = useThemeContext(theme, 'dark');

  if (!items?.length) return null;

  const isVisible = isOpen && activeCollectionId === 'top';
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
