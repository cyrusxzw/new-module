import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddToCartButton } from '~/components/AddToCartButton';
import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { LinkButtonGroup } from '~/components/LinkButtonGroup/index.ts';
import { Video } from '~/components/Video';
import styles from './AccordionProduct.module.css';

const AccordionProduct = forwardRef(
  (
    {
      addToCartCopy,
      callbackWithRef,
      closedState,
      id,
      index,
      isCompressed,
      isExpanded,
      onPromoClick,
      openState,
      resetAccordion,
      toggleAccordion,
    },
    ref,
  ) => {
    callbackWithRef?.(ref);

    const classSet = cx(
      styles.base,
      isExpanded && styles.isExpanded,
      isCompressed && styles.isCompressed,
    );

    const onClick = isCompressed ? () => resetAccordion() : undefined;
    const onKeyDown = isCompressed ? () => resetAccordion() : undefined;
    const handleOnCloseClick = () => toggleAccordion(index, false);

    return (
      <div
        className={classSet}
        data-testid="data-testid-AccordionProduct"
        id={id}
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={ref}
        role="button"
        tabIndex={isCompressed ? 0 : -1}
      >
        <div
          className={cx(styles.background, isExpanded && styles.hidden)}
          style={{ backgroundColor: closedState?.backgroundColour }}
        >
          {closedState.background === 'Video' && (
            <Video
              className={styles.backgroundVideo}
              hasAllowAudio={false}
              hasAutoplay={true}
              hasControls={false}
              hasLoop={true}
              isMuted={true}
              {...closedState.backgroundVideo}
            />
          )}
          {closedState.background === 'Image' && (
            <Image
              className={styles.backgroundImage}
              {...closedState.backgroundImage}
            />
          )}
        </div>

        <div
          className={cx(
            styles.content,
            isExpanded || isCompressed ? styles.hidden : '',
          )}
        >
          {closedState?.title && (
            <Heading
              hasSerifFont={closedState.hasSerifFont}
              level="2"
              size="xLarge"
              theme={closedState.theme}
            >
              {closedState?.title}
            </Heading>
          )}
          {closedState?.eyebrow && (
            <Heading
              hasMediumWeightFont={true}
              level="4"
              size="xSmall"
              theme={closedState.theme}
            >
              {closedState?.eyebrow}
            </Heading>
          )}
          <div className={cx(styles.closedCopy, styles[closedState.theme])}>
            {closedState?.copy}
          </div>
          <button
            className={cx(styles.openButton, styles[closedState.theme])}
            onClick={() => {
              toggleAccordion(index, true);
              onPromoClick();
            }}
          >
            {closedState?.openButtonText}
          </button>
          <Button
            className={cx(styles.closedStateForegroundImage)}
            isInline={true}
            onClick={() => {
              toggleAccordion(index, true);
              onPromoClick();
            }}
          >
            <Image
              className={cx(styles.closedForegroundImage)}
              {...closedState.foregroundImage}
            />
          </Button>
        </div>

        <div
          className={cx(styles.expanded, isExpanded ? styles.open : '')}
          style={{ backgroundColor: openState.backgroundColour }}
        >
          {openState.background === 'Video' && (
            <Video
              className={styles.backgroundVideo}
              hasAllowAudio={false}
              hasAutoplay={true}
              hasControls={false}
              hasLoop={true}
              isMuted={true}
              {...openState.backgroundVideo}
            />
          )}
          {openState.background === 'Image' && (
            <Image
              className={styles.backgroundImage}
              {...openState.backgroundImage}
            />
          )}
          <div className={cx(styles.expandedContent)}>
            <div className={cx(styles.expandedImage)}>
              <Image {...openState.foregroundImage} />
            </div>
            <div className={cx(styles.expandedText)}>
              {openState?.title && (
                <Heading
                  className={styles.openStateHeading}
                  hasSerifFont={openState?.hasSerifFont}
                  level="2"
                  size="xLarge"
                  theme={openState.theme}
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
                  theme={openState.theme}
                >
                  {openState?.eyebrow}
                </Heading>
              )}
              <div className={cx(styles.openCopy, styles[openState.theme])}>
                {openState?.copy}
              </div>
              <LinkButtonGroup
                isFlush={false}
                isFullWidth={true}
                theme={openState.theme}
              >
                <AddToCartButton copy={addToCartCopy} theme={openState.theme} />
                {openState?.cta && (
                  <Hyperlink
                    isAlternate={false}
                    style="Internal Button Link"
                    theme={openState.theme}
                    url={openState?.cta.url}
                  >
                    {openState?.cta.text}
                  </Hyperlink>
                )}
              </LinkButtonGroup>
            </div>
          </div>
          <button
            className={cx(styles.closeButton, styles[openState.theme])}
            onClick={handleOnCloseClick}
          >
            {openState.closeButtonText}
          </button>
        </div>
      </div>
    );
  },
);

AccordionProduct.propTypes = {
  addToCartCopy: PropTypes.shape({
    cartAction: PropTypes.string,
    updateNotification: PropTypes.string,
    outOfStock: PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  callbackWithRef: PropTypes.func,
  closedState: PropTypes.shape({
    background: PropTypes.oneOf(['Colour', 'Image', 'Video']),
    backgroundColour: PropTypes.string,
    backgroundImage: PropTypes.object,
    backgroundVideo: PropTypes.object,
    copy: PropTypes.node,
    eyebrow: PropTypes.string,
    foregroundImage: PropTypes.object,
    hasSerifFont: PropTypes.bool,
    id: PropTypes.string,
    openButtonText: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.string,
  }),
  isCompressed: PropTypes.bool,
  isExpanded: PropTypes.bool,
  id: PropTypes.string,
  index: PropTypes.number,
  onPromoClick: PropTypes.func,
  openState: PropTypes.shape({
    background: PropTypes.oneOf(['Colour', 'Image', 'Video']),
    backgroundColour: PropTypes.string,
    backgroundImage: PropTypes.object,
    backgroundVideo: PropTypes.object,
    closeButtonText: PropTypes.string,
    copy: PropTypes.node,
    cta: PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    }),
    eyebrow: PropTypes.string,
    foregroundImage: PropTypes.object,
    hasSerifFont: PropTypes.bool,
    theme: PropTypes.string,
    title: PropTypes.string,
    product: PropTypes.object,
  }),
  resetAccordion: PropTypes.func,
  toggleAccordion: PropTypes.func,
};

AccordionProduct.defaultProps = {
  addToCartCopy: {
    cartAction: undefined,
    updateNotification: undefined,
    outOfStock: {
      label: undefined,
      title: undefined,
    },
  },
  callbackWithRef: undefined,
  closedState: {
    background: undefined,
    backgroundColour: undefined,
    backgroundImage: undefined,
    backgroundVideo: undefined,
    copy: undefined,
    eyebrow: undefined,
    foregroundImage: undefined,
    hasSerifFont: false,
    theme: 'dark',
    title: undefined,
  },
  isCompressed: false,
  isExpanded: false,
  id: undefined,
  index: undefined,
  onPromoClick: () => undefined,
  openState: {
    background: undefined,
    backgroundColour: undefined,
    backgroundImage: undefined,
    backgroundVideo: undefined,
    copy: undefined,
    eyebrow: undefined,
    foregroundImage: undefined,
    hasSerifFont: false,
    theme: 'dark',
    title: undefined,
  },
  resetAccordion: undefined,
  toggleAccordion: undefined,
};

export { AccordionProduct };
