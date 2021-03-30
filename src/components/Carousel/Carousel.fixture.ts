import type { CarouselProps } from './Carousel.types';

const CarouselFixture: CarouselProps = {
  autoplaySpeed: 3000,
  hasAutoplay: false,
  introduction: {
    cta: {
      style: 'Internal Text Link',
      title: 'Aenean ac tortor',
      url: '/',
      text: 'Aenean ac tortor',
    },
    eyebrow: 'Aenean ac tortor consectetur',
    heading: 'Maecenas elementum',
    description:
      'Maecenas elementum, metus id facilisis placerat, turpis diam sodales velit, quis sodales ipsum nunc nec velit. Aenean ac tortor consectetur, volutpat massa sed, ultricies orci.',
  },
  slides: [
    {
      url: '/',
      description: 'Vivamus sollicitudin ac ligula',
      caption: 'Vivamus sollicitudin ac ligula',
      heading: 'Quisque non enim efficitur',
      image: {
        altText: 'Quisque non enim efficitur',
        small:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
        medium:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
        large:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
      },
    },
    {
      url: '/',
      description: 'Suspendisse elit mauris',
      caption: 'Suspendisse elit mauris',
      heading: 'Phasellus posuere porta varius',
      image: {
        altText: 'Phasellus posuere porta varius',
        small:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
        medium:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
        large:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
      },
    },
    {
      url: '/',
      description: 'Aliquam metus enim, pellentesque eu',
      caption: 'Aliquam metus enim, pellentesque eu',
      heading: 'Etiam at pharetra nisl',
      image: {
        altText: 'Etiam at pharetra nisl',
        small:
          'https://www.aesop.com/medias/Aesop-Resurrection-Duet-with-Product-Small-863x524px.png?context=bWFzdGVyfGltYWdlc3wxMjYxNTN8aW1hZ2UvcG5nfGltYWdlcy9oOTgvaDRmLzkxMTA3OTc5MTAwNDYucG5nfDExYTg3YzY4MmZlZTBlODU1NWJiN2IzNzBhNWYwZmExNzg2NGMzNDZhMWQyM2VjZWE4ZWVhMDljMjVmMmRiYzA',
        medium:
          'https://www.aesop.com/medias/Aesop-Resurrection-Duet-with-Product-Medium-1238x752px.png?context=bWFzdGVyfGltYWdlc3wyNDczMDF8aW1hZ2UvcG5nfGltYWdlcy9oNjYvaDE5LzkxMTA3OTc4NzcyNzgucG5nfDk4Y2RjZjY4NDk3MGM4YzQ3YzMyMzY4NDhlYjNjNDFhNGNjNGM5MzE1NzFjNDc3YTg3NGIyNDdlYmQ1Yzc1NTA',
        large:
          'https://www.aesop.com/medias/Aesop-Resurrection-Duet-with-Product-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3wzOTUwOTh8aW1hZ2UvcG5nfGltYWdlcy9oMWMvaDk4LzkxMTA3OTc2NDc5MDIucG5nfGYwMTE1NGQ3N2M0MDBmYTg1NzY4OTlkNTg0NTlmNmYzMWRkYmJkYzczYjFlOGEyMGMyOWVlZDRmZTRkYzE5ZjI',
      },
    },
    {
      url: '/',
      description: 'Suspendisse elit',
      caption: 'Suspendisse elit',
      heading: 'Phasellus posuere porta varius',
      image: {
        altText: 'Phasellus posuere porta varius',
        small:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
        medium:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
        large:
          'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
      },
    },
  ],
};

export { CarouselFixture };
