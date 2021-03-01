import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import cx from 'classnames';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts/index.ts';
import { useWindowHasResized } from '~/customHooks';
import { ascertainIsSmallOnlyViewport } from '~/utils/viewports';
import { AccordionProduct } from './components/AccordionProduct';
import styles from './HorizontalProductDisplayAccordion.module.css';

const HorizontalProductDisplayAccordion = ({ id, products, addToCartCopy }) => {
  const [accordionProducts, toggleAccordionProducts] = useState(products);
  const [accordionActive, toggleAccordionActiveState] = useState(false);
  const isMobile = ascertainIsSmallOnlyViewport();

  useEffect(() => {
    let currentSize = ascertainIsSmallOnlyViewport();

    const resetAccordionOnResize = debounce(() => {
      if (ascertainIsSmallOnlyViewport() !== currentSize) {
        accordionProducts.map(product => {
          product.isExpanded = false;
          product.isCompressed = false;
        });

        currentSize = ascertainIsSmallOnlyViewport();
      }
    }, 200);

    window.addEventListener('resize', resetAccordionOnResize);

    return function callback() {
      window.removeEventListener('resize', resetAccordionOnResize);
    };
  }, [accordionProducts]);

  useWindowHasResized();

  const toggleAccordion = (index, opening) => {
    toggleAccordionProducts(
      accordionProducts.map((product, productIndex) => {
        if (isMobile) {
          if (opening) {
            if (productIndex === index) {
              product.isExpanded = true;
            }
          } else {
            if (productIndex === index) {
              product.isExpanded = false;
            }
          }
        } else {
          if (opening) {
            if (productIndex === index) {
              product.isExpanded = true;
              product.isCompressed = false;
            } else {
              product.isExpanded = false;
              product.isCompressed = true;
            }
            toggleAccordionActiveState(true);
          } else {
            if (productIndex === index) {
              product.isExpanded = false;
              product.isCompressed = false;
            } else {
              product.isExpanded = false;
              product.isCompressed = false;
            }
            toggleAccordionActiveState(false);
          }
        }
        return product;
      }),
    );
  };

  const resetAccordion = () => {
    toggleAccordionProducts(
      accordionProducts.map(product => {
        product.isExpanded = false;
        product.isCompressed = false;
        return product;
      }),
    );
  };

  return (
    <div
      className={(accordionActive ? 'accordion-active ' : '') + cx(styles.base)}
      id={id}
    >
      {accordionProducts.map(({ ...product }, productIndex) => {
        return (
          <AddToCartContextProvider
            key={productIndex}
            onClick={product.handleAddToCart}
          >
            <ProductDetailContextProvider
              product={{
                description: product.openState.eyebrow,
                productName: product.openState.title,
              }}
            >
              <VariantSelectContextProvider
                variants={product.openState.product.variants}
              >
                <AccordionProduct
                  addToCartCopy={addToCartCopy}
                  index={productIndex}
                  resetAccordion={resetAccordion}
                  toggleAccordion={toggleAccordion}
                  {...product}
                />
              </VariantSelectContextProvider>
            </ProductDetailContextProvider>
          </AddToCartContextProvider>
        );
      })}
    </div>
  );
};

HorizontalProductDisplayAccordion.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  addToCartCopy: PropTypes.shape({
    cartAction: PropTypes.string,
    updateNotification: PropTypes.string,
    outOfStock: PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  openIndex: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      closedState: PropTypes.shape({
        background: PropTypes.oneOf(['Colour', 'Image', 'Video']),
        backgroundColour: PropTypes.string,
        backgroundImage: PropTypes.object,
        backgroundVideo: PropTypes.object,
        copy: PropTypes.node,
        eyebrow: PropTypes.string,
        foregroundImage: PropTypes.object,
        id: PropTypes.string,
        openButtonText: PropTypes.string,
        theme: PropTypes.string,
        title: PropTypes.string,
      }),
      handleAddToCart: PropTypes.func,
      isCompressed: PropTypes.bool,
      isExpanded: PropTypes.bool,
      id: PropTypes.string,
      index: PropTypes.number,
      openState: PropTypes.shape({
        background: PropTypes.oneOf(['Colour', 'Image', 'Video']),
        backgroundColour: PropTypes.string,
        backgroundImage: PropTypes.object,
        backgroundVideo: PropTypes.object,
        closeButtonText: PropTypes.string,
        copy: PropTypes.node,
        eyebrow: PropTypes.string,
        foregroundImage: PropTypes.object,
        product: PropTypes.shape({
          variants: PropTypes.arrayOf(
            PropTypes.shape({
              inStock: PropTypes.bool,
              price: PropTypes.string,
              size: PropTypes.string,
              sku: PropTypes.string,
            }),
          ),
        }),
        theme: PropTypes.string,
        title: PropTypes.string,
      }),
      toggleAccordion: PropTypes.func,
    }),
  ),
};

HorizontalProductDisplayAccordion.defaultProps = {
  className: undefined,
  id: undefined,
  openIndex: null,
  addToCartCopy: {
    cartAction: undefined,
    updateNotification: undefined,
    outOfStock: {
      label: undefined,
      title: undefined,
    },
  },
  products: {
    closedState: {
      background: 'Image',
      backgroundColour: undefined,
      backgroundImage: undefined,
      backgroundVideo: undefined,
      closeButtonText: undefined,
      copy: undefined,
      eyebrow: undefined,
      foregroundImage: undefined,
      id: undefined,
      theme: undefined,
      title: undefined,
    },
    handleAddToCart: undefined,
    isCompressed: undefined,
    isExpanded: undefined,
    id: undefined,
    index: undefined,
    openState: {
      background: 'Colour',
      backgroundColour: undefined,
      backgroundImage: undefined,
      backgroundVideo: undefined,
      copy: undefined,
      eyebrow: undefined,
      foregroundImage: undefined,
      openButtonText: undefined,
      product: {
        variants: [
          {
            inStock: undefined,
            price: undefined,
            size: undefined,
            sku: undefined,
          },
        ],
      },
      theme: undefined,
      title: undefined,
    },
    toggleAccordion: undefined,
  },
};

export { HorizontalProductDisplayAccordion };
