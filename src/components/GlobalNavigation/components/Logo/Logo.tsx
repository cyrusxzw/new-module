import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import { getDimentionsByView } from './Logo.utils';
import type { LogoType } from './Logo.types';
import styles from './Logo.module.css';

const Logo: LogoType = ({ closedTheme, isVisible = true }) => {
  const { isOpen, activeView } = useGlobalNavigationStateContext();
  const {
    actions: {
      logo: { dataTestRef, title, url, label },
    },
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(undefined, 'dark');
  const currentClosedTheme = closedTheme || currentTheme;

  const { width, height } = getDimentionsByView(activeView);

  const classSet = cx(
    styles.base,
    styles[activeView],
    styles[isOpen ? currentTheme : currentClosedTheme],
    {
      [styles.active]: isOpen,
    },
  );

  return (
    <Hyperlink
      className={classSet}
      dataTestRef={dataTestRef ?? 'NAV_LOGO'}
      tabIndex={!isVisible ? -1 : null}
      title={title}
      url={url}
    >
      <Icon
        className={styles.icon}
        height={height}
        name="aesop"
        tabIndex={-1}
        width={width}
      />
      <ScreenReaderOnly>{label}</ScreenReaderOnly>
    </Hyperlink>
  );
};

export { Logo };
