import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Hyperlink } from '~/components/Hyperlink';
import { ArticleList } from '../ArticleList';
import { Paragraph } from '~/components/Paragraph';
import { Icon } from '~/components/Icon';
import type { ArticleLayoutType } from './ArticleLayout.types';
import compositionStyles from '../../TabletView.module.css';

const ArticleLayout: ArticleLayoutType = ({ isVisible = true }) => {
  const { read } = useGlobalNavigationContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  return (
    <div className={compositionStyles[currentTheme]}>
      <Hyperlink
        className={cx(
          compositionStyles.collectionItemLabel,
          compositionStyles.ornamentalWrapper,
        )}
        url={read.items[0].url} /* see Clickable type for conditional url */
      >
        <Paragraph
          className={compositionStyles.label}
          isFlush={true}
          theme={currentTheme}
        >
          <span className={compositionStyles.ornamentalHover}>
            {read.topLevelCollectionLabel}
          </span>
          <Icon
            className={compositionStyles.rightArrow}
            height={14}
            name="rightArrow"
            theme={currentTheme}
            width={14}
          />
        </Paragraph>
      </Hyperlink>

      <small className={compositionStyles.articlesListHeading}>
        {read.articlesListHeading}
      </small>

      <ArticleList isVisible={isVisible} items={read.articles} />
    </div>
  );
};

export { ArticleLayout };
