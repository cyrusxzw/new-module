import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Figure.module.css';

const Figure = ({
  caption,
  children,
  className,
  hasCaptionBorder,
  hasCaptionOffset,
  id,
  theme,
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

Figure.propTypes = {
  caption: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  hasCaptionBorder: PropTypes.bool,
  hasCaptionOffset: PropTypes.bool,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Figure.defaultProps = {
  caption: undefined,
  children: undefined,
  className: undefined,
  hasCaptionBorder: true,
  hasCaptionOffset: true,
  id: undefined,
  theme: 'dark',
};

export { Figure };
