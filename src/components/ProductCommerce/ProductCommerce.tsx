import React, { forwardRef, useRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import { useImageTransition } from '~/customHooks';
import { getVariantRadioOptions } from '~/utils/product';
import { AddToCartButton } from '~/components/AddToCartButton';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { LinkButtonGroup } from '~/components/LinkButtonGroup/index.ts';
import { Loading } from '~/components/Loading';
import { RadioGroup } from '~/components/RadioGroup/index.ts';
import { SectionHeading } from '~/components/SectionHeading/index.ts';
import { Transition } from '~/components/Transition';
import type { ProductCommerceProps } from './ProductCommerce.types';
import styles from './ProductCommerce.module.css';

const ProductCommerce = forwardRef<HTMLDivElement, ProductCommerceProps>(
  (
    {
      className,
      copy,
      cta,
      description,
      eyebrow,
      heading,
      id,
      size,
      theme,
      isActive = true,
      onCtaClick,
    },
    ref,
  ) => {
    const imageRef = useRef();
    const currentTheme = useThemeContext(theme, 'dark');
    const {
      selectedVariant,
      onVariantChange,
      variants,
    } = useVariantSelectContext();
    const { productDetail } = useProductDetailContext();
    const [currentImage, isImageActive] = useImageTransition(
      selectedVariant?.image || productDetail.image,
      imageRef,
    );

    const isBundle = variants?.length === 0;

    if (!isBundle && !selectedVariant) {
      return <Loading isLoading={true} />;
    }

    const { sku } = productDetail;
    const handleOnCtaClick = () => onCtaClick();
    const handleOnRadioGroupChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => onVariantChange(event, variants);
    const variantRadioOptions = getVariantRadioOptions(variants);
    const classSet = cx(styles.base, className);
    const RADIO_GROUP_NAME = sku;
    const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_COMMERCE_VARIANT_SELECT';

    return (
      <div className={classSet} id={id} ref={ref}>
        <Transition isActive={isActive} type="slowFade">
          <SectionHeading
            className={styles.header}
            eyebrow={eyebrow}
            heading={heading}
            isFlush={true}
            theme={currentTheme}
          />
        </Transition>
        <Transition isActive={isActive} type="slowFade">
          <div className={styles.description}>{description}</div>
        </Transition>
        <Transition isActive={isActive} type="shiftInLeft">
          <div className={styles.imageWrapper}>
            <Transition isActive={isImageActive} type="fade">
              <Image
                altText={currentImage.altText}
                className={styles.image}
                ref={imageRef}
                sizes={currentImage.sizes}
              />
            </Transition>
          </div>
        </Transition>
        {size && !isBundle && (
          <Transition isActive={isActive} type="slowFade">
            <div className={styles.variantsWrapper}>
              <Heading
                hasMediumWeightFont={true}
                isFlush={true}
                level="4"
                size="xXSmall"
                theme={currentTheme}
              >
                {copy?.size}
              </Heading>
              <RadioGroup
                className={styles.variants}
                dataTestRef={RADIO_GROUP_DATA_TEST_REF}
                name={RADIO_GROUP_NAME}
                onChange={handleOnRadioGroupChange}
                options={variantRadioOptions}
                theme={currentTheme}
                value={selectedVariant.sku}
              />
            </div>
          </Transition>
        )}

        <Transition isActive={isActive} type="shiftInDown">
          <LinkButtonGroup
            className={styles.linkButtonGroup}
            hasFitContent={false}
            isFlush={false}
            textAlign="center"
            theme={currentTheme}
          >
            <AddToCartButton
              className={styles.addToCartButton}
              copy={copy?.addToCart}
              dataTestRef="product-commerce"
              isFullWidth={false}
              theme={currentTheme}
            />
            {cta && (
              <Hyperlink
                className={styles.cta}
                isAlternate={false}
                onClick={handleOnCtaClick}
                style={HYPERLINK_STYLE_TYPES.INTERNAL_BUTTON_LINK}
                url={cta.url}
              >
                {cta.text}
              </Hyperlink>
            )}
          </LinkButtonGroup>
        </Transition>
      </div>
    );
  },
);

export { ProductCommerce };
