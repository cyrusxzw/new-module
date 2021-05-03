import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeContext, useVariantSelectContext } from '~/contexts';
import { useImageTransition } from '~/customHooks';
import { Figure } from '~/components/Figure';
import { Hidden } from '~/components/Hidden';
import { Image } from '~/components/Image';
import { Transition } from '~/components/Transition';
import styles from './ProductDetailImage.module.css';

const ProductDetailImage = ({ className, theme }) => {
  const imageRef = useRef();
  const currentTheme = useThemeContext(theme, 'dark');
  const { selectedVariant } = useVariantSelectContext();
  const { cartDisclaimer } = selectedVariant;
  const [currentImage, isImageActive] = useImageTransition(
    selectedVariant?.image,
    imageRef,
    600,
    {
      cartDisclaimer,
    },
  );

  if (!selectedVariant?.image) return null;

  const classSet = cx(styles.base, styles[currentTheme], className);
  const {
    altText,
    sizes,
    cartDisclaimer: currentCartDisclaimer,
  } = currentImage;

  return (
    <Transition isActiveOnMount={true} type="shiftInLeft">
      <div className={classSet}>
        <Transition isActive={isImageActive} type="fade">
          <Figure>
            <Image
              altText={altText}
              className={styles.image}
              ref={imageRef}
              sizes={sizes}
            />
            {currentCartDisclaimer && (
              <Hidden isMedium={true} isSmall={true}>
                <div className={styles.cartDisclaimer}>
                  <span>{currentCartDisclaimer}</span>
                </div>
              </Hidden>
            )}
          </Figure>
        </Transition>
      </div>
    </Transition>
  );
};

ProductDetailImage.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailImage.defaultProps = {
  className: undefined,
  theme: undefined,
};

export { ProductDetailImage };
