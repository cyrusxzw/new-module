import React, { FC } from 'react';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Image } from '~/components/Image';
import { Transition } from '~/components/Transition';
import type { PosterProps } from './Poster.types';
import styles from './Poster.module.css';

const Poster: FC<PosterProps> = ({
  className,
  copy,
  isActive,
  onClick,
  sizes,
}) => {
  const classSet = cx(styles.base, { [styles.isActive]: isActive }, className);

  return (
    <Transition isActive={isActive} type="fade">
      <Button
        className={classSet}
        isInline={true}
        onClick={onClick}
        title={copy?.playButtonTitle}
      >
        <Image
          altText={copy?.altText}
          large={sizes?.large}
          medium={sizes?.medium}
          small={sizes?.small}
        />
      </Button>
    </Transition>
  );
};

export { Poster };
