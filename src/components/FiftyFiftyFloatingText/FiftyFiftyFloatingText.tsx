import React, { useRef, useEffect, forwardRef } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
import { BackgroundElement } from './components/BackgroundElement';
import { FullscreenSection } from './components/FullscreenSection';
import styles from './FiftyFiftyFloatingText.module.css';
import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';

const FiftyFiftyFloatingText = forwardRef<any, FiftyFiftyFloatingTextProps>(
  ({ backgroundImage, id, textBlocks = [], theme = 'light' }, ref) => {
    // if (isInBrowser()) {
    //   window.scroll({
    //     top: window.innerHeight - offset,
    //     left: 0,
    //     behavior: 'smooth',
    //   });
    // }

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
