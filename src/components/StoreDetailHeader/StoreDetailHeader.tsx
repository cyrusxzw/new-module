import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { HYPERLINK_STYLE_TYPES, GOOGLE_MAPS } from '~/constants';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { StoreHoursList } from '~/components/StoreHoursList/index.ts';
import { TwoColumnLayout } from '~/components/TwoColumnLayout/index.ts';
import type { StoreDetailHeaderType } from './StoreDetailHeader.types';
import styles from './StoreDetailHeader.module.css';

const DATA_TEST_REF_LOCATION = 'STORE_DETAILS_DIRECTION_LINK';
const DATA_TEST_REF_EMAIL = 'STORE_DETAILS_DIRECTION_EMAIL';
const DATA_TEST_REF_PHONE = 'STORE_DETAILS_DIRECTION_PHONE';

const StoreDetailHeader: StoreDetailHeaderType = ({
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
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  const contentBlocks = [
    {
      label: copy?.location,
      content: location ? (
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
      ) : null,
      id: 'location',
    },
    {
      label: copy?.email,
      content: email ? (
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
      ) : null,
      id: 'email',
    },
    {
      label: copy?.phone,
      content: phone ? (
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
      ) : null,
      id: 'phone',
    },
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
  ];

  return (
    <TwoColumnLayout
      className={classSet}
      content={
        <>
          <Heading level="1" size="large" theme={currentTheme}>
            {storeName}
          </Heading>
          <div className={styles.detailBlock}>
            {contentBlocks
              .filter(({ label, content }) => label && content)
              .map(({ label, content, id }) => (
                <div className={styles.detail} key={id}>
                  <Heading
                    className={styles.detailHeading}
                    level="3"
                    size="xXSmall"
                    theme={currentTheme}
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

export { StoreDetailHeader };