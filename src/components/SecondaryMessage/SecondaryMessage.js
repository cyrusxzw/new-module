import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { arrayOfLength } from './SecondaryMessage.utils';
import { Message } from './components/Message';
import styles from './SecondaryMessage.module.css';

const SecondaryMessage = ({ className, id, items }) => {
  if (!items || items.length === 0) return null;

  const hasMultipleMessages = items.length > 1;
  const classSet = cx(styles.base, className);

  return (
    <section className={styles.wrapper}>
      <aside className={classSet} id={id}>
        {items.map((item, index) => {
          const { className, id, ...props } = item;

          return (
            <Message
              className={cx(className, {
                [styles.multiple]: hasMultipleMessages,
              })}
              key={id || index}
              {...props}
            />
          );
        })}
      </aside>
    </section>
  );
};

SecondaryMessage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  items: arrayOfLength.bind(null, 2),
};

SecondaryMessage.defaultProps = {
  className: undefined,
  id: undefined,
  items: undefined,
};

export { SecondaryMessage };
