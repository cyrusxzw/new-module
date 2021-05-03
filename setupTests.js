import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect'; // eslint-disable-line import/no-unresolved
/**
 * `Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)`
 *  https://stackoverflow.com/questions/48828759/unit-test-raises-error-because-of-getcontext-is-not-implemented
 */
import 'jest-canvas-mock'; // eslint-disable-line import/no-unresolved

/**
 * matchMedia mock: https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

/**
 * @TODO The `Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.`
 * error is cause by the `muted` attribute https://github.com/testing-library/react-testing-library/issues/470,
 * and the following lines removes the warning.
 */
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  // eslint-disable-next-line no-setter-return
  set: () => undefined,
});

/**
 *  https://github.com/jsdom/jsdom/issues/2155
 */
window.HTMLMediaElement.prototype.load = () => undefined;
window.HTMLMediaElement.prototype.play = () => undefined;
window.HTMLMediaElement.prototype.pause = () => undefined;
window.HTMLMediaElement.prototype.addTextTrack = () => undefined;
