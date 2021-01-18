import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Paragraph.module.css';

const Paragraph = ({
  children,
  className,
  hasSerifFont,
  isFlush,
  isHero,
  isLarge,
  theme,
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

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  hasSerifFont: PropTypes.bool,
  isFlush: PropTypes.bool,
  isHero: PropTypes.bool,
  isLarge: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Paragraph.defaultProps = {
  children: undefined,
  className: undefined,
  hasSerifFont: false,
  isFlush: false,
  isHero: false,
  isLarge: false,
  theme: 'dark',
};

const ParagraphSet = ({ children, className, isLarge, theme }) => {
  const classSet = cx(
    styles.set,
    styles[theme],
    { [styles.large]: isLarge },
    className,
  );

  return <div className={classSet}>{children}</div>;
};

ParagraphSet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ParagraphSet.defaultProps = {
  children: undefined,
  className: undefined,
  isLarge: false,
  theme: 'dark',
};

export { Paragraph, Paragraph as P, ParagraphSet };
