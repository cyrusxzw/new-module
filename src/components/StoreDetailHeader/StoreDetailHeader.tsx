import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { HYPERLINK_STYLE_TYPES, GOOGLE_MAPS } from '~/constants';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { StoreHoursList } from '~/components/StoreHoursList';
import { TwoColumnLayout } from '~/components/TwoColumnLayout';
import type { StoreDetailHeaderType } from './StoreDetailHeader.types';
import styles from './StoreDetailHeader.module.css';

const DATA_TEST_REF_LOCATION = 'STORE_DETAILS_DIRECTION_LINK';
const DATA_TEST_REF_EMAIL = 'STORE_DETAILS_DIRECTION_EMAIL';
const DATA_TEST_REF_PHONE = 'STORE_DETAILS_DIRECTION_PHONE';
const DATA_TEST_REF_FACIALAPPOINTMENTS =
  'STORE_DETAILS_DIRECTION_FACIALAPPOINTMENTS';

const getContentBlocks = ({
  copy,
  currentTheme,
  location,
  email,
  phone,
  facialAppointments,
  facialAppointmentsLink,
  alternateHoursNote,
  openingHours,
  hasCnC,
  cncAvailable,
  storePageCallout,
}) => ({
  col1: [
    {
      label: copy?.location,
      content: location && (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_LOCATION}
          hasTargetInNewWindow={true}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
          theme={currentTheme}
          title={`${copy?.location}: ${location}`}
          url={`${GOOGLE_MAPS.DIRECTIONS_URL_PREFIX}${location}`}
        >
          {location}
        </Hyperlink>
      ),
      id: 'location',
    },
    {
      label: copy?.email,
      content: email && (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_EMAIL}
          hasTargetInNewWindow={true}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
          theme={currentTheme}
          title={`${copy?.email}: ${email}`}
          url={`mailto:${email}`}
        >
          {email}
        </Hyperlink>
      ),
      id: 'email',
    },
    {
      label: copy?.phone,
      content: phone && (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_PHONE}
          hasTargetInNewWindow={false}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_NO_ICON_TEXT_LINK}
          theme={currentTheme}
          title={`${copy?.phone}: ${phone}`}
          url={`tel:${phone}`}
        >
          {phone}
        </Hyperlink>
      ),
      id: 'phone',
    },
    {
      label: copy?.facialAppointments,
      content: facialAppointments && (
        <Hyperlink
          className={styles.hyperlink}
          dataTestRef={DATA_TEST_REF_FACIALAPPOINTMENTS}
          hasTargetInNewWindow={true}
          style={HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK}
          theme={currentTheme}
          title={copy?.facialAppointmentsLink}
          url={facialAppointmentsLink}
        >
          {copy?.facialAppointmentsLink}
        </Hyperlink>
      ),
      id: 'facialAppointments',
    },
  ],
  col2: [
    {
      label: copy?.openingHours,
      content: (
        <StoreHoursList
          alternateHoursNote={alternateHoursNote}
          hoursList={openingHours}
          theme={currentTheme}
        />
      ),
      id: 'openingHours',
    },
    {
      content: hasCnC && <div className={styles.copy}>{cncAvailable}</div>,
      id: 'hasCnC',
    },
  ],
  col3: [
    {
      content: storePageCallout && (
        <div className={styles.copy}>{storePageCallout}</div>
      ),
      id: 'storePageCallout',
    },
  ],
});

const MapContentBlocks = ({ blocks, theme }) =>
  blocks
    .filter(({ content }) => content)
    .map(({ label, content, id }) => (
      <div className={styles.detail} key={id}>
        {label && (
          <Heading
            className={styles.detailHeading}
            level="3"
            size="xXSmall"
            theme={theme}
          >
            {label}
          </Heading>
        )}
        <div className={cx(styles.detailContent)}>{content}</div>
      </div>
    ));

const StoreDetailHeader: StoreDetailHeaderType = ({
  alternateHoursNote,
  className,
  cncAvailable,
  copy,
  email,
  facialAppointments,
  facialAppointmentsLink,
  hasCnC,
  location,
  openingHours,
  phone,
  storeName,
  storePageCallout,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);
  const wrapperClass = cx(styles.wrapper, className);
  const blocksData = {
    copy,
    currentTheme,
    location,
    email,
    phone,
    facialAppointments,
    facialAppointmentsLink,
    alternateHoursNote,
    openingHours,
    hasCnC,
    cncAvailable,
    storePageCallout,
  };
  const contentBlocks = getContentBlocks(blocksData);

  return (
    <TwoColumnLayout
      className={classSet}
      content={
        <div className={wrapperClass}>
          <Heading level="1" size="xLarge" theme={currentTheme}>
            {storeName}
          </Heading>
          <div className={styles.detailBlock}>
            {storePageCallout ? (
              <>
                <div className={styles.col3x}>
                  <MapContentBlocks
                    blocks={contentBlocks.col1}
                    theme={currentTheme}
                  />
                </div>
                <div className={styles.col3x}>
                  <MapContentBlocks
                    blocks={contentBlocks.col2}
                    theme={currentTheme}
                  />
                </div>
                <div className={styles.colExtra}>
                  <MapContentBlocks
                    blocks={contentBlocks.col3}
                    theme={currentTheme}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={styles.col}>
                  <MapContentBlocks
                    blocks={contentBlocks.col1}
                    theme={currentTheme}
                  />
                </div>
                <div className={styles.col}>
                  <MapContentBlocks
                    blocks={contentBlocks.col2}
                    theme={currentTheme}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      }
      hasFullWidthContent={true}
      isReversed={true}
    />
  );
};

export { StoreDetailHeader };
