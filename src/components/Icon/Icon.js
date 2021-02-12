import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useUID } from 'react-uid';
import find from 'lodash/find';
import { svgs } from './Icon.svgs';
import { generateSvgBlueprint } from './Icon.utils';
import styles from './Icon.module.css';

const Icon = ({
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
  const uidAriaLabellBy = `${name}-${uid}`;
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
      aria-labelledby={uidAriaLabellBy}
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
      <title id={uidAriaLabellBy}>{ariaTitle}</title>
      <g>{svgBlueprint}</g>
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  dataRef: PropTypes.string,
  height: PropTypes.number,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string,
  width: PropTypes.number,
};

export { Icon };
