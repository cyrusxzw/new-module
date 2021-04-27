import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';
import { HEADING } from '~/constants';
import { useThemeContext } from '~/contexts';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import styles from './ProductExtract.module.css';

const ProductExtract = forwardRef(function ProductExtractRef(
  {
    className,
    dataTestRef,
    hasBottomBorder,
    hasTopMargin,
    isVisible,
    imageSize,
    itemNum,
    product,
    theme,
    works,
  },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(
    styles.base,
    styles[currentTheme],
    {
      [styles.slideIn]: isVisible,
      [styles.hasTopMargin]: hasTopMargin,
    },
    styles[`item${itemNum}`],
    className,
  );

  const linkClassSet = cx(styles.link);

  const flexClassSet = cx(styles.flexContainer, styles.delayAnimation, {
    [styles.hasBottomBorder]: hasBottomBorder,
    [styles.slideIn]: isVisible,
  });

  const headingClassSet = cx(
    styles.heading,
    styles.delayAnimation,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const productDescriptionClassSet = cx(styles.productDescription);

  const productNameClassSet = cx(
    styles.productName,
    styles.delayAnimation,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const productImageClassSet = cx(
    styles.productImage,
    styles.delayAnimation,
    {
      [styles.slideIn]: isVisible,
    },
    styles[imageSize],
    className,
  );

  if (!product || isEmpty(product)) {
    return null;
  }

  return (
    <div
      className={classSet}
      data-testid="data-testid-ProductExtract"
      ref={ref}
    >
      <ConditionalWrapper
        condition={!!product.url}
        wrapper={children => (
          <Hyperlink
            className={linkClassSet}
            dataTestRef={dataTestRef}
            theme={currentTheme}
            title={product.name}
            url={product.url}
          >
            {children}
          </Hyperlink>
        )}
      >
        <div className={flexClassSet}>
          <div className={productDescriptionClassSet}>
            <Heading
              className={headingClassSet}
              level={HEADING.LEVEL.FOUR}
              size={HEADING.SIZE.X_X_SMALL}
              theme={currentTheme}
            >
              <span>{works}</span>
            </Heading>
            <div className={productNameClassSet}>
              <div>
                <span>{product.name}</span>
              </div>
            </div>
          </div>
          <div className={productImageClassSet}>
            <Image
              altText={product.image.altText}
              sizes={product.image.sizes}
            />
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  );
});

ProductExtract.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  hasBottomBorder: PropTypes.bool,
  hasTopMargin: PropTypes.bool,
  imageSize: PropTypes.oneOf(['small', 'medium']),
  isVisible: PropTypes.bool,
  itemNum: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
  works: PropTypes.string,
};

ProductExtract.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  hasBottomBorder: false,
  hasTopMargin: true,
  imageSize: 'small',
  isVisible: true,
  itemNum: 1,
  product: {
    image: {
      altText: undefined,
    },
    name: undefined,
  },
  theme: undefined,
  works: undefined,
};

export { ProductExtract };
