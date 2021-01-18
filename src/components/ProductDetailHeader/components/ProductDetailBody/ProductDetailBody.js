import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HEADING, TRANSITIONS } from '~/constants';
import {
  useProductDetailContext,
  useThemeContext,
  useVariantSelectContext,
} from '~/contexts';
import { getVariantRadioOptions } from '~/utils/product';
import { AddToCartButton } from '~/components/AddToCartButton';
import { Button } from '~/components/Button';
import { DefinitionList } from '~/components/DefinitionList';
import { FlyinPanel } from '~/components/FlyinPanel';
import { Heading } from '~/components/Heading';
import { Hidden } from '~/components/Hidden';
import { Icon } from '~/components/Icon';
import { Paragraph } from '~/components/Paragraph';
import { ProductExtract } from '~/components/ProductExtract/ProductExtract.js';
import { RadioGroup } from '~/components/RadioGroup';
import { Transition } from '~/components/Transition';
import styles from './ProductDetailBody.module.css';

const ProductDetailBody = ({ className, copy, theme }) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const [isFlyinPanelVisible, setIsFlyinPanelVisible] = useState(false);
  const { productDetail } = useProductDetailContext();
  const {
    selectedVariant,
    onVariantChange,
    variants,
  } = useVariantSelectContext();

  if (!productDetail) return null;

  const {
    definitionList,
    ingredients,
    keyIngredient,
    productName,
    description,
    cartDisclaimer,
    upSellProduct,
  } = productDetail;

  const variantRadioOptions = getVariantRadioOptions(variants);
  const handleOnVariantChange = e => onVariantChange(e, variants);
  const handleOnIngredientsTriggerClick = () => setIsFlyinPanelVisible(true);
  const handleOnCloseClick = () => setIsFlyinPanelVisible(false);
  const classSet = cx(styles.base, styles[currentTheme], className);
  const ingredientsTriggerClassSet = cx(styles.ingredientsTrigger, {
    [styles.isActiveButton]: isFlyinPanelVisible,
  });
  const RADIO_GROUP_NAME = 'sku';
  const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_DETAIL_VARIANT_SELECT';
  const PRODUCT_UP_SELL = 'PRODUCT_UP_SELL';

  const ingredientsItem = {
    term: (
      <>
        <span>{copy.ingredients.label}</span>
        {ingredients && (
          <Button
            className={ingredientsTriggerClassSet}
            isInline={true}
            onClick={handleOnIngredientsTriggerClick}
            theme={currentTheme}
            title={copy.ingredients.title}
          >
            <Icon
              height={22}
              isActive={isFlyinPanelVisible}
              name="plusAndCloseWithCircle"
              theme={currentTheme}
              width={22}
            />
          </Button>
        )}
      </>
    ),
    description: keyIngredient,
    id: 'ingredients',
  };

  const definitionListItems = [
    ...definitionList,
    copy.ingredients.label ? ingredientsItem : {},
  ];

  return (
    <div className={classSet}>
      <div className={styles.content}>
        <Hidden isMedium={true}>
          <header className={styles.header}>
            <Transition isActiveOnMount={true} type={TRANSITIONS.TYPE.FADE}>
              <Heading
                className={styles.productName}
                isFlush={true}
                level={HEADING.LEVEL.ONE}
                size={HEADING.SIZE.X_LARGE}
                theme={currentTheme}
              >
                {productName}
              </Heading>
            </Transition>
          </header>
        </Hidden>

        {description && (
          <Hidden isMedium={true}>
            <div className={styles.description}>
              <Transition isActiveOnMount={true} type={TRANSITIONS.TYPE.FADE}>
                <Paragraph
                  className={styles.descriptionCopy}
                  isFlush={true}
                  theme={currentTheme}
                >
                  {description}
                </Paragraph>
              </Transition>
            </div>
          </Hidden>
        )}

        <div className={styles.purchase}>
          <Transition
            isActiveOnMount={true}
            type={TRANSITIONS.TYPE.SHIFT_IN_DOWN}
          >
            <Heading
              hasMediumWeightFont={true}
              isFlush={true}
              level={HEADING.LEVEL.FOUR}
              size={HEADING.SIZE.X_X_SMALL}
              theme={currentTheme}
            >
              {variants.length > 1 ? copy?.size?.plural : copy?.size?.singular}
            </Heading>
          </Transition>
          <Transition
            isActiveOnMount={true}
            type={TRANSITIONS.TYPE.SHIFT_IN_DOWN}
          >
            <RadioGroup
              className={styles.variants}
              dataTestRef={RADIO_GROUP_DATA_TEST_REF}
              name={RADIO_GROUP_NAME}
              onChange={handleOnVariantChange}
              options={variantRadioOptions}
              theme={currentTheme}
              value={selectedVariant.sku}
            />
          </Transition>

          <AddToCartButton copy={copy?.addToCart} theme={currentTheme} />
        </div>

        <Hidden isLarge={true} isMedium={true} isXLarge={true}>
          <div className={styles.cartDisclaimer}>{cartDisclaimer}</div>
        </Hidden>

        <div className={styles.details}>
          <Transition
            isActiveOnMount={true}
            type={TRANSITIONS.TYPE.SHIFT_IN_DOWN}
          >
            <DefinitionList
              className={styles.definitionList}
              hasBottomBorder={true}
              items={definitionListItems}
              theme={currentTheme}
            />
          </Transition>
        </div>

        {upSellProduct && (
          <div className={styles.upSell}>
            <ProductExtract
              dataTestRef={PRODUCT_UP_SELL}
              hasBottomBorder={false}
              hasTopMargin={false}
              imageSize="medium"
              itemNum={1}
              product={upSellProduct}
              theme={currentTheme}
              works={copy.upSellProductLabel}
            />
          </div>
        )}
      </div>

      <Hidden isLarge={true} isSmall={true} isXLarge={true}>
        <div className={styles.mediumSidebar}>
          <header className={styles.mediumHeader}>
            <Heading
              className={styles.mediumProductName}
              level={HEADING.LEVEL.ONE}
              size={HEADING.SIZE.X_LARGE}
              theme={currentTheme}
            >
              {productName}
            </Heading>
            <Paragraph
              className={styles.mediumDescriptionCopy}
              theme={currentTheme}
            >
              {description}
            </Paragraph>
            <div className={styles.cartDisclaimer}>{cartDisclaimer}</div>
          </header>
        </div>
      </Hidden>

      {ingredients && (
        <FlyinPanel
          heading={copy.ingredients.heading}
          isVisible={isFlyinPanelVisible}
          onClose={handleOnCloseClick}
        >
          {ingredients}
        </FlyinPanel>
      )}
    </div>
  );
};

ProductDetailBody.propTypes = {
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
    ingredients: PropTypes.shape({
      heading: PropTypes.string,
      label: PropTypes.string,
      title: PropTypes.string,
    }),
    upSellProductLabel: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailBody.defaultProps = {
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
    size: {
      singular: undefined,
      plural: undefined,
    },
    ingredients: {
      heading: undefined,
      label: undefined,
      title: undefined,
    },
    upSellProductLabel: undefined,
  },
  theme: undefined,
};

export { ProductDetailBody };
