import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useScript } from '~/customHooks';
import { Loading } from '~/components/Loading';
import styles from './BynderWidget.module.css';

const BynderWidget = ({ className, heading, id, theme }) => {
  const [isLoading, error] = useScript({
    src:
      'https://d8ejoa1fys2rk.cloudfront.net/bynder-embed/latest/bynder-embed.js',
    id: 'bynder-widgets-js',
    dataSet: {
      accountUrl: 'assetportal.aesop.com',
      language: 'en',
    },
  });

  if (error) return null; /** @TODO failed script load error */

  const classSet = cx(styles.base, styles[theme], className);

  return (
    <article className={classSet} id={id}>
      <h3 className={styles.heading}>{heading}</h3>
      <Loading isLoading={isLoading} />
      <div
        data-bynder-widget="media-list"
        data-collection-id={id}
        data-rows="3"
      />
    </article>
  );
};

BynderWidget.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

BynderWidget.defaultProps = {
  className: undefined,
  heading: undefined,
  id: undefined,
  theme: 'dark',
};

export { BynderWidget };
