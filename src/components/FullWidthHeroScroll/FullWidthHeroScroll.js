import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { BodyCopy, Hyperlink, Icon, Video } from '~/components';
import FullscreenSection from './components/FullscreenSection';
import styles from './FullWidthHeroScroll.module.css';

const FullWidthHeroScroll = ({
  backgroundVideo,
  copy,
  cta,
  eyebrow,
  hasSerifFontHeading,
  hasTopOffset,
  id,
  textBlocks,
  theme,
  title,
}) => {
  const scrollButton = useRef();

  useEffect(() => {
    const scrollButtonCurrent = scrollButton.current;

    const fadeScrollButton = () => {
      if (window.scrollY > 100) return;

      scrollButtonCurrent.style.opacity = (100 - window.scrollY) / 100;
    };

    window.addEventListener('scroll', fadeScrollButton);

    return function cleanup() {
      window.removeEventListener('scroll', fadeScrollButton);
    };
  });

  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight - 120,
      left: 0,
      behavior: 'smooth',
    });
  };

  const classSet = cx(styles.base, styles[theme], {
    [styles.topOffset]: hasTopOffset,
  });

  return (
    <section className={classSet} id={id}>
      <div className={cx(styles.scrollLockMedia)}>
        <Video
          {...backgroundVideo}
          className={styles.backgroundVideo}
          hasAllowAudio={false}
          hasAutoplay={true}
          hasControls={false}
          hasLoop={true}
          isBackground={true}
          isMuted={true}
        />
      </div>
      <div className={styles.scrollingContent}>
        <div className={styles.fullscreenHero}>
          <div className={styles.innerWrapper}>
            <BodyCopy
              copy={copy}
              eyebrow={eyebrow}
              hasSerifFontHeading={hasSerifFontHeading}
              heading={title}
              isHeroArticle={true}
              theme={theme}
            />
            {cta && (
              <Hyperlink
                isAlternate={false}
                style={HYPERLINK_STYLE_TYPES.INTERNAL_BUTTON_LINK}
                theme={theme}
                url={cta.url}
              >
                {cta.text}
              </Hyperlink>
            )}
          </div>
          <button
            className={styles.scrollIndicator}
            onClick={handleScrollDown}
            ref={scrollButton}
            type="button"
          >
            <Icon height={12} name="scrolldown" theme={theme} width={12} />
          </button>
        </div>
        {textBlocks.map(({ text }, index) => (
          <FullscreenSection key={index} text={text} theme={theme} />
        ))}
      </div>
    </section>
  );
};

FullWidthHeroScroll.propTypes = {
  backgroundVideo: PropTypes.object,
  copy: PropTypes.node,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  hasTopOffset: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  textBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.node,
      hasSerifFont: PropTypes.bool,
    }),
  ),
  title: PropTypes.string,
};

FullWidthHeroScroll.defaultProps = {
  backgroundVideo: [],
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  hasTopOffset: false,
  heading: undefined,
  id: undefined,
  theme: 'light',
  textBlocks: [],
  title: undefined,
};

export default FullWidthHeroScroll;