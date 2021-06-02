import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { uid } from 'react-uid';
import {
  AddToCartContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { useWindowHasResized } from '~/customHooks';
import { isViewport } from '~/utils/viewport';
import { ProductAccordionItem } from './components/ProductAccordionItem';
import type { ReactElement } from 'react';
import type { ProductAccordionProps } from './ProductAccordion.types';
import type { ToggleAccordion } from './components/ProductAccordionItem/ProductAccordionItem.types';
import styles from './ProductAccordion.module.css';

function ProductAccordion({
  id,
  products,
  addToCartCopy,
}: ProductAccordionProps): ReactElement {
  const [accordionProducts, setAccordionProducts] = useState(products);

  useEffect(() => {
    const resetAccordionOnResize = debounce(() => {
      accordionProducts.map((product) => {
        product.visualState = 'default';
      });
    }, 200);

    window.addEventListener('resize', resetAccordionOnResize);

    return function callback() {
      window.removeEventListener('resize', resetAccordionOnResize);
    };
  }, [accordionProducts]);

  useWindowHasResized();

  const toggleAccordion: ToggleAccordion = (index, isOpening) => {
    setAccordionProducts(
      accordionProducts.map((product, productIndex) => {
        const isCurrentItem = productIndex === index;

        if (isViewport('xs to sm only')) {
          if (isOpening) {
            if (isCurrentItem) {
              product.visualState = 'expanded';
            }
          } else {
            if (isCurrentItem) {
              product.visualState = 'default';
            }
          }
        } else {
          if (isOpening) {
            if (isCurrentItem) {
              product.visualState = 'expanded';
            } else {
              product.visualState = 'compressed';
            }
          } else {
            product.visualState = 'default';
          }
        }
        return product;
      }),
    );
  };

  const resetAccordion = () => {
    setAccordionProducts(
      accordionProducts.map((product) => {
        product.visualState = 'default';
        return product;
      }),
    );
  };

  return (
    <div className={styles.base} id={id}>
      {accordionProducts.map((product, index: number) => (
        <AddToCartContextProvider
          key={uid(product)}
          onClick={product.handleAddToCart}
        >
          <VariantSelectContextProvider
            variants={product.openState.product.variants}
          >
            <ProductAccordionItem
              addToCartCopy={addToCartCopy}
              index={index}
              resetAccordion={resetAccordion}
              toggleAccordion={toggleAccordion}
              {...product}
            />
          </VariantSelectContextProvider>
        </AddToCartContextProvider>
      ))}
    </div>
  );
}

export { ProductAccordion };
