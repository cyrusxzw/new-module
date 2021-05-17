import debounce from 'lodash/debounce';
import { renderHook } from '@testing-library/react-hooks';
import { useWindowHasResized } from './useWindowHasResized';
import { isInBrowser } from '../../utils/environment/environment';

let hasDebounced = false;

jest.mock('lodash/debounce', () => {
  return {
    __esModule: true,
    default: jest.fn(callback => {
      if (!hasDebounced) {
        callback();
        hasDebounced = true;
      }
    }),
  };
});

jest.mock('../../utils/environment/environment', () => {
  return {
    isInBrowser: jest.fn(),
  };
});

describe('useWindowHasResized', () => {
  afterEach(() => (hasDebounced = false));

  describe(`when rendered in the browser`, () => {
    beforeEach(() => {
      (isInBrowser as jest.Mock).mockReturnValue(true);
    });

    it(`should return the current screen size`, () => {
      const {
        result: { current: windowSize },
      } = renderHook(useWindowHasResized);

      expect(windowSize.height).toEqual(global.innerHeight);
      expect(windowSize.width).toEqual(global.innerWidth);
    });

    it(`should call the callback`, () => {
      const callback = jest.fn();

      renderHook(() => useWindowHasResized(callback));

      expect(callback).toHaveBeenCalled();
    });

    it(`should use lodash/debounce`, () => {
      renderHook(useWindowHasResized);

      expect(debounce).toHaveBeenCalledWith(expect.any(Function), 200);
    });
  });

  describe(`when rendered on the server`, () => {
    beforeEach(() => {
      (isInBrowser as jest.Mock).mockReturnValue(false);
    });

    it(`should return 0 for the window dimensions`, () => {
      const {
        result: { current: windowSize },
      } = renderHook(useWindowHasResized);

      expect(windowSize.height).toEqual(0);
      expect(windowSize.width).toEqual(0);
    });
  });
});
