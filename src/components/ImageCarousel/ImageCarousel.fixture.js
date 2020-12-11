/* istanbul ignore file */
const ImageCarouselFixture = {
  autoplaySpeed: 3000,
  hasAutoplay: false,
  slides: [
    {
      caption:
        'Nunc dignissim quis arcu a lobortis. Nullam auctor id nulla non sagittis. Quisque non enim efficitur quam mattis semper a nec arcu.',
      image: {
        altText: 'Nunc dignissim',
        small: './assets/images/ImageCarousel/image-two-small.jpg',
        medium: './assets/images/ImageCarousel/image-two-medium.jpg',
        large: './assets/images/ImageCarousel/image-two-large.jpg',
      },
    },
    {
      caption:
        'Vivamus sollicitudin ac ligula nec convallis. Etiam varius faucibus libero id congue.',
      image: {
        altText: 'Vivamus sollicitudin',
        small: './assets/images/ImageCarousel/image-three-small.jpg',
        medium: './assets/images/ImageCarousel/image-three-medium.jpg',
        large: './assets/images/ImageCarousel/image-three-large.jpg',
      },
    },
  ],
  theme: 'dark',
};

export { ImageCarouselFixture };
