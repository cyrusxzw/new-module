import React, { FC } from 'react';
import cx from 'classnames';
import { useScript } from '~/customHooks';
import { Heading } from '~/components/Heading';
import { Loading } from '~/components/Loading';
import type { BynderWidgetProps } from './BynderWidget.types';
import styles from './BynderWidget.module.css';

const BynderWidget: FC<BynderWidgetProps> = ({
  className,
  heading,
  id,
  theme = 'dark',
}) => {
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
      <Heading className={styles.heading} level="3" size="xSmall">
        {heading}
      </Heading>
      <Loading isLoading={isLoading} />
      <div
        data-bynder-widget="media-list"
        data-collection-id={id}
        data-rows="3"
      />
    </article>
  );
};

export { BynderWidget };
