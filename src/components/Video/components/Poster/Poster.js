import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '~/components/Button';
import { Image } from '~/components/Image';
import { Transition } from '~/components/Transition';
import styles from './Poster.module.css';

const Poster = ({
  className,
  copy,
  isActive,
  large,
  medium,
  onClick,
  small,
}) => {
  const classSet = cx(styles.base, { [styles.isActive]: isActive }, className);

  return (
    <Transition isActive={isActive} type="fade">
      <Button
        className={classSet}
        isInline={true}
        onClick={onClick}
        title={copy.playButtonTitle}
      >
        <Image
          altText={copy.altText}
          large={large}
          medium={medium}
          small={small}
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
  large: PropTypes.string,
  medium: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.string,
};

Poster.defaultProps = {
  className: undefined,
  copy: {
    playButtonTitle: undefined,
    altText: undefined,
  },
  isActive: undefined,
  large: undefined,
  medium: undefined,
  onClick: undefined,
  small: undefined,
};

export { Poster };
