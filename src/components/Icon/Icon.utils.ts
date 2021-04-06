import React, { ReactElement } from 'react';
import type { Svg } from './Icon.types';
import styles from './Icon.module.css';

const generateSvgBlueprint = (svg: Svg, uidKey: string): ReactElement[] => {
  function mapSvgData(svgData): ReactElement[] {
    return svgData.map((item, i) => {
      const tagName = Object.keys(item)[0];
      const { classes, data, ...props } = item[tagName];

      props.key = `${uidKey}${i}`;

      if (classes !== undefined) {
        props.className = styles[classes];
      }

      if (tagName === 'g') {
        return React.createElement(tagName, props, mapSvgData(data));
      }

      return React.createElement(tagName, props);
    });
  }

  return mapSvgData(svg.data);
};

export { generateSvgBlueprint };
