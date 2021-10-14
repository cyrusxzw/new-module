import React from 'react';
import cx from 'classnames';
import {
  useProductDetailContext,
  useThemeContext,
  useVariantSelectContext,
} from '~/contexts';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { Hidden } from '~/components/Hidden';
import { ProductDetailBody } from './components/ProductDetailBody';
import { ProductDetailImage } from './components/ProductDetailImage';
import type { BreadcrumbItem } from '~/components/Breadcrumbs/Breadcrumbs.types';
import type { ProductDetailHeaderType } from './ProductDetailHeader.types';
import styles from './ProductDetailHeader.module.css';

const ProductDetailHeader: ProductDetailHeaderType = ({
  breadcrumbs,
  className,
  copy,
  onBreadcrumbClick,
  onFlyinOpenCloseClick,
  onUpsellScrollIntoView,
  onUpsellClick,
  paymentWidget,
  backInStockNotificationBtn,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const { productDetail } = useProductDetailContext();
  const { selectedVariant } = useVariantSelectContext();
  const classSet = cx(styles.base, className);
  const imageClassSet = cx(styles.image, {
    [styles.largeImage]: productDetail.imageSize === 'Large',
  });
  const handleOnBreadcrumbClick = (item: BreadcrumbItem) =>
    onBreadcrumbClick(item, selectedVariant);
  const handleOnFlyinOpenCloseClick = (flyinState) =>
    onFlyinOpenCloseClick(flyinState, selectedVariant);
  const handleOnUpsellScrollIntoView = () =>
    onUpsellScrollIntoView && onUpsellScrollIntoView();

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <div
          className={styles.content}
          data-testid="data-testid-ProductDetailHeader-content"
        >
          <Hidden when={['sm']}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              onHyperlinkClick={handleOnBreadcrumbClick}
              theme={currentTheme}
            />
          </Hidden>
          <ProductDetailBody
            backInStockNotificationBtn={backInStockNotificationBtn}
            copy={{
              addToCart: copy?.addToCart,
              size: copy?.size,
              upSellProductLabel: copy?.upSellProductLabel,
              flyinPanelHeading: copy?.flyinPanelHeading,
            }}
            onFlyinOpenCloseClick={handleOnFlyinOpenCloseClick}
            onUpsellClick={onUpsellClick}
            onUpsellScrollIntoView={handleOnUpsellScrollIntoView}
            paymentWidget={paymentWidget}
            theme={currentTheme}
          />
        </div>

        <div
          className={imageClassSet}
          data-testid="data-testid-ProductDetailHeader-image"
        >
          <Hidden when={['md', 'lg', 'xl']}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              onHyperlinkClick={handleOnBreadcrumbClick}
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
