import React from 'react';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES, GOOGLE_MAPS } from '~/constants';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { StoreHoursList } from '~/components/StoreHoursList';
import styles from './InfoCard.module.css';
import type { InfoCardType } from './InfoCard.types';

const DATA_TEST_REF = 'DIRECTION_URL';

const InfoCard: InfoCardType = ({
  address,
  className,
  copy,
  count,
  hasMarkerIndexes = false,
  openingHours = [],
  phoneNumber,
  storeName,
}) => {
  return (
    <div className={cx(styles.base, className)}>
      <div className={styles.markerCount}>
        {hasMarkerIndexes ? <i>{count}</i> : ''}
      </div>
      <Heading level="3" size="xSmall">
        {storeName}
      </Heading>
      {address && (
        <div className={styles.address}>
          <Hyperlink
            className={styles.hyperlink}
            dataTestRef={DATA_TEST_REF}
            hasTargetInNewWindow={true}
            style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
            title={`${copy?.directions} ${address}`}
            url={`${GOOGLE_MAPS.DIRECTIONS_URL_PREFIX}${address}`}
          >
            {address}
          </Hyperlink>
        </div>
      )}
      {phoneNumber && <div className={styles.phoneNumber}>{phoneNumber}</div>}
      <StoreHoursList
        alternateHoursNote={copy?.openingHours?.alternateHoursNote}
        heading={copy?.openingHours?.heading}
        hoursList={openingHours}
      />
    </div>
  );
};

export { InfoCard };
