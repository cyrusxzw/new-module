import React, { FC } from 'react';
import cx from 'classnames';
import type { FigureProps } from './Figure.types';
import styles from './Figure.module.css';

const Figure: FC<FigureProps> = ({
  caption,
  children,
  className,
  hasCaptionBorder,
  hasCaptionOffset,
  id,
  theme = 'dark',
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  const captionWrapperClassSet = cx(styles.captionWrapper, {
    [styles.border]: hasCaptionBorder && caption,
    [styles.captionOffset]: hasCaptionOffset && caption,
  });

  return (
    <figure className={classSet} id={id}>
      {children}
      {caption && (
        <figcaption className={captionWrapperClassSet}>
          <div className={styles.caption}>{caption}</div>
        </figcaption>
      )}
    </figure>
  );
};

export { Figure };
