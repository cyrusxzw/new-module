import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Loading from '~/components/elements/Loading';
import PROP_TYPES from './AddToCartButton.prop-types';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({
  className,
  dataTestRef,
  disabled = false,
  handleOnClick,
  name,
  price,
  sku,
}) => {
  const classSet = cx(styles.base, className);

  // TODO - need contentful translations for these
  const cartActionCopy = `Add to your cart — ${price}`;
  const notificationCopy = `${name} added to your cart`;
  const successCopy = `Added to your cart`;

  // @TODO Mock const
  const createCartEntry = () => {};
  const data = {};
  const error = {};
  const loading = false;

  const updateSuccessful = !loading && data && data.createCartEntry;
  const labelClassName = cx(styles.label, {
    [styles.showSuccessMessage]: updateSuccessful,
  });

  return (
    <Button
      alternate={true}
      className={classSet}
      dataTestRef={dataTestRef}
      disabled={loading || disabled}
      onClick={handleOnClick}
      title="Add to cart button"
    >
      {loading ? (
        <Loading
          className={styles.loading}
          data-test-ref={`${dataTestRef}_UPDATING`}
          isLight={true}
          isLoading={true}
        />
      ) : (
        <span
          className={labelClassName}
          data-test-ref={
            updateSuccessful ? `${dataTestRef}_SUCCESS` : undefined
          }
        >
          <span>{successCopy}</span>
          <span>{cartActionCopy}</span>
        </span>
      )}
    </Button>
  );
};

AddToCartButton.propTypes = PROP_TYPES;

export default AddToCartButton;