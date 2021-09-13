import React from 'react';
import cx from 'classnames';
import { useAddToCartContext, useVariantSelectContext } from '~/contexts';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { Button } from '~/components/Button';
import { Loading } from '~/components/Loading';
import { Hyperlink } from '~/components/Hyperlink';
import { useDelayedDisabled } from './AddToCartButton.utils';
import type { AddToCartButtonType } from './AddToCartButton.types';
import styles from './AddToCartButton.module.css';

const AddToCartButton: AddToCartButtonType = ({
  className,
  copy,
  dataTestRef = 'ADD_TO_CART',
  isEnabled = true,
  isFullWidth = true,
  theme = 'dark',
}) => {
  const addToCartContext = useAddToCartContext();
  const { selectedVariant } = useVariantSelectContext();
  const {
    errorMessage,
    hasError,
    isLoading,
    isUpdateSuccessful,
  } = addToCartContext;
  const shouldShowUpdateSuccessMessage = !isLoading && isUpdateSuccessful;
  const isDelayedDisabled = useDelayedDisabled(shouldShowUpdateSuccessMessage);
  const updateNotificationLabel = copy?.updateNotification;

  if (!selectedVariant) return null;

  const {
    alternateAction,
    isInStock,
    isSellable,
    price,
    sku,
  } = selectedVariant;

  const cartActionText = copy?.cartAction
    ? `${copy?.cartAction} — ${price}`
    : price;
  const postTaxPriceText = copy?.postTaxPrice ? ` ${copy?.postTaxPrice}` : '';
  const cartActionLabel = cartActionText + postTaxPriceText;

  const classSet = cx(
    styles.base,
    { [styles.fullWidth]: isFullWidth },
    className,
  );

  const handleOnClick = () => {
    const { dispatch, onClick } = addToCartContext;

    onClick(sku, dispatch);
  };

  if (!!alternateAction?.url && !!alternateAction?.label) {
    return (
      <Hyperlink
        className={classSet}
        dataTestRef={dataTestRef}
        hasTargetInNewWindow={alternateAction?.openInANewWindow}
        isAlternate={true}
        style={HYPERLINK_STYLE_TYPES.INTERNAL_NO_ICON_BUTTON_LINK}
        theme={theme}
        title={alternateAction?.label}
        url={alternateAction?.url}
      >
        {alternateAction?.label}
      </Hyperlink>
    );
  }

  if (hasError) {
    /** @TODO Handle errors thrown by handleOnClick */
    console.error('Add To Cart button updateError: ', errorMessage); // eslint-disable-line
  }

  const isButtonEnabled =
    !isLoading &&
    !!price &&
    !!sku &&
    isInStock &&
    !!sku &&
    isEnabled &&
    !hasError &&
    !isDelayedDisabled &&
    isSellable;

  const labelClassName = cx(
    styles.label,
    { [styles.hideLabel]: isLoading },
    { [styles.showSuccessMessage]: shouldShowUpdateSuccessMessage },
  );

  return (
    <Button
      className={classSet}
      dataTestRef={dataTestRef}
      isAlternate={true}
      isEnabled={isButtonEnabled}
      onClick={handleOnClick}
      theme={theme}
      title={isInStock ? cartActionLabel : copy?.outOfStock?.title}
    >
      {isLoading && (
        <Loading
          className={styles.loading}
          data-test-ref={`${dataTestRef}_UPDATING`}
          isLoading={true}
          theme={theme === 'dark' ? 'light' : 'dark'}
        />
      )}
      <span
        className={labelClassName}
        data-test-ref={
          shouldShowUpdateSuccessMessage ? `${dataTestRef}_SUCCESS` : undefined
        }
      >
        {shouldShowUpdateSuccessMessage ? (
          <span>{updateNotificationLabel}</span>
        ) : (
          <span> </span>
        )}
        <span>{isInStock ? cartActionLabel : copy?.outOfStock?.label}</span>
      </span>
    </Button>
  );
};

export { AddToCartButton };
