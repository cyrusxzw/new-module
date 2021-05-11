import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import styles from './Message.module.css';

const Message = ({ className, copy, heading, id, link }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet} id={id}>
      <ConditionalWrapper
        condition={!!link}
        wrapper={children => (
          <Hyperlink className={styles.link} {...link}>
            {children}
          </Hyperlink>
        )}
      >
        <div className={styles.content}>
          <Heading className={styles.heading} level="4" size="xXSmall">
            <span>{heading}</span>
          </Heading>
          <div className={styles.copy}>{copy}</div>
        </div>
      </ConditionalWrapper>
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Message.defaultProps = {
  className: undefined,
  copy: undefined,
  heading: undefined,
  id: undefined,
  link: undefined,
};

export { Message };
