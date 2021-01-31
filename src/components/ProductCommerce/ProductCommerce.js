import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HEADING, HYPERLINK_STYLE_TYPES, TRANSITIONS } from '~/constants';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import { useImageTransition } from '~/customHooks';
import { getVariantRadioOptions } from '~/utils/product';
import { AddToCartButton } from '~/components/AddToCartButton';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { LinkButtonGroup } from '~/components/LinkButtonGroup';
import { Loading } from '~/components/Loading';
import { RadioGroup } from '~/components/RadioGroup';
import { SectionHeading } from '~/components/SectionHeading';
import { Transition } from '~/components/Transition';

import styles from './ProductCommerce.module.css';

const ProductCommerce = React.forwardRef(
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
      isActive,
      onCtaClick,
    },
    ref,
  ) => {
    const imageRef = useRef();
    const {
      selectedVariant,
      onVariantChange,
      variants,
    } = useVariantSelectContext();

    const isBundle = variants?.length === 0;

    const { productDetail } = useProductDetailContext();
    const { sku } = productDetail;

    const [currentImage, isImageActive] = useImageTransition(
      selectedVariant?.image || productDetail.image,
      imageRef,
    );

    if (!isBundle && !selectedVariant) {
      return <Loading isLoading={true} />;
    }

    const variantRadioOptions = getVariantRadioOptions(variants);
    const classSet = cx(styles.base, className);
    const RADIO_GROUP_NAME = sku;
    const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_COMMERCE_VARIANT_SELECT';

    return (
      <div className={classSet} id={id} ref={ref}>
        <Transition isActive={isActive} type={TRANSITIONS.TYPE.SLOW_FADE}>
          <SectionHeading
            className={styles.header}
            eyebrow={eyebrow}
            heading={heading}
            isFlush={true}
            theme={theme}
          />
        </Transition>
        <Transition isActive={isActive} type={TRANSITIONS.TYPE.SLOW_FADE}>
          <div className={styles.description}>{description}</div>
        </Transition>
        <Transition isActive={isActive} type={TRANSITIONS.TYPE.SHIFT_IN_LEFT}>
          <div className={styles.imageWrapper}>
            <Transition isActive={isImageActive} type={TRANSITIONS.TYPE.FADE}>
              <Image
                altText={currentImage.altText}
                className={styles.image}
                large={currentImage.sizes?.large}
                medium={currentImage.sizes?.medium}
                ref={imageRef}
                small={currentImage.sizes?.small}
              />
            </Transition>
          </div>
        </Transition>
        {size && !isBundle && (
          <Transition isActive={isActive} type={TRANSITIONS.TYPE.SLOW_FADE}>
            <div className={styles.variantsWrapper}>
              <Heading
                hasMediumWeightFont={true}
                isFlush={true}
                level={HEADING.LEVEL.FOUR}
                size={HEADING.SIZE.X_X_SMALL}
                theme={theme}
              >
                {copy?.size}
              </Heading>
              <RadioGroup
                className={styles.variants}
                dataTestRef={RADIO_GROUP_DATA_TEST_REF}
                name={RADIO_GROUP_NAME}
                onChange={e => onVariantChange(e, variants)}
                options={variantRadioOptions}
                theme={theme}
                value={selectedVariant.sku}
              />
            </div>
          </Transition>
        )}

        <Transition isActive={isActive} type={TRANSITIONS.TYPE.SHIFT_IN_DOWN}>
          <LinkButtonGroup
            className={styles.linkButtonGroup}
            hasFitContent={false}
            isFlush={false}
            textAlign="center"
            theme={theme}
          >
            <AddToCartButton
              className={styles.addToCartButton}
              copy={copy.addToCart}
              isFullWidth={false}
              theme={theme}
            />
            {cta && (
              <Hyperlink
                className={styles.cta}
                isAlternate={false}
                onClick={() => onCtaClick()}
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

ProductCommerce.propTypes = {
  className: PropTypes.string,
  onCtaClick: PropTypes.func,
  copy: PropTypes.shape({
    addToCart: PropTypes.shape({
      cartAction: PropTypes.string,
      updateNotification: PropTypes.string,
      outOfStock: PropTypes.shape({
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    size: PropTypes.string,
  }),
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  description: PropTypes.element,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  isActive: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductCommerce.defaultProps = {
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
    size: undefined,
  },
  cta: undefined,
  description: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  onCtaClick: () => {},
  size: undefined,
  isActive: true,
  theme: 'dark',
};

export { ProductCommerce };
