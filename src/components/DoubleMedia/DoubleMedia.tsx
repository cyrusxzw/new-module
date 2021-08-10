import React, { forwardRef } from 'react';
import cx from 'classnames';
import { MediaBlock } from './components/MediaBlock';
import type { DoubleMediaProps } from './DoubleMedia.types';
import styles from './DoubleMedia.module.css';

const DoubleMedia = forwardRef<HTMLDivElement, DoubleMediaProps>(
  ({ className, mediaOne, mediaTwo, theme = 'dark' }, ref) => {
    const classSet = cx(styles.base, styles[theme], className);

    return (
      <div className={classSet} ref={ref}>
        {mediaOne && <MediaBlock {...mediaOne} theme={theme} />}
        {mediaTwo && <MediaBlock {...mediaTwo} theme={theme} />}
      </div>
    );
  },
);

export { DoubleMedia };
