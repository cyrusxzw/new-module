import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import styles from './Figure.module.css';

interface FigureProps {
  caption?: string;
  children?: React.ReactNode;
  className?: string;
  hasCaptionBorder?: boolean;
  hasCaptionOffset?: boolean;
  id?: string;
  theme?: string;
  foo?: boolean;
}

const Figure: FunctionComponent<FigureProps> = ({
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
