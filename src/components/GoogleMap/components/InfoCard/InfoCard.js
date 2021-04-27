import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HEADING, HYPERLINK_STYLE_TYPES, GOOGLE_MAPS } from '~/constants';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { StoreHoursList } from '~/components/StoreHoursList/index.ts';
import styles from './InfoCard.module.css';

const DATA_TEST_REF = 'DIRECTION_URL';

const InfoCard = ({
  address,
  className,
  copy,
  count,
  hasMarkerIndexes,
  openingHours,
  phoneNumber,
  storeName,
}) => {
  return (
    <div className={cx(styles.base, className)}>
      <div className={styles.markerCount}>
        {hasMarkerIndexes ? <i>{count}</i> : ''}
      </div>
      <Heading level={HEADING.LEVEL.THREE} size={HEADING.SIZE.X_SMALL}>
        {storeName}
      </Heading>
      {address && (
        <div className={styles.address}>
          <Hyperlink
            className={styles.hyperlink}
            dataTestRef={DATA_TEST_REF}
            hasTargetInNewWindow={true}
            style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
            title={`${copy.directions} ${address}`}
            url={`${GOOGLE_MAPS.DIRECTIONS_URL_PREFIX}${address}`}
          >
            {address}
          </Hyperlink>
        </div>
      )}
      {phoneNumber && <div className={styles.phoneNumber}>{phoneNumber}</div>}
      <StoreHoursList
        alternateHoursNote={copy.openingHours.alternateHoursNote}
        heading={copy.openingHours.heading}
        hoursList={openingHours}
      />
    </div>
  );
};

InfoCard.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.shape({
    directions: PropTypes.string,
    openingHours: PropTypes.shape({
      alternateHoursNote: PropTypes.string,
      heading: PropTypes.string,
    }),
  }),
  count: PropTypes.number,
  hasMarkerIndexes: PropTypes.bool,
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string,
      hours: PropTypes.string,
      id: PropTypes.string,
      isAlternate: PropTypes.bool,
    }),
  ),
  phoneNumber: PropTypes.string,
  storeName: PropTypes.string,
};

InfoCard.defaultProps = {
  address: undefined,
  className: undefined,
  copy: {
    directions: undefined,
    openingHours: {
      alternateHoursNote: undefined,
      heading: undefined,
    },
  },
  count: undefined,
  hasMarkerIndexes: false,
  openingHours: [],
  phoneNumber: undefined,
  storeName: undefined,
};

export { InfoCard };
