import React, { forwardRef } from 'react';
import cx from 'classnames';
import { AddToCartButton } from '~/components/AddToCartButton';
import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { LinkButtonGroup } from '~/components/LinkButtonGroup/index.ts';
import { Video } from '~/components/Video';
import type { ProductAccordionItemProps } from './ProductAccordionItem.types';
import styles from './ProductAccordionItem.module.css';

const ProductAccordionItem = forwardRef<
  HTMLDivElement,
  ProductAccordionItemProps
>(function ProductAccordionItemRef(
  {
    addToCartCopy,
    callbackWithRef,
    closedState,
    id,
    index,
    onPromoClick,
    openState,
    resetAccordion,
    toggleAccordion,
    visualState,
  },
  ref,
) {
  callbackWithRef?.(ref);

  const isCompressed = visualState === 'compressed';
  const isExpanded = visualState === 'expanded';
  const handleOnClick = isCompressed ? () => resetAccordion() : undefined;
  const handleOnKeyDown = isCompressed ? () => resetAccordion() : undefined;
  const handleOnCloseClick = () => toggleAccordion(index, false);
  const style = { backgroundColor: closedState?.backgroundColour };
  const classSet = cx(styles.base, { [styles.compressed]: isCompressed });

  const backgroundClassSet = cx(styles.background, {
    [styles.hidden]: isExpanded,
  });

  const contentClassSet = cx(styles.content, {
    [styles.hidden]: isExpanded || isCompressed,
  });

  const handleOpenButtonOnClick = () => {
    toggleAccordion(index, true);
    onPromoClick?.();
  };

  return (
    <div
      className={classSet}
      data-testid="data-testid-ProductAccordionItem"
      id={id}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      ref={ref}
      role="button"
      tabIndex={isCompressed ? 0 : -1}
    >
      <div className={backgroundClassSet} style={style}>
        {closedState?.background === 'Video' && (
          <Video
            className={styles.backgroundVideo}
            hasAllowAudio={false}
            hasAutoplay={true}
            hasControls={false}
            hasLoop={true}
            {...closedState?.backgroundVideo}
          />
        )}
        {closedState?.background === 'Image' && (
          <Image
            className={styles.backgroundImage}
            {...closedState?.backgroundImage}
          />
        )}
      </div>

      <div className={contentClassSet}>
        {closedState?.title && (
          <Heading
            hasSerifFont={closedState?.hasSerifFont}
            level="2"
            size="xLarge"
            theme={closedState?.theme}
          >
            {closedState?.title}
          </Heading>
        )}
        {closedState?.eyebrow && (
          <Heading
            hasMediumWeightFont={true}
            level="4"
            size="xSmall"
            theme={closedState?.theme}
          >
            {closedState?.eyebrow}
          </Heading>
        )}
        <div className={cx(styles.closedCopy, styles[closedState?.theme])}>
          {closedState?.copy}
        </div>
        <button
          className={cx(styles.openButton, styles[closedState?.theme])}
          onClick={handleOpenButtonOnClick}
        >
          {closedState?.openButtonText}
        </button>
        <Button
          className={styles.closedStateForegroundImage}
          isInline={true}
          onClick={() => {
            toggleAccordion(index, true);
            onPromoClick?.();
          }}
        >
          <Image
            className={cx(styles.closedForegroundImage)}
            {...closedState?.foregroundImage}
          />
        </Button>
      </div>

      <div
        className={cx(styles.expanded, { [styles.open]: isExpanded })}
        style={{ backgroundColor: openState?.backgroundColour }}
      >
        {openState?.background === 'Video' && (
          <Video
            className={styles.backgroundVideo}
            hasAllowAudio={false}
            hasAutoplay={true}
            hasControls={false}
            hasLoop={true}
            {...openState?.backgroundVideo}
          />
        )}
        {openState?.background === 'Image' && (
          <Image
            className={styles.backgroundImage}
            {...openState?.backgroundImage}
          />
        )}
        <div className={styles.expandedContent}>
          <div className={styles.expandedImage}>
            <Image {...openState?.foregroundImage} />
          </div>
          <div className={styles.expandedText}>
            {openState?.title && (
              <Heading
                className={styles.openStateHeading}
                hasSerifFont={openState?.hasSerifFont}
                level="2"
                size="xLarge"
                theme={openState?.theme}
              >
                {openState?.title}
              </Heading>
            )}
            {openState?.eyebrow && (
              <Heading
                className={styles.openStateEyebrow}
                hasMediumWeightFont={true}
                level="4"
                size="xSmall"
                theme={openState?.theme}
              >
                {openState?.eyebrow}
              </Heading>
            )}
            <div className={cx(styles.openCopy, styles[openState?.theme])}>
              {openState?.copy}
            </div>
            <LinkButtonGroup
              isFlush={false}
              isFullWidth={true}
              theme={openState?.theme}
            >
              <AddToCartButton
                copy={addToCartCopy}
                dataTestRef="PRODUCT_ACCORDION"
                theme={openState?.theme}
              />
              {openState?.cta && (
                <Hyperlink
                  isAlternate={false}
                  style="Internal Button Link"
                  theme={openState?.theme}
                  url={openState?.cta.url}
                >
                  {openState?.cta.text}
                </Hyperlink>
              )}
            </LinkButtonGroup>
          </div>
        </div>
        <button
          className={cx(styles.closeButton, styles[openState?.theme])}
          onClick={handleOnCloseClick}
        >
          {openState?.closeButtonText}
        </button>
      </div>
    </div>
  );
});

export { ProductAccordionItem };
