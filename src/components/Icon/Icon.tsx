import React from 'react';
import cx from 'classnames';
import { useUID } from 'react-uid';
import find from 'lodash/find';
import { svgs } from './Icon.svgs';
import { generateSvgBlueprint } from './Icon.utils';
import type { IconType } from './Icon.types';
import styles from './Icon.module.css';

const Icon: IconType = ({
  aria,
  className,
  dataRef,
  height = 12,
  isActive = false,
  name,
  tabIndex = -1,
  theme = 'dark',
  title,
  width = 12,
}) => {
  const uid = useUID();
  const svg = find(svgs, { name });

  if (svg === undefined) {
    return null;
  }

  const ariaTitle = title || name;
  const uidAriaLabelBy = `${name}-${uid}`;
  const svgBlueprint = generateSvgBlueprint(svg, uid);
  const classSet = cx(
    styles.base,
    styles[name],
    styles[theme],
    {
      [styles.isActive]: isActive,
    },
    className,
  );

  return (
    <svg
      aria-hidden={aria?.hidden || undefined}
      aria-labelledby={uidAriaLabelBy}
      className={classSet}
      data-ref={dataRef}
      data-testid="data-testid-Icon"
      focusable="false"
      height={height}
      role="img"
      style={{ height: `${height}px`, width: `${width}px` }}
      tabIndex={tabIndex}
      viewBox={svg.viewBox}
      width={width}
    >
      <title id={uidAriaLabelBy}>{ariaTitle}</title>
      <g>{svgBlueprint}</g>
    </svg>
  );
};

export { Icon };
