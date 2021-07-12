import React from 'react';
import { Image } from '~/components/Image';
import { DoubleMedia } from '~/components/DoubleMedia';
import { GoogleMap } from '~/components/GoogleMap/index.ts';
import { Heading } from '~/components/Heading/index.ts';
import { ImageCarousel } from '~/components/ImageCarousel/index.ts';
import { P } from '~/components/Paragraph';
import { Podium } from '~/components/Podium/index.ts';
import { TwoColumnLayout } from '~/components/TwoColumnLayout/index.ts';
import { StoreDetailHeader } from '~/components/StoreDetailHeader/index.ts';
import { GoogleMapFixture } from '~/components/GoogleMap/GoogleMap.fixture';
import { StoreHoursListFixture } from '~/components/StoreHoursList/StoreHoursList.fixture';
import { StoreDetailHeaderFixture } from '~/components/StoreDetailHeader/StoreDetailHeader.fixture';
import { StoreDetailFixture } from './StoreDetail.fixture';
import type { StoreDetailType } from './StoreDetail.types';
import type { MediaType } from '~/components/DoubleMedia/components/MediaBlock/MediaBlock.types';

const StoreDetail: StoreDetailType = ({ className, theme }) => (
  <div className={className}>
    <Podium horizontalPadding="small" verticalPadding="small">
      <StoreDetailHeader
        alternateHoursNote={StoreHoursListFixture.alternateHoursNote}
        copy={{
          location: StoreDetailHeaderFixture.copy.location,
          openingHours: StoreDetailHeaderFixture.copy.openingHours,
          phone: StoreDetailHeaderFixture.copy.phone,
          email: StoreDetailHeaderFixture.copy.email,
        }}
        email={StoreDetailHeaderFixture.email}
        location={StoreDetailHeaderFixture.location}
        openingHours={StoreHoursListFixture.hoursList}
        phone={StoreDetailHeaderFixture.phone}
        storeName={StoreDetailHeaderFixture.storeName}
        theme={theme}
      />
    </Podium>

    <Podium verticalPadding="small">
      <Image
        altText={StoreDetailFixture.storeImage.altText}
        cta={{
          url: '',
        }}
        sizes={StoreDetailFixture.storeImage.sizes}
      />
    </Podium>

    <Podium horizontalPadding="small" verticalPadding="small">
      <TwoColumnLayout
        content={
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque eleifend ipsum, id sagittis eros laoreet ut. Fusce
            rutrum purus id iaculis molestie. Nulla lacinia luctus ante ut
            egestas. Nunc tincidunt purus eu sagittis suscipit. Aenean
            sollicitudin nisi faucibus sagittis lacinia. Aenean tellus lorem,
            euismod nec accumsan vestibulum, rhoncus vel lectus. Etiam sed
            tortor in ipsum congue bibendum id nec erat.
          </P>
        }
        hasFullWidthContent={true}
        isReversed={true}
        sidebar={
          <Heading hasSerifFont={true} level="2" size="large">
            Lorem ipsum dolor sit amet consectetur
          </Heading>
        }
      />
    </Podium>

    <Podium horizontalPadding="small" verticalPadding="small">
      <DoubleMedia
        mediaOne={{
          type: StoreDetailFixture.doubleMedia.imageOne.type as MediaType,
          altText: StoreDetailFixture.doubleMedia.imageOne.altText,
          sizes: StoreDetailFixture.doubleMedia.imageOne.sizes,
        }}
        mediaTwo={{
          type: StoreDetailFixture.doubleMedia.imageOne.type as MediaType,
          altText: StoreDetailFixture.doubleMedia.imageTwo.altText,
          sizes: StoreDetailFixture.doubleMedia.imageTwo.sizes,
        }}
      />
    </Podium>

    <Podium horizontalPadding="small" verticalPadding="small">
      <TwoColumnLayout
        content={
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque eleifend ipsum, id sagittis eros laoreet ut. Fusce
            rutrum purus id iaculis molestie. Nulla lacinia luctus ante ut
            egestas. Nunc tincidunt purus eu sagittis suscipit. Aenean
            sollicitudin nisi faucibus sagittis lacinia. Aenean tellus lorem,
            euismod nec accumsan vestibulum, rhoncus vel lectus. Etiam sed
            tortor in ipsum congue bibendum id nec erat.
          </P>
        }
        isReversed={true}
      />
    </Podium>

    <Podium horizontalPadding="small" verticalPadding="small">
      <ImageCarousel slides={StoreDetailFixture.slides} />
    </Podium>

    <Podium horizontalPadding="small" verticalPadding="small">
      <GoogleMap
        center={{
          lat: GoogleMapFixture.places[0].lat,
          lng: GoogleMapFixture.places[0].lng,
        }}
        id="store-detail-map"
        places={[GoogleMapFixture.places[0]]}
      />
    </Podium>
  </div>
);

export { StoreDetail };
