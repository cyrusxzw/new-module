import React from 'react';
import cx from 'classnames';
import { MediaBlock } from './components/MediaBlock';
import type { DoubleMediaType } from './DoubleMedia.types';
import styles from './DoubleMedia.module.css';

const DoubleMedia: DoubleMediaType = ({
  className,
  mediaOne,
  mediaTwo,
  theme = 'dark',
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <div className={classSet}>
      {mediaOne && <MediaBlock {...mediaOne} theme={theme} />}
      {mediaTwo && <MediaBlock {...mediaTwo} theme={theme} />}
    </div>
  );
};

export { DoubleMedia };
