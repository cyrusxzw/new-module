import React, { forwardRef, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useWindowHasResized } from '~/customHooks';
import { Transition } from '~/components/Transition';
import styles from './TextSection.module.css';
import type { TextSectionProps } from './TextSection.types';

const TextSection = forwardRef<HTMLDivElement, TextSectionProps>(
  function TextSectionRef({ text, theme = 'dark', setTextSectionHeight }, ref) {
    const myRef = useRef(null);
    const { height } = useWindowHasResized();

    useEffect(() => {
      const textSectionHeight = myRef?.current?.clientHeight;
      if (textSectionHeight && height === 0) {
        setTextSectionHeight(textSectionHeight);
      } else {
        setTextSectionHeight(height);
      }
    }, [height, setTextSectionHeight]);

    return (
      <div className={cx(styles.base, styles[theme])} ref={myRef}>
        <Transition isActive={true} type="slowFade">
          <div ref={ref}>{text}</div>
        </Transition>
      </div>
    );
  },
);

export { TextSection };
