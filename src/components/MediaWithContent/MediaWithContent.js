import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Media from './components/Media';
import Content from './components/Content';
import styles from './MediaWithContent.module.css';

const MediaWithContent = forwardRef(function MediaWithContentRef(
  {
    backgroundColor,
    className,
    containMedia,
    content,
    copy,
    foregroundImage,
    foregroundImageLink,
    hasFullWidthImage,
    hasSerifFontHeading,
    hasTopOffset,
    isHero,
    isReverse,
    media,
    theme,
  },
  ref,
) {
  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReverse },
    { [styles.hero]: isHero },
    { [styles.topOffest]: hasTopOffset },
    className,
  );

  const style = backgroundColor ? { backgroundColor } : undefined;

  return (
    <div className={classSet} ref={ref} style={style}>
      <Media
        className={styles.media}
        containMedia={containMedia}
        foregroundImage={foregroundImage}
        foregroundImageLink={foregroundImageLink}
        hasFullWidthImage={hasFullWidthImage}
        isHero={isHero}
        media={media}
      />
      <Content
        content={content}
        copy={copy}
        hasFullWidthImage={hasFullWidthImage}
        hasSerifFontHeading={hasSerifFontHeading}
        hasTopOffset={hasTopOffset}
        isHero={isHero}
        isReverse={isReverse}
        theme={theme}
      />
    </div>
  );
});

MediaWithContent.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  containMedia: PropTypes.oneOf(['center', 'left', 'right']),
  content: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }).isRequired,
  foregroundImage: PropTypes.element,
  foregroundImageLink: PropTypes.object,
  hasFullWidthImage: PropTypes.bool,
  hasSerifFontHeading: PropTypes.bool,
  hasTopOffset: PropTypes.bool,
  isHero: PropTypes.bool,
  isReverse: PropTypes.bool,
  media: PropTypes.element.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

MediaWithContent.defaultProps = {
  backgroundColor: '#F6F5E8',
  className: undefined,
  containMedia: undefined,
  content: undefined,
  copy: {
    description: undefined,
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  foregroundImage: undefined,
  foregroundImageLink: undefined,
  hasFullWidthImage: false,
  hasSerifFontHeading: true,
  hasTopOffset: false,
  isHero: false,
  isReverse: false,
  media: undefined,
  theme: 'dark',
};

export default MediaWithContent;
