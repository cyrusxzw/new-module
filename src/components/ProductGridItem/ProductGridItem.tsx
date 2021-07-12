import React, { useRef, forwardRef } from 'react';
import cx from 'classnames';
import {
  useThemeContext,
  useProductDetailContext,
  useVariantSelectContext,
} from '~/contexts';
import { useImageTransition } from '~/customHooks';
import { getVariantRadioOptions } from '~/utils/product/index.ts';
import { AddToCartButton } from '~/components/AddToCartButton';
import { DefinitionList } from '~/components/DefinitionList/index.ts';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { P } from '~/components/Paragraph';
import { RadioGroup } from '~/components/RadioGroup/index.ts';
import { Transition } from '~/components/Transition';
import type { ProductGridItemProps } from './ProductGridItem.types';
import styles from './ProductGridItem.module.css';

const ProductGridItem = forwardRef<HTMLDivElement, ProductGridItemProps>(
  function ProductGridItemRef(
    { className, onCtaClick, copy, cta, id, info, theme, url },
    ref,
  ) {
    const currentTheme = useThemeContext(theme, 'dark');
    const imageRef = useRef();
    const { productDetail } = useProductDetailContext();

    const {
      selectedVariant,
      onVariantChange,
      variants,
    } = useVariantSelectContext();

    const [currentImage, isImageActive] = useImageTransition(
      selectedVariant?.image || productDetail.image,
      imageRef,
    );

    if (!productDetail) return null;

    const hasOneVariant = variants?.length === 1;
    const isBundle = variants?.length === 0;
    const { definitionList, productName, sku } = productDetail;
    const variantRadioOptions = getVariantRadioOptions(variants);
    const handleOnCtaClick = () => onCtaClick?.();

    const classSet = cx(styles.base, styles[currentTheme], className);

    const classInfoHolderSet = cx(styles.infoHolder, {
      [styles.hasOneVariant]: hasOneVariant || isBundle,
      [styles.hasManyVariants]: !hasOneVariant,
    });

    const classCtaLinkSet = cx(styles.addToCartButton, styles.ctaLink);

    const RADIO_GROUP_NAME = sku;
    const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_GRID_ITEM_VARIANT_SELECT';

    return (
      <div className={classSet} id={id} ref={ref}>
        <Transition isActive={isImageActive} type="fade">
          <Hyperlink
            className={styles.imageLink}
            onClick={handleOnCtaClick}
            url={url}
          >
            <Image
              altText={currentImage.altText}
              className={styles.image}
              ref={imageRef}
              sizes={currentImage.sizes}
            />
          </Hyperlink>
        </Transition>

        <Heading
          className={styles.productName}
          hasMediumWeightFont={true}
          level="5"
          size="xXSmall"
          theme={theme}
        >
          <Hyperlink className={styles.productNameLink} url={url}>
            {productName}
          </Hyperlink>
        </Heading>

        <div className={styles.infoVariantHolder}>
          <div className={classInfoHolderSet}>
            <P className={styles.info} theme={theme}>
              {info}
            </P>
          </div>

          {!hasOneVariant && !isBundle && (
            <RadioGroup
              className={styles.variants}
              dataTestRef={RADIO_GROUP_DATA_TEST_REF}
              name={RADIO_GROUP_NAME}
              onChange={(event) => onVariantChange(event, variants)}
              options={variantRadioOptions}
              theme={theme}
              value={selectedVariant?.sku}
            />
          )}
        </div>

        {!isBundle && (
          <AddToCartButton
            className={styles.addToCartButton}
            copy={copy.addToCart}
            dataTestRef="PRODUCT_GRID_ITEM"
            isFullWidth={true}
            theme={theme}
          />
        )}

        {cta && isBundle && (
          <Hyperlink
            className={classCtaLinkSet}
            isAlternate={false}
            onClick={handleOnCtaClick}
            theme={theme}
            title={cta?.text}
            url={cta?.url}
          >
            {cta?.text}
          </Hyperlink>
        )}

        <DefinitionList
          className={styles.definitionList}
          hasBottomBorder={true}
          items={definitionList}
          theme={theme}
        />
      </div>
    );
  },
);

export { ProductGridItem };
