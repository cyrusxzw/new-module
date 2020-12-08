import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HEADING } from '~/constants';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import { useImageTransition } from '~/customHooks';
import { getVariantRadioOptions } from '~/utils/product';
import AddToCartButton from '~/components/AddToCartButton';
import DefinitionList from '~/components/DefinitionList';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import RadioGroup from '~/components/RadioGroup';
import Transition from '~/components/Transition';
import { P } from '~/components/Paragraph';
import styles from './ProductGridItem.module.css';

const ProductGridItem = React.forwardRef(
  ({ className, copy, cta, id, info, theme, url }, ref) => {
    const imageRef = useRef();
    const {
      selectedVariant,
      onVariantChange,
      variants,
    } = useVariantSelectContext();
    const { productDetail } = useProductDetailContext();

    const hasOneVariant = variants?.length === 1;
    const isBundle = variants?.length === 0;

    const [currentImage, isImageActive] = useImageTransition(
      selectedVariant?.image || productDetail.image,
      imageRef,
    );

    if (!productDetail) return null;

    const { definitionList, productName, sku } = productDetail;

    const variantRadioOptions = getVariantRadioOptions(variants);
    const classSet = cx(styles.base, styles[theme], className);

    const classInfoHolderSet = cx(styles.infoHolder, {
      [styles.hasOneVariant]: hasOneVariant || isBundle,
      [styles.hasManyVariants]: !hasOneVariant,
    });

    const classCtaLinkSet = cx(styles.addToCartButton, styles.ctaLink);

    const RADIO_GROUP_NAME = sku;
    const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_GRID_ITEM_VARIANT_SELECT';

    return (
      <div className={classSet} id={id} ref={ref}>
        <Transition isActive={isImageActive} name="fade">
          <Hyperlink className={styles.imageLink} url={url}>
            <Image
              altText={currentImage.altText}
              className={styles.image}
              large={currentImage.sizes?.large}
              medium={currentImage.sizes?.medium}
              ref={imageRef}
              small={currentImage.sizes?.small}
            />
          </Hyperlink>
        </Transition>

        <Heading
          className={styles.productName}
          hasMediumWeightFont={true}
          level={HEADING.LEVEL.FIVE}
          size={HEADING.SIZE.X_X_SMALL}
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
              onChange={e => onVariantChange(e, variants)}
              options={variantRadioOptions}
              theme={theme}
              value={selectedVariant.sku}
            />
          )}
        </div>

        {!isBundle && (
          <AddToCartButton
            className={styles.addToCartButton}
            copy={copy.addToCart}
            isFullWidth={true}
            theme={theme}
          />
        )}

        {cta && isBundle && (
          <Hyperlink
            className={classCtaLinkSet}
            isAlternate={false}
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

ProductGridItem.propTypes = {
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
  }),
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  id: PropTypes.string,
  info: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  url: PropTypes.string,
};

ProductGridItem.defaultProps = {
  className: undefined,
  copy: {
    addToCart: {
      cartAction: undefined,
      updateNotification: undefined,
      outOfStock: {
        label: undefined,
        title: undefined,
      },
    },
  },
  cta: undefined,
  id: undefined,
  info: undefined,
  theme: 'dark',
  url: undefined,
};

export default ProductGridItem;
