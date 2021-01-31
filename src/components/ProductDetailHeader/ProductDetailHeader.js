import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext, useThemeContext } from '~/contexts';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { Hidden } from '~/components/Hidden';
import { ProductDetailBody } from './components/ProductDetailBody';
import { ProductDetailImage } from './components/ProductDetailImage';
import styles from './ProductDetailHeader.module.css';

const ProductDetailHeader = ({ breadcrumbs, className, copy, theme }) => {
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
          <ProductDetailImage
            copy={{
              cart: productDetail?.cartDisclaimer,
            }}
            theme={currentTheme}
          />
        </div>
      </div>
    </div>
  );
};

ProductDetailHeader.propTypes = {
  breadcrumbs: PropTypes.shape({
    className: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    theme: PropTypes.oneOf(['dark', 'light']),
  }),
  className: PropTypes.string,
  copy: PropTypes.shape({
    addToCart: PropTypes.shape({
      cartAction: PropTypes.string,
      updateNotification: PropTypes.string,
      outOfStock: PropTypes.shape({
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    size: PropTypes.shape({
      singular: PropTypes.string,
      plural: PropTypes.string,
    }),
    upSellProductLabel: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailHeader.defaultProps = {
  breadcrumbs: {
    className: undefined,
    items: undefined,
    theme: 'dark',
  },
  className: undefined,
  copy: {
    addToCart: undefined,
    size: {
      singular: undefined,
      plural: undefined,
    },
    upSellProductLabel: undefined,
  },
  theme: undefined,
};

export { ProductDetailHeader };
