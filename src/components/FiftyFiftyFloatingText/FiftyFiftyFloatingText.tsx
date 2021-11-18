import React, { useEffect, forwardRef, useRef, useState } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
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
    const addToRefs = (el) => {
      if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
      }
    };

    const [textHeight, setTextHeight] = useState();

    const handleScroll = () => {
      if (isInBrowser() && textHeight) {
        const images = Array.from(
          document.getElementsByClassName(
            'fiftyScrollImage',
          ) as HTMLCollectionOf<HTMLElement>,
        );

        let opacity = null;
        revealRefs.current.forEach((ele, index) => {
          const eleToTop = ele.getBoundingClientRect().top;
          const offset = textHeight - eleToTop;

          if (offset > 0 && offset < textHeight) {
            // text reach percentageOfViewport (default is 40%) of viewport, image opacity: 100%
            const opacityTemp = offset / (percentageOfViewport * textHeight);
            opacity = opacityTemp >= 1 ? 1 : opacityTemp;
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
              setTextHeight={setTextHeight}
              text={text}
              theme={theme}
            />
          ))}
        </div>
      </section>
    );
  },
);

export { FiftyFiftyFloatingText };
