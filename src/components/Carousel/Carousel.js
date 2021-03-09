import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import Slider from 'react-slick';
import { useThemeContext } from '~/contexts';
import { useWindowHasResized } from '~/customHooks';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeOrXLargeOnlyViewport,
  ascertainIsSmallOrMediumOnlyViewport,
} from '~/utils/viewports';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Hyperlink } from '~/components/Hyperlink';
import { Loading } from '~/components/Loading';
import { Transition } from '~/components/Transition';
import { getCarouselSettings } from './Carousel.utils';
import { CarouselIntroduction } from './components/CarouselIntroduction';
import { NextButton } from './components/NextButton/NextButton';
import { Pagination } from './components/Pagination';
import { PreviousButton } from './components/PreviousButton';
import { Slide } from './components/Slide';
import styles from './Carousel.module.css';

const Carousel = ({
  autoplaySpeed,
  className,
  hasAutoplay,
  hasFlushPagination,
  hasFullWidthSlides,
  hasShowCaption,
  hasSlideCounter,
  id,
  initialSlideIndex,
  introduction,
  isCompact,
  slides,
  slideRefs,
  theme,
}) => {
  const slidesLength = slides.length;
  const currentTheme = useThemeContext(theme, 'dark');
  const [progressIndex, setProgressIndex] = useState(0);
  const [isCaptionActive, setIsCaptionActive] = useState(true);
  const [isNextButtonActive, setIsNextButtonActive] = useState(true);
  const [isPreviousButtonActive, setIsPreviousButtonActive] = useState(
    hasFullWidthSlides,
  );

  const [caption, setCaption] = useState(
    get(slides[initialSlideIndex], 'caption', ''),
  );

  const [slideCounter, setSlideCounter] = useState(
    `${initialSlideIndex + 1} / ${slidesLength}`,
  );

  useWindowHasResized();

  let slideOffset = 0;

  /**
   * Slide offset refers to the number of slides in view per display size,
   * and effects the offset position and Next Arrow display
   */
  if (!hasFullWidthSlides) {
    if (ascertainIsSmallOnlyViewport()) {
      slideOffset = 1;
    } else if (ascertainIsMediumOnlyViewport()) {
      slideOffset = 2;
    } else if (ascertainIsLargeOrXLargeOnlyViewport()) {
      slideOffset = 3;
    } else {
      slideOffset = 4;
    }
  } else {
    slideOffset = 1;
  }

  if (slidesLength === 0) {
    return null;
  }

  const isMobileOrTablet = ascertainIsSmallOrMediumOnlyViewport();

  const classSet = cx(
    styles.base,
    { [styles.fullWidthSlides]: hasFullWidthSlides },
    styles[currentTheme],
    className,
  );

  const settings = getCarouselSettings({
    autoplaySpeed,
    className: styles.carousel,
    hasAutoplay,
    hasFlushPagination,
    hasFullWidthSlides,
    initialSlideIndex,
    isNextButtonActive,
    isPreviousButtonActive,
    Pagination,
    NextButton,
    PreviousButton,
    progressIndex,
    theme: currentTheme,
  });

  const hasIntroSlide =
    introduction && !isMobileOrTablet && !hasFullWidthSlides;

  const totalSlidesCount = hasIntroSlide ? slidesLength + 1 : slidesLength;

  const handleBeforeChange = (index, nextIndex) => {
    setIsCaptionActive(false);
    setProgressIndex(nextIndex);

    if (hasFullWidthSlides) {
      return;
    }

    const currentIndex = totalSlidesCount - nextIndex;

    setIsPreviousButtonActive(nextIndex !== 0);
    setIsNextButtonActive(currentIndex === slideOffset ? false : true);
  };

  const handleAfterChange = index => {
    setIsCaptionActive(true);
    setCaption(slides[index].caption);
    setSlideCounter(`${index + 1} of ${slidesLength}`);
  };

  return (
    <div className={classSet} id={id}>
      {!hasIntroSlide && introduction && (
        <aside className={styles.mobileCarouselIntroductionWrapper}>
          <CarouselIntroduction
            cta={introduction.cta}
            description={introduction.description}
            eyebrow={introduction.eyebrow}
            heading={introduction.heading}
            theme={currentTheme}
          />
        </aside>
      )}

      <Slider
        {...settings}
        afterChange={handleAfterChange}
        beforeChange={handleBeforeChange}
      >
        {hasIntroSlide && (
          <CarouselIntroduction
            cta={introduction.cta}
            description={introduction.description}
            eyebrow={introduction.eyebrow}
            heading={introduction.heading}
            theme={currentTheme}
          />
        )}

        {slides.map(({ url, ...slide }, index) => (
          <div
            className={styles.slideWrapper}
            key={index}
            ref={slideRefs[index]}
          >
            {slide.isLoading ? (
              <Loading
                className={styles.loading}
                isLoading={true}
                shouldFillSpace={true}
              />
            ) : (
              <ConditionalWrapper
                alternateWrapper={children => (
                  <div className={styles.item}>{children}</div>
                )}
                condition={!!url}
                wrapper={children => (
                  <Hyperlink
                    className={cx(styles.item, styles.link)}
                    theme={currentTheme}
                    title={`Link to ${slide.heading}`}
                    url={url}
                  >
                    {children}{' '}
                  </Hyperlink>
                )}
              >
                <Slide
                  {...slide}
                  isFullWidthSlide={hasFullWidthSlides}
                  theme={currentTheme}
                />
              </ConditionalWrapper>
            )}
          </div>
        ))}
      </Slider>
      {(hasShowCaption || hasSlideCounter) && (
        <footer
          className={cx(styles.footer, { [styles.flush]: hasFlushPagination })}
        >
          {hasSlideCounter && !isCompact && (
            <div className={styles.slideCounter}>
              {totalSlidesCount > 1 && slideCounter}
            </div>
          )}
          {hasShowCaption && (
            <Transition isActive={isCaptionActive} type="fade">
              <div
                className={cx(styles.caption, {
                  [styles.onlyChild]: !hasSlideCounter || isCompact,
                })}
              >
                {caption}
              </div>
            </Transition>
          )}
        </footer>
      )}
    </div>
  );
};

Carousel.propTypes = {
  autoplaySpeed: PropTypes.number,
  className: PropTypes.string,
  hasAutoplay: PropTypes.bool,
  hasFlushPagination: PropTypes.bool,
  hasFullWidthSlides: PropTypes.bool,
  hasShowCaption: PropTypes.bool,
  hasSlideCounter: PropTypes.bool,
  id: PropTypes.string,
  initialSlideIndex: PropTypes.number,
  introduction: PropTypes.shape({
    cta: PropTypes.shape({
      style: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
    description: PropTypes.node,
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
  }),
  isCompact: PropTypes.bool,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      description: PropTypes.string,
      heading: PropTypes.string,
      id: PropTypes.string,
      isLoading: PropTypes.bool,
      image: PropTypes.object.isRequired,
      url: PropTypes.string,
    }),
  ),
  slideRefs: PropTypes.array,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Carousel.defaultProps = {
  autoplaySpeed: 3000,
  className: undefined,
  hasAutoplay: false,
  hasFlushPagination: false,
  hasFullWidthSlides: false,
  hasShowCaption: false,
  hasSlideCounter: false,
  id: undefined,
  initialSlideIndex: 0,
  introduction: undefined,
  isCompact: false,
  slides: [],
  slideRefs: [],
  theme: undefined,
};

export { Carousel };
