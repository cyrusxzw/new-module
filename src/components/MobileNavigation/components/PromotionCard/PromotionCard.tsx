import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Image } from '~/components/Image';
import { Icon } from '~/components/Icon';
import type { PromotionCardType } from './PromotionCard.types';
import compositionStyles from '../../MobileNavigation.module.css';
import styles from './PromotionCard.module.css';

const PromotionCard: PromotionCardType = ({
  heading,
  image,
  isVisible = true,
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
      tabIndex={!isVisible ? -1 : null}
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

export { PromotionCard };
