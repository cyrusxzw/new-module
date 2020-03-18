import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from 'react-slick';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import { ascertainIsMobileOrTablet } from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import { getCarouselSettings } from './Carousel.utils';
import CarouselIntroduction from './components/CarouselIntroduction';
import NextButton from './components/NextButton/NextButton';
import Pagination from './components/Pagination';
import PreviousButton from './components/PreviousButton';
import Slide from './components/Slide';
import styles from './Carousel.module.css';

const Carousel = ({
  className,
  forwardedRef,
  hasEdges,
  introduction,
  slides,
  theme,
}) => {
  useWindowHasResized();

  if (typeof slides === undefined || slides.length === 0) {
    return null;
  }

  const isMobileOrTablet = ascertainIsMobileOrTablet();
  const classSet = cx(
    styles.base,
    styles[theme],
    { [styles.edges]: hasEdges },
    className,
  );

  const settings = getCarouselSettings({
    className: classSet,
    Pagination,
    NextButton,
    PreviousButton,
  });

  return (
    <section ref={forwardedRef}>
      {introduction && isMobileOrTablet && (
        <aside className={styles.mobileCarouselIntroductionWrapper}>
          <CarouselIntroduction
            description={introduction.description}
            heading={introduction.heading}
          />
        </aside>
      )}

      <Slider {...settings}>
        {introduction && !isMobileOrTablet && (
          <CarouselIntroduction
            description={introduction.description}
            heading={introduction.heading}
          />
        )}

        {slides.map(({ url, ...slide }, index) => (
          <div key={index}>
            {url ? (
              <Hyperlink
                className={cx(styles.item, styles.link)}
                title={`Link to ${slide.heading}`}
                url={url}
              >
                <Slide {...slide} />
              </Hyperlink>
            ) : (
              <div className={styles.item} key={index}>
                <Slide {...slide} />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  hasEdges: PropTypes.bool,
  introduction: PropTypes.shape({
    cta: PropTypes.object,
    description: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  }),
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      heading: PropTypes.string,
      image: PropTypes.object.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Carousel.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
  hasEdges: false,
  introduction: undefined,
  slides: undefined,
  theme: 'dark',
};

export default Carousel;
