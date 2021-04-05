import React, { Fragment, forwardRef } from 'react';
import cx from 'classnames';
import { isObjectPopulatedArray } from '~/utils/objects';
import styles from './DefinitionList.module.css';
import type { DefinitionListProps } from './DefinitionList.types';

const DefinitionList = forwardRef<HTMLDListElement, DefinitionListProps>(
  function DefinitionListRef(
    {
      className,
      hasBottomBorder = false,
      isVisible = true,
      items = [],
      theme = 'dark',
    },
    ref,
  ) {
    if (!isObjectPopulatedArray(items)) {
      return null;
    }

    const classSet = cx(
      styles.base,
      styles[theme],
      { [styles.hasBottomBorder]: hasBottomBorder },
      className,
    );
    const termClassSet = cx(styles.term, { [styles.slideIn]: isVisible });
    const descriptionClassSet = cx(styles.description, {
      [styles.slideIn]: isVisible,
    });

    return (
      <dl
        className={classSet}
        data-testid="data-testid-DefinitionList"
        ref={ref}
      >
        {items
          .filter(({ description, term }) => description || term)
          .map(({ description, id, term }) => (
            <Fragment key={id}>
              <dt className={termClassSet}>{term}</dt>
              <dd className={descriptionClassSet}>{description}</dd>
            </Fragment>
          ))}
      </dl>
    );
  },
);

export { DefinitionList };
