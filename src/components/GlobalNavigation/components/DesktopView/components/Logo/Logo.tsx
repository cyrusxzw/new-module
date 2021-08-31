import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import type { LogoType } from './Logo.types';
import styles from './Logo.module.css';

const Logo: LogoType = () => {
  const { isOpen } = useGlobalNavigationStateContext();
  const {
    actions: {
      logo: { dataTestRef, title, url, label },
    },
    desktopViewLogoTheme = 'dark',
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(undefined, 'dark');

  const classSet = cx(styles.base, styles[currentTheme], {
    [styles.active]: isOpen,
  });

  const iconClassSet = cx(styles.icon, styles[desktopViewLogoTheme]);

  return (
    <Hyperlink
      className={classSet}
      dataTestRef={dataTestRef ?? 'NAV_LOGO'}
      title={title}
      url={url}
    >
      <Icon
        className={iconClassSet}
        height={40}
        name="aesop"
        tabIndex={-1}
        width={120}
      />

      <ScreenReaderOnly>{label}</ScreenReaderOnly>
    </Hyperlink>
  );
};

export { Logo };
