import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HEADING, HYPERLINK_STYLE_TYPES, GOOGLE_MAPS } from '~/constants';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { StoreHoursList } from '~/components/StoreHoursList/index.ts';
import { TwoColumnLayout } from '~/components/TwoColumnLayout/index.ts';
import styles from './StoreDetailHeader.module.css';

const DATA_TEST_REF_LOCATION = 'STORE_DETAILS_DIRECTION_LINK';
const DATA_TEST_REF_EMAIL = 'STORE_DETAILS_DIRECTION_EMAIL';
const DATA_TEST_REF_PHONE = 'STORE_DETAILS_DIRECTION_PHONE';

const StoreDetailHeader = ({
  alternateHoursNote,
  className,
  copy,
  email,
  location,
  openingHours,
  phone,
  storeName,
  theme,
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  const contentBlocks = [
    {
      label: copy.location,
      content: location ? (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_LOCATION}
          hasTargetInNewWindow={true}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
          theme={theme}
          title={`${copy.location}: ${location}`}
          url={`${GOOGLE_MAPS.DIRECTIONS_URL_PREFIX}${location}`}
        >
          {location}
        </Hyperlink>
      ) : null,
      id: 'location',
    },
    {
      label: copy.email,
      content: email ? (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_EMAIL}
          hasTargetInNewWindow={true}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
          theme={theme}
          title={email}
          url={`mailto:${email}`}
        >
          {email}
        </Hyperlink>
      ) : null,
      id: 'email',
    },
    {
      label: copy.phone,
      content: phone ? (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_PHONE}
          hasTargetInNewWindow={false}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_NO_ICON_TEXT_LINK}
          theme={theme}
          title={`tel: ${phone}`}
          url={`tel:${phone}`}
        >
          {phone}
        </Hyperlink>
      ) : null,
      id: 'phone',
    },
    {
      label: copy.openingHours,
      content: (
        <StoreHoursList
          alternateHoursNote={alternateHoursNote}
          hoursList={openingHours}
          theme={theme}
        />
      ),
      id: 'openingHours',
    },
  ];

  return (
    <TwoColumnLayout
      className={classSet}
      content={
        <>
          <Heading
            level={HEADING.LEVEL.ONE}
            size={HEADING.SIZE.LARGE}
            theme={theme}
          >
            {storeName}
          </Heading>
          <div className={styles.detailBlock}>
            {contentBlocks
              .filter(({ label, content }) => label && content)
              .map(({ label, content, id }) => (
                <div className={styles.detail} key={id}>
                  <Heading
                    className={styles.detailHeading}
                    level={HEADING.LEVEL.THREE}
                    size={HEADING.SIZE.X_X_SMALL}
                    theme={theme}
                  >
                    {label}
                  </Heading>
                  <div className={cx(styles.detailContent)}>{content}</div>
                </div>
              ))}
          </div>
        </>
      }
      hasFullWidthContent={true}
      isReversed={true}
    />
  );
};

StoreDetailHeader.propTypes = {
  alternateHoursNote: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.shape({
    location: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    openingHours: PropTypes.string,
  }),
  email: PropTypes.string,
  location: PropTypes.string,
  openingHours: PropTypes.array,
  phone: PropTypes.string,
  storeName: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

StoreDetailHeader.defaultProps = {
  alternateHoursNote: undefined,
  className: undefined,
  copy: {
    location: undefined,
    email: undefined,
    phone: undefined,
    openingHours: undefined,
  },
  email: undefined,
  location: undefined,
  openingHours: undefined,
  phone: undefined,
  storeName: undefined,
  theme: 'dark',
};

export { StoreDetailHeader };
