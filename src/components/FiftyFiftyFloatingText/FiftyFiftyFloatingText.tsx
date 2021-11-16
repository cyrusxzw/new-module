import React, { useRef, useEffect, forwardRef } from 'react';
import cx from 'classnames';
import { isInBrowser } from '~/utils/environment';
import { ImageSection } from './components/ImageSection';
import { TextSection } from './components/TextSection';
import styles from './FiftyFiftyFloatingText.module.css';
import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';

const FiftyFiftyFloatingText = forwardRef<any, FiftyFiftyFloatingTextProps>(
  ({ backgroundImages = [], id, textBlocks = [], theme = 'light' }, ref) => {
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
          {backgroundImages.map(({ image }, index) => (
            <ImageSection
              className={styles.backgroundElement}
              image={image}
              key={index}
            />
          ))}
        </div>
        <div className={styles.scrollingContent}>
          {textBlocks.map(({ text }, index) => (
            <TextSection key={index} text={text} theme={theme} />
          ))}
        </div>
      </section>
    );
  },
);

export { FiftyFiftyFloatingText };
