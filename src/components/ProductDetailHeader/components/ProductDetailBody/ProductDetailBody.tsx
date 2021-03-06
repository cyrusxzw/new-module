import React, { useState, useRef } from 'react';
import cx from 'classnames';
import {
  useProductDetailContext,
  useThemeContext,
  useVariantSelectContext,
} from '~/contexts';
import { useWindowHasResized } from '~/customHooks/useWindowHasResized';
import { useExecuteOnImpression } from '~/customHooks';
import { getVariantRadioOptions } from '~/utils/product';
import { isViewport } from '~/utils/viewport';
import { AddToCartButton } from '~/components/AddToCartButton';
import { Button } from '~/components/Button';
import { DefinitionList } from '~/components/DefinitionList';
import { FlyinPanel } from '~/components/FlyinPanel';
import { Heading } from '~/components/Heading';
import { Hidden } from '~/components/Hidden';
import { Icon } from '~/components/Icon';
import { Paragraph } from '~/components/Paragraph';
import { ProductExtract } from '~/components/ProductExtract';
import { RadioGroup } from '~/components/RadioGroup';
import { Transition } from '~/components/Transition';
import type { ProductDetailBodyType } from './ProductDetailBody.types';
import styles from './ProductDetailBody.module.css';

const ProductDetailBody: ProductDetailBodyType = ({
  className,
  copy,
  theme,
  onFlyinOpenCloseClick,
  onUpsellScrollIntoView,
  onUpsellClick,
  paymentWidget,
  backInStockNotification,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const [isFlyinPanelVisible, setIsFlyinPanelVisible] = useState(false);
  const upsellRef = useRef(null);
  const { productDetail } = useProductDetailContext();
  const handleOnUpsellScrollIntoView = () => {
    if (onUpsellScrollIntoView) {
      onUpsellScrollIntoView();
    }
  };

  useExecuteOnImpression(upsellRef, handleOnUpsellScrollIntoView, {
    threshold: 0.2,
    isExecutableOnReEntry: false,
  });

  const {
    selectedVariant,
    onVariantChange,
    variants,
  } = useVariantSelectContext();

  useWindowHasResized();

  if (!productDetail) return null;

  const {
    definitionList,
    flyinPanel,
    productName,
    description,
    upSellProduct,
  } = productDetail;

  const variantRadioOptions = getVariantRadioOptions(variants);
  const handleOnVariantChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onVariantChange(e, variants);
  const handleOnFlyinPanelTriggerClick = () => {
    onFlyinOpenCloseClick('open');
    setIsFlyinPanelVisible(true);
  };
  const handleOnCloseClick = () => {
    onFlyinOpenCloseClick('close');
    setIsFlyinPanelVisible(false);
  };
  const classSet = cx(styles.base, styles[currentTheme], className);

  /**
   * @TODO There is currently no isActiveButton in the stylesheet
   */
  const flyinPanelTriggerClassSet = styles.flyinPanelTrigger;
  // const flyinPanelTriggerClassSet = cx(styles.flyinPanelTrigger, {
  //   [styles.isActiveButton]: isFlyinPanelVisible,
  // });

  const paymentWidgetClassSet = cx(
    styles.paymentWidget,
    {
      [styles.hasBottomBorder]:
        (!!upSellProduct && isViewport('lg')) ||
        (!!selectedVariant?.cartDisclaimer && isViewport('xs to sm only')),
    },
    className,
  );

  const RADIO_GROUP_NAME = 'sku';
  const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_DETAIL_VARIANT_SELECT';
  const PRODUCT_UP_SELL = 'PRODUCT_UP_SELL';

  const flyinPanelItem = (item) => ({
    term: (
      <>
        <span>{item.term}</span>
        {flyinPanel && (
          <Button
            className={flyinPanelTriggerClassSet}
            isInline={true}
            onClick={handleOnFlyinPanelTriggerClick}
            theme={currentTheme}
            title={item.term}
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
    description: item.description,
    id: item.id,
  });

  const definitionListItems = definitionList.map((item) => {
    const { isExpandable, ...props } = item;
    return !isExpandable ? props : flyinPanelItem(props);
  });

  const variantsHeading =
    variants.length > 1 ? copy?.size?.plural : copy?.size?.singular;

  const shouldDefinintionHaveBottomBorder =
    (!!variantRadioOptions.length && isViewport('lg')) ||
    !!(isViewport('xs to md only') && upSellProduct);

  return (
    <div className={classSet}>
      <div className={styles.content}>
        <Hidden when={['md']}>
          <header className={styles.header}>
            <Transition isActiveOnMount={true} type="fade">
              <Heading
                className={styles.productName}
                isFlush={true}
                level="1"
                size="xLarge"
                theme={currentTheme}
              >
                {productName}
              </Heading>
            </Transition>
          </header>
        </Hidden>

        {!!description && (
          <Hidden when={['md']}>
            <div className={styles.description}>
              <Transition isActiveOnMount={true} type="fade">
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
          {!!variantRadioOptions.length && (
            <Transition isActiveOnMount={true} type="shiftInDown">
              <Heading
                hasMediumWeightFont={true}
                isFlush={true}
                level="4"
                size="xXSmall"
                theme={currentTheme}
              >
                {variantsHeading}
              </Heading>
            </Transition>
          )}
          <Transition isActiveOnMount={true} type="shiftInDown">
            <RadioGroup
              className={styles.variants}
              dataTestRef={RADIO_GROUP_DATA_TEST_REF}
              name={RADIO_GROUP_NAME}
              onChange={handleOnVariantChange}
              options={variantRadioOptions}
              theme={currentTheme}
              value={selectedVariant?.sku}
            />
          </Transition>
          <AddToCartButton
            copy={copy?.addToCart}
            dataTestRef="ADD_TO_CART"
            theme={currentTheme}
          />
          {backInStockNotification && <div>{backInStockNotification}</div>}
          {paymentWidget && (
            <div className={paymentWidgetClassSet}>{paymentWidget}</div>
          )}
        </div>

        <Hidden when={['md', 'lg', 'xl']}>
          {!!selectedVariant?.cartDisclaimer && (
            <div className={styles.cartDisclaimer}>
              <span>{selectedVariant.cartDisclaimer}</span>
            </div>
          )}
        </Hidden>

        <div className={styles.details}>
          <Transition isActiveOnMount={true} type="shiftInDown">
            <DefinitionList
              className={styles.definitionList}
              hasBottomBorder={shouldDefinintionHaveBottomBorder}
              items={definitionListItems}
              theme={currentTheme}
            />
          </Transition>
        </div>

        {!!upSellProduct && (
          <div className={styles.upSell} ref={upsellRef}>
            <ProductExtract
              dataTestRef={PRODUCT_UP_SELL}
              hasBottomBorder={false}
              hasTopMargin={false}
              imageSize="medium"
              itemNum={1}
              onHyperlinkClick={onUpsellClick}
              product={upSellProduct}
              theme={currentTheme}
              works={copy.upSellProductLabel}
            />
          </div>
        )}
      </div>

      <Hidden when={['sm', 'lg', 'xl']}>
        <div className={styles.mediumSidebar}>
          <header>
            <Heading
              className={styles.mediumProductName}
              level="1"
              size="xLarge"
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
            {!!selectedVariant?.cartDisclaimer && (
              <div className={styles.cartDisclaimer}>
                <span>{selectedVariant.cartDisclaimer}</span>
              </div>
            )}
          </header>
        </div>
      </Hidden>

      {!!flyinPanel && (
        <FlyinPanel
          heading={copy.flyinPanelHeading}
          isVisible={isFlyinPanelVisible}
          onClose={handleOnCloseClick}
        >
          {flyinPanel}
        </FlyinPanel>
      )}
    </div>
  );
};

export { ProductDetailBody };
