import React, { useRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '../../GlobalNavigation.context';
import { useExecuteOnImpression } from '~/customHooks';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { Image } from '~/components/Image';
import { Paragraph } from '~/components/Paragraph';
import type {
  PromotionCardType,
  PromotionCardClickTrackingType,
  PromotionCardImpressionTrackingType,
} from './PromotionCard.types';
import compositionStyles from '../MobileView/MobileView.module.css';
import styles from './PromotionCard.module.css';

const PromotionCard: PromotionCardType = ({
  className,
  dataTestRef,
  heading,
  id,
  image,
  isFlush = false,
  isVisible = true,
  label,
  title,
  url,
}) => {
  const currentTheme = useThemeContext(undefined, 'dark');

  const { trackingCallbacks } = useGlobalNavigationContext();
  const { menuCategoryLabel } = useGlobalNavigationStateContext();
  const promotionCardRef = useRef();

  /* Tracking Information */
  const promotionCardImpressionTrackingProps: PromotionCardImpressionTrackingType = {
    id,
    creative: image.creative,
    position: menuCategoryLabel,
    isVisible: isVisible,
  };
  const promotionCardClickTrackingProps: PromotionCardClickTrackingType = {
    ...promotionCardImpressionTrackingProps,
    englishLabel: image.id,
  };

  const promotionCardImpressionOptions = {
    threshold: 0.2,
    isExecutableOnReEntry: false,
  };

  useExecuteOnImpression(
    promotionCardRef,
    () =>
      trackingCallbacks.common.promotionCardImpression(
        promotionCardImpressionTrackingProps,
      ),
    promotionCardImpressionOptions,
  );

  const handleTracking = () => {
    trackingCallbacks.common.promotionCardClick(
      promotionCardClickTrackingProps,
    );
  };

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
      onClick={handleTracking}
      ref={promotionCardRef}
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
        <Icon
          className={styles.rightArrow}
          height={14}
          name="rightArrow"
          theme={currentTheme}
          width={14}
        />
      </Paragraph>

      <Image {...image} className={styles.image} />
    </Hyperlink>
  );
};

export { PromotionCard };
