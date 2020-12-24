import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useLoadMoreContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Loading } from '~/components/Loading';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ className, copy, dataTestRef, isEnabled }) => {
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

LoadMoreButton.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    actionLabel: PropTypes.string,
  }),
  dataTestRef: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
};

LoadMoreButton.defaultProps = {
  className: undefined,
  copy: {
    actionLabel: 'Load More',
  },
  dataTestRef: undefined,
  isEnabled: true,
};

export { LoadMoreButton };
