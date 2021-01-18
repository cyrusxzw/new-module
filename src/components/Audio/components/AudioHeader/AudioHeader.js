import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '~/components/Heading';
import styles from './AudioHeader.module.css';

const AudioHeader = React.memo(props => (
  <header className={styles.base}>
    <Heading
      className={styles.artistName}
      isFlush={true}
      level="3"
      size="xXSmall"
    >
      {props.artistName}
    </Heading>
    <Heading hasSerifFont={true} isFlush={true} level="4" size="medium">
      {props.trackTitle}
    </Heading>
  </header>
));

AudioHeader.propTypes = {
  artistName: PropTypes.string,
  trackTitle: PropTypes.string,
};

AudioHeader.defaultProps = {
  artistName: undefined,
  trackTitle: undefined,
};

export { AudioHeader };
