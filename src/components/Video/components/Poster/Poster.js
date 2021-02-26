import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '~/components/Button';
import { Image } from '~/components/Image';
import { Transition } from '~/components/Transition';
import styles from './Poster.module.css';

const Poster = ({ className, copy, isActive, onClick, sizes }) => {
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

Poster.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    playButtonTitle: PropTypes.string,
    altText: PropTypes.string,
  }),
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  sizes: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
};

export { Poster };
