import React, { FC } from 'react';
import cx from 'classnames';
import type { ParagraphProps, ParagraphSetProps } from './Paragraph.types';
import styles from './Paragraph.module.css';

const Paragraph: FC<ParagraphProps> = ({
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

const ParagraphSet: FC<ParagraphSetProps> = ({
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
