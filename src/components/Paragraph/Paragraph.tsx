import React from 'react';
import cx from 'classnames';
import type { ParagraphType, ParagraphSetType } from './Paragraph.types';
import styles from './Paragraph.module.css';

const Paragraph: ParagraphType = ({
  children,
  className,
  hasSerifFont = false,
  isFlush = false,
  isHero = false,
  isLarge = false,
  theme = 'dark',
}) => {
  const classSet = cx(
    styles.base,
    styles[theme],
    { [styles.flush]: isFlush },
    { [styles.large]: isLarge },
    { [styles.hero]: isHero },
    { [styles.serifFont]: hasSerifFont },
    className,
  );

  return <p className={classSet}>{children}</p>;
};

const ParagraphSet: ParagraphSetType = ({
  children,
  className,
  isLarge = false,
  theme = 'dark',
}) => {
  const classSet = cx(
    styles.set,
    styles[theme],
    { [styles.large]: isLarge },
    className,
  );

  return <div className={classSet}>{children}</div>;
};

export { Paragraph, Paragraph as P, ParagraphSet };
