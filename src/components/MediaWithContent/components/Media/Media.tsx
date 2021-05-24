import React, { ReactElement } from 'react';
import cx from 'classnames';
import { Figure } from '~/components/Figure';
import { Hyperlink } from '~/components/Hyperlink';
import type { MediaProps } from './Media.types';
import styles from './Media.module.css';

const Media = ({
  className,
  containMedia,
  foregroundImage,
  foregroundImageLink,
  hasFullWidthImage = false,
  media,
}: MediaProps): ReactElement => {
  const classSet = cx(className, styles.base, styles[containMedia], {
    [styles.hasFullWidthImage]: hasFullWidthImage,
  });

  return (
    <div className={classSet}>
      <Figure className={styles.figure}>{media}</Figure>
      {foregroundImage && (
        <Figure className={styles.foregroundImage}>
          {foregroundImageLink ? (
            <Hyperlink
              title={foregroundImageLink.title}
              url={foregroundImageLink.url}
            >
              {foregroundImage}
            </Hyperlink>
          ) : (
            foregroundImage
          )}
        </Figure>
      )}
    </div>
  );
};

export { Media };
