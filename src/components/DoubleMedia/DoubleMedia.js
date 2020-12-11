import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MediaBlock } from './components/MediaBlock';
import styles from './DoubleMedia.module.css';

const DoubleMedia = ({ mediaOne, mediaTwo, className, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <div className={classSet}>
      {mediaOne && <MediaBlock {...mediaOne} theme={theme} />}
      {mediaTwo && <MediaBlock {...mediaTwo} theme={theme} />}
    </div>
  );
};

DoubleMedia.propTypes = {
  className: PropTypes.string,
  mediaOne: PropTypes.shape({
    altText: PropTypes.string,
    caption: PropTypes.node,
    fallbackImage: PropTypes.object,
    heading: PropTypes.string,
    large: PropTypes.string,
    link: PropTypes.shape({
      hasTargetInNewWindow: PropTypes.bool,
      text: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    }),
    medium: PropTypes.string,
    poster: PropTypes.object,
    small: PropTypes.string,
    type: PropTypes.oneOf(['video', 'image', 'scrollbasedvideo']),
  }),
  mediaTwo: PropTypes.shape({
    altText: PropTypes.string,
    caption: PropTypes.node,
    fallbackImage: PropTypes.object,
    heading: PropTypes.string,
    large: PropTypes.string,
    link: PropTypes.shape({
      hasTargetInNewWindow: PropTypes.bool,
      text: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    }),
    medium: PropTypes.string,
    poster: PropTypes.object,
    small: PropTypes.string,
    type: PropTypes.oneOf(['video', 'image', 'scrollbasedvideo']),
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
};

DoubleMedia.defaultProps = {
  className: undefined,
  mediaOne: undefined,
  mediaTwo: undefined,
  theme: 'dark',
};

export { DoubleMedia };
