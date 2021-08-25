import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { matchCodeToText } from './utils/utils';
import type { PersonalInfoSummaryType } from './PersonalInfoSummary.types';
import styles from './PersonalInfoSummary.module.css';

const PersonalInfoSummary: PersonalInfoSummaryType = ({
  className,
  prefixOptions = [],
  shouldShowPrefix = true,
  shouldSwapFullNameOrder = false,
  theme,
  userDetails,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!userDetails) {
    return null;
  }

  const classSet = cx(styles.base, styles[currentTheme], className);

  const prefix = shouldShowPrefix
    ? matchCodeToText(prefixOptions, userDetails.prefix)
    : '';

  const fullName = shouldSwapFullNameOrder
    ? `${userDetails.lastName}${userDetails.firstName}`
    : `${userDetails.firstName} ${userDetails.lastName}`;

  const suffix = userDetails.suffix ?? '';

  return (
    <div className={classSet} data-testid="personal-info-summary">
      <div>{`${prefix} ${fullName} ${suffix}`}</div>
      <div>{userDetails.email}</div>
      <div>{userDetails.dateOfBirth}</div>
    </div>
  );
};

export { PersonalInfoSummary };
