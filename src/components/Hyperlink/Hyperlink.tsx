import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Icon } from '~/components/Icon';
import {
  checkIsExternalFromStyle,
  checkIsInlineFromStyle,
  getTargetType,
  hasIconFromStyle,
} from './Hyperlink.utils';
import type { HyperlinkProps } from './Hyperlink.types';
import type { SvgName } from '../Icon/Icon.types';
import styles from './Hyperlink.module.css';

const Hyperlink = forwardRef<HTMLAnchorElement, HyperlinkProps>(
  (
    {
      children,
      className,
      dataTestRef,
      hasTargetInNewWindow = false,
      isAlternate,
      isDownload,
      onClick,
      style = 'Internal No Icon Link',
      textAlign = 'left',
      theme = 'dark',
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

    let iconName: SvgName = '';

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

export { Hyperlink };