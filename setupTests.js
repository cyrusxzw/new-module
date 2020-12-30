import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect'; // eslint-disable-line import/no-unresolved
/**
 * `Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)`
 *  https://stackoverflow.com/questions/48828759/unit-test-raises-error-because-of-getcontext-is-not-implemented
 */
import 'jest-canvas-mock'; // eslint-disable-line import/no-unresolved

/**
 * @TODO The `Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.`
 * error is cause by the `muted` attribute https://github.com/testing-library/react-testing-library/issues/470,
 * and the following lines removes the warning.
 */
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});

/**
 * Globally mock the `uuid` package
 */
jest.mock('uuid', () => {
  let value = 0;
  return {
    v4: () => value++,
  };
});

/**
 *  https://github.com/jsdom/jsdom/issues/2155
 */
window.HTMLMediaElement.prototype.load = () => {};
window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.addTextTrack = () => {};

/**
 * Matchmedia mock
 */
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));
