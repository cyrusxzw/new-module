import React from 'react';
import cx from 'classnames';
import { useLoadMoreContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Loading } from '~/components/Loading';
import styles from './LoadMoreButton.module.css';
import type { LoadMoreButtonType } from './LoadMoreButton.types';

const LoadMoreButton: LoadMoreButtonType = ({
  className,
  copy = {
    actionLabel: 'Load More',
  },
  dataTestRef,
  isEnabled = true,
}) => {
  const loadMore = useLoadMoreContext();

  const classSet = cx(styles.base, className);

  const handleOnClick = () => {
    const { actionTypes, dispatch, onClick } = loadMore;

    onClick(dispatch, actionTypes);
  };

  const { hasError, isLoading } = loadMore;
  const actionLabel = `${copy.actionLabel}`;

  const labelClassName = cx(styles.label, { [styles.hideLabel]: isLoading });

  if (hasError) {
    /** @TODO Handle errors thrown by handleOnClick */
    console.error('updateError'); // eslint-disable-line
  }

  return (
    <Button
      className={classSet}
      dataTestRef={dataTestRef}
      isEnabled={!isLoading && isEnabled}
      onClick={handleOnClick}
      title={actionLabel}
    >
      {isLoading && (
        <Loading
          className={styles.loading}
          data-test-ref={`${dataTestRef}_LOADING`}
          isLoading={true}
          theme="dark"
        />
      )}
      <span className={labelClassName}>
        <span>{actionLabel}</span>
      </span>
    </Button>
  );
};

export { LoadMoreButton };
