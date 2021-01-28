import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '~/components/Icon';
import {
  checkIsExternalFromStyle,
  checkIsInlineFromStyle,
  getTargetType,
  hasIconFromStyle,
} from './Hyperlink.utils';
import styles from './Hyperlink.module.css';

const Hyperlink = forwardRef(
  (
    {
      children,
      className,
      dataTestRef,
      hasTargetInNewWindow,
      isAlternate,
      isDownload,
      onClick,
      style,
      textAlign,
      theme,
      title,
      url,
    },
    ref,
  ) => {
    const isInline = checkIsInlineFromStyle(style);
    const isExternal = checkIsExternalFromStyle(style);
    const hasIcon = hasIconFromStyle(style);
    const target = getTargetType(hasTargetInNewWindow);
    const classSet = cx(
      styles.base,
      { [styles.blockStyle]: !isInline },
      { [styles.hasIcon]: hasIcon },
      { [styles.hasExternalIcon]: isExternal && hasIcon },
      { [styles.alternate]: isAlternate },
      styles[textAlign],
      styles[theme],
      className,
    );

    let iconName = '';

    if (isExternal) {
      iconName = 'rightUpArrow';
    } else {
      iconName = 'rightArrow';
    }

    return (
      <a
        className={classSet}
        data-test-ref={dataTestRef}
        download={isDownload}
        href={url}
        onClick={onClick}
        ref={ref}
        target={target}
        title={title}
      >
        {children}
        {hasIcon && (
          <>
            {` `}
            <i aria-hidden="true" className={styles.icon}>
              <Icon height={12} name={iconName} theme={theme} width={12} />
            </i>
          </>
        )}
      </a>
    );
  },
);

Hyperlink.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  hasTargetInNewWindow: PropTypes.bool,
  id: PropTypes.string,
  isAlternate: PropTypes.bool,
  isDownload: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.oneOf([
    'External Button Link',
    'External No Icon Button Link',
    'External No Icon Link',
    'External Text Link',
    'Internal Button Link',
    'Internal No Icon Button Link',
    'Internal No Icon Link',
    'Internal Text Link',
  ]),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string,
  type: PropTypes.oneOf(['Relative', 'Absolute']),
  url: PropTypes.string.isRequired,
};

Hyperlink.defaultProps = {
  children: undefined,
  className: undefined,
  dataTestRef: undefined,
  hasTargetInNewWindow: false,
  id: undefined,
  isAlternate: undefined,
  isDownload: undefined,
  onClick: undefined,
  style: 'Internal No Icon Link',
  textAlign: 'left',
  theme: 'dark',
  title: undefined,
  type: undefined,
  url: undefined,
};

export { Hyperlink };
