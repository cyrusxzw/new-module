import React, { useEffect, forwardRef, useRef, useState } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
import { isViewport } from '~/utils/viewport';
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

    const [textSectionHeight, setTextSectionHeight] = useState();

    const handleScroll = () => {
      if (isInBrowser() && textSectionHeight) {
        const images = Array.from(
          document.getElementsByClassName(
            'fiftyScrollImage',
          ) as HTMLCollectionOf<HTMLElement>,
        );

        let opacity = null;
        revealRefs.current.forEach((element, index) => {
          const elementToTop = element.getBoundingClientRect().top; // the distance of each element to top

          // offset = 0 (element become in viewport) offset > textHeight (element hidden on top) offset < 0 (element hidden on bottom)
          const offset = textSectionHeight - elementToTop;
          if (offset > 0 && offset < textSectionHeight && index > 0) {
            // text reach percentageOfViewport (default is 40%) of viewport, image opacity: 100%
            const opacityTemp =
              (1 - elementToTop / textSectionHeight) / percentageOfViewport;
            opacity = opacityTemp >= 1 ? 1 : opacityTemp; // control max opacity is 100%
            images[index].style.opacity = opacity;
            console.log(index);

            console.log(elementToTop);
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
              setTextSectionHeight={setTextSectionHeight} // get the height of text block wrapper from TextSection
              text={text}
              theme={theme}
            />
          ))}
        </div>
        {isMobile && <div>hello</div>}
      </section>
    );
  },
);

export { FiftyFiftyFloatingText };
