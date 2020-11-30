import React from 'react';
import { render } from '@testing-library/react';
import DialogBanner from './DialogBanner';

const mockFn = jest.fn();

describe('<DialogBanner />', () => {
  it('should be defined', () => {
    expect(DialogBanner).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <DialogBanner
        cta={{
          text: 'Need assistance?',
          url: '/contact-us/',
        }}
        hasCloseButton={true}
        heading="Maximum allowed quantity exceeded."
        isVisible={true}
        message="Our apologies, You have exceeded the maximum allowed quantity of this item."
        onClose={mockFn}
        position="top"
        theme="dark"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
