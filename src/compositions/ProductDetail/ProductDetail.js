import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Carousel } from '~/components/Carousel';
import { DefinitionList } from '~/components/DefinitionList';
import { Image } from '~/components/Image';
import { KitList } from '~/components/KitList';
import { MediaWithContent } from '~/components/MediaWithContent';
import { Podium } from '~/components/Podium';
import { ProductDetailHeader } from '~/components/ProductDetailHeader';
import { Quote } from '~/components/Quote';
import styles from './ProductDetail.module.css';

const ProductDetail = ({
  __asideDetails1,
  __asideDetails2,
  breadcrumbs,
  className,
  copy,
  quote,
  relatedProducts,
}) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet} style={{ backgroundColor: '#fffeef' }}>
      <ProductDetailHeader
        breadcrumbs={breadcrumbs}
        copy={copy?.productHeader}
      />

      <MediaWithContent
        backgroundColor="#fffeef"
        content={<DefinitionList items={__asideDetails1.definitionListItems} />}
        copy={{
          eyebrow: __asideDetails1.copy.eyebrow,
          heading: __asideDetails1.copy.heading,
        }}
        media={
          <Image
            altText={__asideDetails1.image.altText}
            sizes={__asideDetails1.image.sizes}
          />
        }
        theme="dark"
      />

      <Podium verticalPadding="large">
        <Quote author={quote.author} content={quote.content} theme="dark" />
      </Podium>

      <MediaWithContent
        content={<KitList items={__asideDetails2.kitListItems} />}
        copy={__asideDetails2.copy}
        media={
          <Image
            altText={__asideDetails2.image.altText}
            sizes={__asideDetails2.image.sizes}
          />
        }
        theme="dark"
      />

      <Podium verticalPadding="medium">
        <Carousel
          className={styles.asideProducts}
          introduction={relatedProducts.introduction}
          slides={relatedProducts.slides}
        />
      </Podium>
    </div>
  );
};

ProductDetail.propTypes = {
  __asideDetails1: PropTypes.object,
  __asideDetails2: PropTypes.object,
  breadcrumbs: PropTypes.object,
  className: PropTypes.string,
  copy: PropTypes.shape({
    productHeader: PropTypes.shape({
      ingredients: PropTypes.shape({
        heading: PropTypes.string,
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
  product: PropTypes.object,
  quote: PropTypes.object,
  relatedProducts: PropTypes.object,
};

ProductDetail.defaultProps = {
  __asideDetails1: undefined,
  __asideDetails2: undefined,
  breadcrumbs: undefined,
  className: undefined,
  copy: undefined,
  product: undefined,
  quote: undefined,
  relatedProducts: undefined,
};

export { ProductDetail };
