import React, { forwardRef, LegacyRef } from 'react';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { useThemeContext } from '~/contexts';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import type { ProductExtractProps } from './ProductExtract.types';
import styles from './ProductExtract.module.css';

const ProductExtract = forwardRef<HTMLDivElement, ProductExtractProps>(
  function ProductExtractRef(
    {
      className,
      dataTestRef,
      hasBottomBorder = false,
      hasTopMargin = true,
      imageSize = 'small',
      isVisible = true,
      itemNum = 1,
      product,
      theme,
      works,
    },
    ref: LegacyRef<HTMLDivElement>,
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
          condition={!!product?.url}
          wrapper={(children) => (
            <Hyperlink
              className={linkClassSet}
              dataTestRef={dataTestRef}
              theme={currentTheme}
              title={product?.name}
              url={product?.url}
            >
              {children}
            </Hyperlink>
          )}
        >
          <div className={flexClassSet}>
            <div className={productDescriptionClassSet}>
              <Heading
                className={headingClassSet}
                level="4"
                size="xXSmall"
                theme={currentTheme}
              >
                <span>{works}</span>
              </Heading>
              <div className={productNameClassSet}>
                <div>
                  <span>{product?.name}</span>
                </div>
              </div>
            </div>
            <div className={productImageClassSet}>
              <Image
                altText={product?.image?.altText}
                sizes={product?.image?.sizes}
              />
            </div>
          </div>
        </ConditionalWrapper>
      </div>
    );
  },
);

export { ProductExtract };
