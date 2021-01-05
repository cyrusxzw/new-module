import React, { useRef } from 'react';
import { render, act } from '@testing-library/react';
import { useImageTransition } from './useImageTransition';

describe('useImageTransition', () => {
  let result = {};

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore(); // eslint-disable-line no-console
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    result = {};
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  // eslint-disable-next-line react/prop-types
  const ComponentWithHook = ({ image }) => {
    const ref = useRef();

    const [currentImage, isImageActive] = useImageTransition(
      image,
      ref,
      1000,
      {},
    );

    result.currentImage = currentImage;
    result.isImageActive = isImageActive;

    return <img alt="alt text" ref={ref} />;
  };

  it('should update image src and isActive on image prop change', () => {
    jest.useFakeTimers();

    const { rerender } = render(
      <ComponentWithHook image={{ src: 'first-image' }} />,
    );

    expect(result.currentImage.src).toBeUndefined();
    expect(result.isImageActive).toBe(false);

    act(() => jest.runOnlyPendingTimers());

    expect(result.currentImage.src).toBe('first-image');
    expect(result.isImageActive).toBe(true);

    rerender(<ComponentWithHook image={{ src: 'second-image' }} />);

    expect(result.isImageActive).toBe(false);

    act(() => jest.runOnlyPendingTimers());

    expect(result.currentImage.src).toBe('second-image');
    expect(result.isImageActive).toBe(true);
  });

  it('should have no active timers on unmount (should not throw state update error)', () => {
    jest.useFakeTimers();

    const { unmount } = render(<ComponentWithHook image={{ src: 'foo' }} />);

    unmount();

    act(() => jest.runOnlyPendingTimers());

    expect(console.error).not.toHaveBeenCalled(); // eslint-disable-line no-console
  });
});
