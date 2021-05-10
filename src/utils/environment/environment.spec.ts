import { isInBrowser } from './environment';

describe('isInBrowser', () => {
  let windowObj = {};

  beforeEach(() => {
    windowObj = global.window;
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window = windowObj;
  });

  it('should return false if not running in the browser', () => {
    delete global.window;

    expect(isInBrowser()).toBe(false);
  });

  it('should return true if running in the browser', () => {
    expect(isInBrowser()).toBe(true);
  });
});
