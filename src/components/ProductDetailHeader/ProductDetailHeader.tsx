import React, { ReactElement } from 'react';
import cx from 'classnames';
import { useProductDetailContext, useThemeContext } from '~/contexts';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { Hidden } from '~/components/Hidden/index.ts';
import { ProductDetailBody } from './components/ProductDetailBody';
import { ProductDetailImage } from './components/ProductDetailImage';
import type { ProductDetailHeaderProps } from './ProductDetailHeader.types';
import styles from './ProductDetailHeader.module.css';

const ProductDetailHeader = ({
  breadcrumbs,
  className,
  copy,
  theme,
}: ProductDetailHeaderProps): ReactElement => {
  const currentTheme = useThemeContext(theme, 'dark');
  const { productDetail } = useProductDetailContext();
  const classSet = cx(styles.base, className);
  const imageClassSet = cx(styles.image, {
    [styles.largeImage]: productDetail.imageSize === 'Large',
  });

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Hidden isSmall={true}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              theme={currentTheme}
            />
          </Hidden>
          <ProductDetailBody
            copy={{
              addToCart: copy?.addToCart,
              size: copy?.size,
              upSellProductLabel: copy?.upSellProductLabel,
              flyinPanelHeading: copy?.flyinPanelHeading,
            }}
            theme={currentTheme}
          />
        </div>

        <div className={imageClassSet}>
          <Hidden isLarge={true} isMedium={true} isXLarge={true}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              theme={currentTheme}
            />
          </Hidden>
          <ProductDetailImage theme={currentTheme} />
        </div>
      </div>
    </div>
  );
};

export { ProductDetailHeader };
