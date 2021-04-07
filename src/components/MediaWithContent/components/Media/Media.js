import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Figure } from '~/components/Figure';
import { Hyperlink } from '~/components/Hyperlink';
import styles from './Media.module.css';

const Media = ({
  className,
  containMedia,
  foregroundImage,
  foregroundImageLink,
  hasFullWidthImage,
  media,
}) => {
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

Media.propTypes = {
  className: PropTypes.string,
  containMedia: PropTypes.oneOf(['center', 'left', 'right']),
  foregroundImage: PropTypes.element,
  foregroundImageLink: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
  hasFullWidthImage: PropTypes.bool,
  media: PropTypes.element.isRequired,
};

Media.defaultProps = {
  className: undefined,
  containMedia: undefined,
  foregroundImage: undefined,
  foregroundImageLink: undefined,
  hasFullWidthImage: false,
  media: undefined,
};

export { Media };
