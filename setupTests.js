import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));
