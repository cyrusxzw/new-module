import React, { forwardRef, useRef, useState, useEffect } from 'react';
import cx from 'classnames';
import { Transition } from '~/components/Transition';
import styles from './TextSection.module.css';
import type { TextSectionProps } from './TextSection.types';

const TextSection = forwardRef<HTMLDivElement, TextSectionProps>(
  function TextSectionRef({ text, theme = 'dark', setTextHeight }, ref) {
    const myRef = useRef(null);
    const [elementHeight, setElementHeight] = useState();

    // const handleResize = () => {
    //   setElementHeight(textHeight);
    // };
    useEffect(() => {
      const textHeight = myRef?.current?.clientHeight;
      if (textHeight) {
        setElementHeight(textHeight);
        setTextHeight(elementHeight);
      }
      // window.addEventListener('resize', handleResize);
      // return function cleanup() {
      //   window.removeEventListener('resize', handleResize);
      // };
    });

    return (
      <div className={cx(styles.base, styles[theme])} ref={myRef}>
        <Transition isActive={true} type="slowFade">
          <div ref={ref}>
            {text} {elementHeight}
          </div>
        </Transition>
      </div>
    );
  },
);

export { TextSection };
