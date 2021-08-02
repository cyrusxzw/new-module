import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Image } from '~/components/Image';
import { Icon } from '~/components/Icon';
import type { CardType } from './Card.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';
import styles from './Card.module.css';

const Card: CardType = ({
  heading,
  image,
  isActive = true,
  label,
  title,
  url,
}) => {
  const currentTheme = useThemeContext(null, 'dark');
  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.itemElement,
    compositionStyles.ornamentalWrapper,
    styles.leftAligned,
  );

  return (
    <Hyperlink
      className={classSet}
      tabIndex={!isActive ? -1 : null}
      theme={currentTheme}
      title={title}
      url={url}
    >
      <Heading
        hasMediumWeightFont={true}
        isFlush={true}
        level="2"
        size="xXSmall"
        theme={currentTheme}
      >
        {heading}
      </Heading>
      <Paragraph className={styles.label} isFlush={true} theme={currentTheme}>
        <span className={compositionStyles.ornamentalHover}>{label}</span>{' '}
        <Icon height={14} name="rightArrow" theme={currentTheme} width={14} />
      </Paragraph>
      <Image {...image} className={styles.image} />
    </Hyperlink>
  );
};

export { Card };
