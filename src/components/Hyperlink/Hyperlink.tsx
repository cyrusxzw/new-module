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
      dataTestId,
      dataTestRef,
      hasTargetInNewWindow = false,
      isAlternate,
      isDownload,
      kind,
      onClick,
      onMouseEnter,
      style,
      tabIndex,
      textAlign = 'left',
      theme = 'dark',
      title,
      url,
    },
    ref,
  ) => {
    const linkStyle = style || kind || 'Internal No Icon Link';
    const isInline = checkIsInlineFromStyle(linkStyle);
    const isExternal = checkIsExternalFromStyle(linkStyle);
    const hasIcon = hasIconFromStyle(linkStyle);
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
        data-test-id={dataTestId}
        data-test-ref={dataTestRef}
        download={isDownload}
        href={url}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        ref={ref}
        tabIndex={tabIndex}
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
