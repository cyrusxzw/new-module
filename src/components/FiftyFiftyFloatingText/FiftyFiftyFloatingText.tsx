import React, { useEffect, forwardRef, useRef } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
import { MobileView } from './MobileView';
import { ImageSection } from './components/ImageSection';
import { TextSection } from './components/TextSection';
import styles from './FiftyFiftyFloatingText.module.css';
import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';
import { useActiveView } from './FifityFiftyFloatingText.hooks';

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
    const { activeView } = useActiveView();
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
          // check element if in the viewport
          const offset = frameHeight - elementToTop;
          if (offset >= 0 && offset < frameHeight && index > 0) {
            const scrollRate = elementToTop / frameHeight;
            // text reach percentageOfViewport (default is 40%) of viewport, image opacity: 100%
            const opacityTemp = (1 - scrollRate) / percentageOfViewport;
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

    return (
      <section className={classSet} id={id} ref={ref}>
        {activeView === 'tabletanddesktop' && (
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
        {activeView === 'mobile' && (
          <MobileView
            backgroundImages={backgroundImages}
            textBlocks={textBlocks}
            theme={theme}
          />
        )}
      </section>
    );
  },
);

export { FiftyFiftyFloatingText };
