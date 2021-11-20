import React, { useEffect, forwardRef, useRef } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
import { isViewport } from '~/utils/viewport';
import { MobileView } from './MobileView';
import { ImageSection } from './components/ImageSection';
import { TextSection } from './components/TextSection';
import styles from './FiftyFiftyFloatingText.module.css';
import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';

const FiftyFiftyFloatingText = forwardRef<any, FiftyFiftyFloatingTextProps>(
  (
    {
      backgroundImages = [],
      id,
      textBlocks = [],
      theme = 'light',
      percentageOfViewport = 0.4,
    },
    ref,
  ) => {
    const revealRefs = useRef([]);
    const addToRefs = (element) => {
      if (element && !revealRefs.current.includes(element)) {
        revealRefs.current.push(element);
      }
    };

    const handleScroll = () => {
      if (isInBrowser()) {
        const images = Array.from(
          document.getElementsByClassName(
            'fiftyScrollImage',
          ) as HTMLCollectionOf<HTMLElement>,
        );

        let opacity = null;
        const frameHeight = window.innerHeight;
        revealRefs.current.forEach((element, index) => {
          const elementToTop = element.getBoundingClientRect().top; // the distance of each element to top

          // offset = 0 (element become in viewport) offset > textHeight (element hidden on top) offset < 0 (element hidden on bottom)
          const offset = frameHeight - elementToTop;
          if (offset >= 0 && offset < frameHeight && index > 0) {
            // text reach percentageOfViewport (default is 40%) of viewport, image opacity: 100%
            const opacityTemp =
              (1 - elementToTop / frameHeight) / percentageOfViewport;
            opacity = opacityTemp >= 1 ? 1 : opacityTemp; // control max opacity is 100%
            images[index].style.opacity = opacity;
          }
        });
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return function cleanup() {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    const classSet = cx(styles.base, styles[theme]);
    const classImageSection = cx(styles.backgroundElement, 'fiftyScrollImage');

    const isMobile = isViewport('xs to sm only');

    return (
      <section className={classSet} id={id} ref={ref}>
        {!isMobile && (
          <>
            <div className={cx(styles.scrollLockMedia)}>
              {backgroundImages.map(({ image }, index) => (
                <ImageSection
                  className={classImageSection}
                  image={image}
                  key={index}
                />
              ))}
            </div>
            <div className={styles.scrollingContent}>
              {textBlocks.map(({ text }, index) => (
                <TextSection
                  key={index}
                  ref={addToRefs}
                  text={text}
                  theme={theme}
                />
              ))}
            </div>
          </>
        )}
        {isMobile && (
          <MobileView
            backgroundImages={backgroundImages}
            textBlocks={textBlocks}
          />
        )}
      </section>
    );
  },
);

export { FiftyFiftyFloatingText };
