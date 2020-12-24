import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAddToCartContext, useVariantSelectContext } from '~/contexts';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { Button } from '~/components/Button';
import { Loading } from '~/components/Loading';
import { Hyperlink } from '~/components/Hyperlink';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({
  className,
  copy,
  dataTestRef,
  isEnabled,
  isFullWidth,
  theme,
}) => {
  const addToCartContext = useAddToCartContext();
  const { selectedVariant } = useVariantSelectContext();

  if (!selectedVariant) return null;

  const {
    alternateAction,
    isInStock,
    isSellable,
    price,
    sku,
  } = selectedVariant;

  const classSet = cx(
    styles.base,
    { [styles.fullWidth]: isFullWidth },
    className,
  );

  const handleOnClick = () => {
    const { actionTypes, dispatch, onClick } = addToCartContext;

    onClick(sku, dispatch, actionTypes);
  };

  if (!!alternateAction?.url && !!alternateAction?.label) {
    return (
      <Hyperlink
        className={classSet}
        dataTestRef={dataTestRef}
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

  const {
    errorMessage,
    hasError,
    isLoading,
    isUpdateSuccessful,
  } = addToCartContext;

  if (hasError) {
    /** @TODO Handle errors thrown by handleOnClick */
    console.error('Add To Cart button updateError: ', errorMessage); // eslint-disable-line
  }

  const cartActionLabel = `${copy.cartAction} — ${price}`;
  const updateNotificationLabel = copy.updateNotification;
  const shouldShowUpdateSuccessMessage = !isLoading && isUpdateSuccessful;

  const isButtonEnabled =
    !isLoading &&
    !!price &&
    !!sku &&
    isInStock &&
    !!sku &&
    isEnabled &&
    !hasError &&
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
      title={isInStock ? cartActionLabel : copy.outOfStock?.title}
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
        <span>{updateNotificationLabel}</span>
        <span>{isInStock ? cartActionLabel : copy.outOfStock?.label}</span>
      </span>
    </Button>
  );
};

AddToCartButton.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    cartAction: PropTypes.string,
    updateNotification: PropTypes.string,
    outOfStock: PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  dataTestRef: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

AddToCartButton.defaultProps = {
  className: undefined,
  copy: {
    cartAction: undefined,
    updateNotification: undefined,
    outOfStock: {
      label: undefined,
      title: undefined,
    },
  },
  dataTestRef: 'ADD_TO_CART',
  isEnabled: true,
  isFullWidth: true,
  theme: 'dark',
};

export { AddToCartButton };
