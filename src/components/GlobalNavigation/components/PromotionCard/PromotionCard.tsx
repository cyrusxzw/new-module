import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { Image } from '~/components/Image';
import { Paragraph } from '~/components/Paragraph';
import type { PromotionCardType } from './PromotionCard.types';
import compositionStyles from '../MobileView/MobileView.module.css';
import styles from './PromotionCard.module.css';

const PromotionCard: PromotionCardType = ({
  className,
  heading,
  image,
  isFlush = false,
  isVisible = true,
  label,
  dataTestRef,
  title,
  url,
}) => {
  const currentTheme = useThemeContext(undefined, 'dark');

  if (!heading || !label) return null;

  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.itemElement,
    styles.ornamentalWrapper,
    styles.leftAligned,
    { [styles.flush]: isFlush },
    className,
  );

  return (
    <Hyperlink
      className={classSet}
      dataTestRef={dataTestRef}
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
        <span className={styles.ornamentalHover}>{label}</span>{' '}
        <Icon height={14} name="rightArrow" theme={currentTheme} width={14} />
      </Paragraph>

      <Image {...image} className={styles.image} />
    </Hyperlink>
  );
};

export { PromotionCard };
