import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import styles from './Quote.module.css';

const Quote = ({ author, className, content, theme }) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <blockquote className={styles.blockquote}>{content}</blockquote>
        <cite className={styles.author}>{author}</cite>
      </div>
    </div>
  );
};

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Quote.defaultProps = {
  author: undefined,
  className: undefined,
  content: undefined,
  theme: undefined,
};

export { Quote };
