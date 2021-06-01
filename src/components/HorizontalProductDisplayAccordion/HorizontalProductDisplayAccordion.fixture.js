import React from 'react';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import { P } from '~/components/Paragraph';

const HorizontalProductDisplayAccordionFixture = {
  addToCartCopy: {
    cartAction: 'Add to your cart',
    updateNotification: 'added to your cart',
    outOfStock: {
      label: 'Out of Stock',
      title: 'Out of stock',
    },
  },
  products: [
    {
      handleAddToCart: mockAddToCartButtonOnClick,
      closedState: {
        addToCart: {
          cartAction: 'Add to your cart',
          updateNotification: 'added to your cart',
          outOfStock: {
            label: 'Out of Stock',
            title: 'Out of stock',
          },
        },
        background: 'Video',
        backgroundColour: '#9DB5AC',
        backgroundImage: {
          type: 'image',
          sizes: {
            small:
              'https://www.aesop.com/u1nb1km7t5q7/6yw9x2JrNGlERfEdHBR8yI/290ca3aa55f5177cf8ba793796d66118/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_01_Ptolemy_Background_1500x540px__1_.gif',
            medium:
              'https://www.aesop.com/u1nb1km7t5q7/4x6r9tuhNCm2UiXlmnkokW/68ac50b0c7735a9ed766a84666853390/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_01_Ptolemy_Background_1500x540px__1_.gif',
            large:
              'https://www.aesop.com/u1nb1km7t5q7/6QgF6e03MdYKENQHsF5OqE/80b80b74ee2874da75cb710924995a30/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_01_Ptolemy_Background_1500x540px__1_.gif',
          },
        },
        backgroundVideo: {
          sizes: {
            small:
              'https://player.vimeo.com/external/524134498.hd.mp4?s=f568a040a2ba6fad0ea7fd5c8bb0e70433ba938f&profile_id=175',
            medium:
              'https://player.vimeo.com/external/524134498.hd.mp4?s=f568a040a2ba6fad0ea7fd5c8bb0e70433ba938f&profile_id=175',
            large:
              'https://player.vimeo.com/external/524134498.hd.mp4?s=f568a040a2ba6fad0ea7fd5c8bb0e70433ba938f&profile_id=175',
          },
        },
        copy: ' Balsam, leather, and light smoke',
        eyebrow: 'Cypress • Cedar • Vetiver',
        foregroundImage: {
          altText: 'Lorem ipsum dolor sit',
          sizes: {
            small:
              'https://images.ctfassets.net/u1nb1km7t5q7/5XlxK9vdyy9Bm56uVPFjTv/147183c3c92495d161eced89104ccafe/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Mobile_455x524px.png',
            medium:
              'https://images.ctfassets.net/u1nb1km7t5q7/65hEQAyMqMXx7GQa6HbBIN/d014e96f3a284e8a14a5aa9e5e3c901d/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Tablet_653x752px.png',
            large:
              'https://images.ctfassets.net/u1nb1km7t5q7/584i2txtM9Evx8gk8wXeQd/f7aa5dff18c538b5e377a8287c0a60cd/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Desktop_835x962px.png',
          },
        },
        id: 'ptolomey-closed-test',
        openButtonText: 'Discover Ptolemy',
        theme: 'light',
        title: 'Ptolemy',
        typeface: 'sans-serif',
      },
      id: 'Ptolemy',
      openState: {
        background: 'Video',
        backgroundColour: '#BEAD8F',
        backgroundVideo: {
          sizes: {
            small:
              'https://player.vimeo.com/external/524134498.hd.mp4?s=f568a040a2ba6fad0ea7fd5c8bb0e70433ba938f&profile_id=175',
            medium:
              'https://player.vimeo.com/external/524134498.hd.mp4?s=f568a040a2ba6fad0ea7fd5c8bb0e70433ba938f&profile_id=175',
            large:
              'https://player.vimeo.com/external/524134498.hd.mp4?s=f568a040a2ba6fad0ea7fd5c8bb0e70433ba938f&profile_id=175',
          },
        },
        backgroundImage: null,
        closeButtonText: 'Close',
        copy: (
          <>
            <P theme="light">
              A sensuous blend of leather, smoke and wood, named for an ancient
              Greek-Egyptian stargazer whose work informed much medieval
              astronomy.
            </P>
            <P theme="light">
              Weighs 300 g (10.5 oz), with a burn time of approximately 55–65
              hours.
            </P>
          </>
        ),
        cta: {
          text: 'Lorem ipsum dolor',
          url: '/',
        },
        eyebrow: '‘The journey is the thing.’ Homer',
        foregroundImage: {
          altText: 'Lorem ipsum dolor sit',
          sizes: {
            small:
              'https://images.ctfassets.net/u1nb1km7t5q7/4hmTzb2vPAfvAur8D0M0PW/692b1fb975b97be14ced876cf4db71aa/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_03_Callipus_Menu_1400x1020px.gif',
            medium:
              'https://images.ctfassets.net/u1nb1km7t5q7/152Y4pHKQXh1rIugZcwpDA/1ff81742d4aec35ffb6b4f4c1ec7407f/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_03_Callipus_Menu_1400x1020px.gif',
            large:
              'https://images.ctfassets.net/u1nb1km7t5q7/3jWHcEvyLuAd3JGTDyM6q6/e8047f01381756ed33cebb66adde78d4/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_03_Callipus_Menu_1400x1020px.gif',
          },
        },
        theme: 'light',
        title: 'Ptolemy Aromatique Candle',
        product: {
          variants: [
            {
              size: '50 mL - In stock',
              sku: 'ARD33',
              price: '$26.45',
              isInStock: true,
              image: {
                altText: 'alt-tag-ARD33',
                sizes: {
                  large: './assets/images/Product/variant-one-large.png',
                  medium: './assets/images/Product/variant-one-medium.png',
                  small: './assets/images/Product/variant-one-small.png',
                },
              },
            },
          ],
        },
      },
    },
    {
      handleAddToCart: mockAddToCartButtonOnClick,
      closedState: {
        addToCart: {
          cartAction: 'Add to your cart',
          updateNotification: 'added to your cart',
          outOfStock: {
            label: 'Out of Stock',
            title: 'Out of stock',
          },
        },
        background: 'Colour',
        backgroundColour: '#9DB5AC',
        backgroundImage: {
          type: 'image',
          sizes: {
            small:
              'https://www.aesop.com/u1nb1km7t5q7/P8gAwCGTwO8GjpXIlslDi/f378fff236ceb7889a115f46b96a0e4e/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
            medium:
              'https://www.aesop.com/u1nb1km7t5q7/OJVlLOTLEoQXe1sJ2Su3T/6622a59620859cfc0082aad13c26e9e7/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
            large:
              'https://www.aesop.com/u1nb1km7t5q7/3S7CwWtayFHup8Y8GbWl8q/2095a99a95e57cb94f3f64a9858072e6/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
          },
        },
        backgroundVideo: null,
        copy: 'Florals, spices and tobacco in symphony',
        eyebrow: 'Cardamon • Mimosa • Tobacco',
        foregroundImage: {
          altText: 'Lorem ipsum dolor sit',
          sizes: {
            small:
              'https://images.ctfassets.net/u1nb1km7t5q7/5XlxK9vdyy9Bm56uVPFjTv/147183c3c92495d161eced89104ccafe/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Mobile_455x524px.png',
            medium:
              'https://images.ctfassets.net/u1nb1km7t5q7/65hEQAyMqMXx7GQa6HbBIN/d014e96f3a284e8a14a5aa9e5e3c901d/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Tablet_653x752px.png',
            large:
              'https://images.ctfassets.net/u1nb1km7t5q7/584i2txtM9Evx8gk8wXeQd/f7aa5dff18c538b5e377a8287c0a60cd/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Desktop_835x962px.png',
          },
        },
        id: 'aganice-closed-test',
        openButtonText: 'Discover Aganice',
        theme: 'light',
        title: 'Aganice',
        typeface: 'sans-serif',
      },
      id: 'Aganice',
      openState: {
        background: 'Colour',
        backgroundColour: '#BEAD8F',
        backgroundVideo: null,
        backgroundImage: null,
        closeButtonText: 'Close',
        copy: (
          <>
            <P>
              Florals, spice and tobacco in symphony; titled for an Ancient
              Greek astronomer renowned for her knowledge of the moon and its
              cycles.
            </P>
            <P>
              Weighs 300 g (10.5 oz), with a burn time of approximately 55–65
              hours.
            </P>
          </>
        ),
        cta: {
          text: 'Lorem ipsum dolor',
          url: '/',
        },
        eyebrow: '‘There will be rest, and sure stars shining.’ Sara Teasdale',
        foregroundImage: {
          altText: 'Lorem ipsum dolor sit',
          sizes: {
            small:
              'https://images.ctfassets.net/u1nb1km7t5q7/4hmTzb2vPAfvAur8D0M0PW/692b1fb975b97be14ced876cf4db71aa/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_03_Callipus_Menu_1400x1020px.gif',
            medium:
              'https://images.ctfassets.net/u1nb1km7t5q7/152Y4pHKQXh1rIugZcwpDA/1ff81742d4aec35ffb6b4f4c1ec7407f/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_03_Callipus_Menu_1400x1020px.gif',
            large:
              'https://images.ctfassets.net/u1nb1km7t5q7/3jWHcEvyLuAd3JGTDyM6q6/e8047f01381756ed33cebb66adde78d4/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_03_Callipus_Menu_1400x1020px.gif',
          },
        },
        theme: 'dark',
        title: 'Aganice Aromatique Candle',
        product: {
          variants: [
            {
              size: '50 mL - In stock',
              sku: 'ARD33',
              price: '$26.45',
              isInStock: true,
              image: {
                altText: 'alt-tag-ARD33',
                sizes: {
                  large: './assets/images/Product/variant-one-large.png',
                  medium: './assets/images/Product/variant-one-medium.png',
                  small: './assets/images/Product/variant-one-small.png',
                },
              },
            },
          ],
        },
      },
    },
    {
      handleAddToCart: mockAddToCartButtonOnClick,
      closedState: {
        addToCart: {
          cartAction: 'Add to your cart',
          updateNotification: 'added to your cart',
          outOfStock: {
            label: 'Out of Stock',
            title: 'Out of stock',
          },
        },
        background: 'Image',
        backgroundColour: '#9DB5AC',
        backgroundImage: {
          sizes: {
            small:
              'https://www.aesop.com/u1nb1km7t5q7/P8gAwCGTwO8GjpXIlslDi/f378fff236ceb7889a115f46b96a0e4e/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
            medium:
              'https://www.aesop.com/u1nb1km7t5q7/OJVlLOTLEoQXe1sJ2Su3T/6622a59620859cfc0082aad13c26e9e7/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
            large:
              'https://www.aesop.com/u1nb1km7t5q7/3S7CwWtayFHup8Y8GbWl8q/2095a99a95e57cb94f3f64a9858072e6/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
          },
        },
        backgroundVideo: null,
        copy: 'Of resinous, green character',
        eyebrow: 'Vetiver • Frankincense • Shiso',
        foregroundImage: {
          altText: 'Lorem ipsum dolor sit',
          sizes: {
            small:
              'https://images.ctfassets.net/u1nb1km7t5q7/5XlxK9vdyy9Bm56uVPFjTv/147183c3c92495d161eced89104ccafe/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Mobile_455x524px.png',
            medium:
              'https://images.ctfassets.net/u1nb1km7t5q7/65hEQAyMqMXx7GQa6HbBIN/d014e96f3a284e8a14a5aa9e5e3c901d/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Tablet_653x752px.png',
            large:
              'https://images.ctfassets.net/u1nb1km7t5q7/584i2txtM9Evx8gk8wXeQd/f7aa5dff18c538b5e377a8287c0a60cd/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Product_Desktop_835x962px.png',
          },
        },
        id: 'callippus-closed-test',
        openButtonText: 'Discover Callippus',
        theme: 'light',
        title: 'Callippus',
        typeface: 'sans-serif',
      },
      id: 'Callippus',
      openState: {
        background: 'Image',
        backgroundColour: '#BEAD8F',
        backgroundVideo: null,
        backgroundImage: {
          sizes: {
            small:
              'https://www.aesop.com/u1nb1km7t5q7/P8gAwCGTwO8GjpXIlslDi/f378fff236ceb7889a115f46b96a0e4e/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
            medium:
              'https://www.aesop.com/u1nb1km7t5q7/OJVlLOTLEoQXe1sJ2Su3T/6622a59620859cfc0082aad13c26e9e7/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
            large:
              'https://www.aesop.com/u1nb1km7t5q7/3S7CwWtayFHup8Y8GbWl8q/2095a99a95e57cb94f3f64a9858072e6/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Background_1500x540px.gif',
          },
        },
        closeButtonText: 'Close',
        copy: (
          <>
            <P theme="light">
              A marriage of deep greens and earthy spices, Callippus takes its
              name from an astronomer of Ancient Greece famed for refining
              planetary theory.
            </P>
            <P theme="light">
              Weighs 300 g (10.5 oz), with a burn time of approximately 55–65
              hours.
            </P>
          </>
        ),
        cta: {
          text: 'Lorem ipsum dolor',
          url: '/',
        },
        eyebrow:
          '‘I have loved the stars too truly to be fearful of the night.’ Sarah Williams',
        foregroundImage: {
          altText: 'Lorem ipsum dolor sit',
          sizes: {
            small:
              'https://www.aesop.com/u1nb1km7t5q7/5Wv5unZ25IAa6JgQdrgHd6/d90583612f388a2660c2cfdd701e5bf0/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Menu_740x540px.gif',
            medium:
              'https://www.aesop.com/u1nb1km7t5q7/2FzYsUIw8a63E5lKq6wPDJ/a7ae6170ee9fc69e82a4aee8d077b2b6/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Menu_740x540px.gif',
            large:
              'https://www.aesop.com/u1nb1km7t5q7/G9zojTVhSS2xo8xZR68ET/e0550911d3a18c8bb54a271e18b7ef0c/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Accordion_02_Aganice_Menu_740x540px.gif',
          },
        },
        theme: 'light',
        title: 'Callippus Aromatique Candle',
        product: {
          variants: [
            {
              size: '50 mL - In stock',
              sku: 'ARD33',
              price: '$26.45',
              isInStock: true,
              image: {
                altText: 'alt-tag-ARD33',
                sizes: {
                  large: './assets/images/Product/variant-one-large.png',
                  medium: './assets/images/Product/variant-one-medium.png',
                  small: './assets/images/Product/variant-one-small.png',
                },
              },
            },
          ],
        },
      },
    },
  ],
};

export { HorizontalProductDisplayAccordionFixture };
