import React, { useRef, useEffect, forwardRef } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
import { BackgroundElement } from './components/BackgroundElement';
import { FullscreenSection } from './components/FullscreenSection';
import styles from './FiftyFiftyFloatingText.module.css';
import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';

const FiftyFiftyFloatingText = forwardRef<any, FiftyFiftyFloatingTextProps>(
  ({ backgroundImage, id, textBlocks = [], theme = 'light' }, ref) => {
    const scrollButton = useRef();
    const offset = 120;

    useEffect(() => {
      const scrollButtonCurrent = scrollButton.current;
      const scrollThreshold = 100;

      const fadeScrollButton = () => {
        if (window.scrollY > scrollThreshold) return;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- @TODO Address in refactor
        // @ts-ignore
        scrollButtonCurrent.style.opacity =
          (scrollThreshold - window.scrollY) / scrollThreshold;
      };

      window.addEventListener('scroll', fadeScrollButton);

      return function cleanup() {
        window.removeEventListener('scroll', fadeScrollButton);
      };
    });

    const handleScrollDown = () => {
      if (isInBrowser()) {
        window.scroll({
          top: window.innerHeight - offset,
          left: 0,
          behavior: 'smooth',
        });
      }
    };

    const classSet = cx(styles.base, styles[theme]);

    return (
      <section className={classSet} id={id} ref={ref}>
        <div className={cx(styles.scrollLockMedia)}>
          <BackgroundElement
            className={styles.backgroundElement}
            image={backgroundImage}
          />
        </div>
        <div className={styles.scrollingContent}>
          {textBlocks.map(({ text }, index) => (
            <FullscreenSection key={index} text={text} theme={theme} />
          ))}
        </div>
      </section>
    );
  },
);

export { FiftyFiftyFloatingText };
