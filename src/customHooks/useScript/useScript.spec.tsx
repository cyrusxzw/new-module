import { act, renderHook } from '@testing-library/react-hooks';
import { useScript } from './useScript';

describe('useScript', () => {
  beforeEach(() => {
    const html = document.querySelector('html');
    if (html) html.innerHTML = '';
  });

  it('should append a script tag', async () => {
    expect(document.querySelectorAll('script').length).toBe(0);

    const { result } = renderHook(() =>
      useScript({ src: 'http://scriptsrc/' }),
    );

    const [isLoading, error] = result.current;

    expect(isLoading).toBe(true);
    expect(error).toBeNull();

    const script = document.querySelector('script');

    expect(script).not.toBeNull();

    if (script) {
      expect(script).toHaveAttribute('src', 'http://scriptsrc/');
    }
  });

  it('should append a script tag with attributes', async () => {
    expect(document.querySelectorAll('script').length).toBe(0);

    const { result } = renderHook(() =>
      useScript({
        src: 'http://scriptsrc/',
        id: 'test',
        dataSet: {
          language: 'au',
        },
      }),
    );

    const [isLoading, error] = result.current;

    expect(isLoading).toBe(true);
    expect(error).toBeNull();

    const script = document.querySelector('script');

    expect(script).not.toBeNull();

    if (script) {
      expect(script).toHaveAttribute('src', 'http://scriptsrc/');
      expect(script).toHaveAttribute('data-language', 'au');
      expect(script).toHaveAttribute('id', 'test');
    }
  });

  it('should set loading false on load', async () => {
    const handle = renderHook(p => useScript(p), {
      initialProps: { src: 'http://scriptsrc/' },
    });

    const [isLoading, error] = handle.result.current;

    expect(isLoading).toBe(true);
    expect(error).toBe(null);

    act(() => {
      const el = document.querySelector('script');
      if (el) {
        el.dispatchEvent(new Event('load'));
      }
    });

    const [isLoadingAfter, errorAfter] = handle.result.current;

    expect(isLoadingAfter).toBe(false);
    expect(errorAfter).toBe(null);
  });

  it('should fire onLoad callback on load', async () => {
    const handleOnLoad = jest.fn();

    const handle = renderHook(p => useScript(p), {
      initialProps: { src: 'http://scriptsrc/', onLoad: handleOnLoad },
    });

    const [isLoading, error] = handle.result.current;

    expect(isLoading).toBe(true);
    expect(error).toBe(null);
    expect(handleOnLoad).not.toHaveBeenCalled();

    act(() => {
      const el = document.querySelector('script');
      if (el) {
        el.dispatchEvent(new Event('load'));
      }
    });

    const [isLoadingAfter, errorAfter] = handle.result.current;

    expect(isLoadingAfter).toBe(false);
    expect(errorAfter).toBe(null);
    expect(handleOnLoad).toHaveBeenCalledTimes(1);
  });

  it('should set loading false and error to not be null on error', async () => {
    const handle = renderHook(p => useScript(p), {
      initialProps: { src: 'http://scriptsrc/' },
    });

    const [isLoading, error] = handle.result.current;

    expect(isLoading).toBe(true);
    expect(error).toBe(null);

    act(() => {
      const el = document.querySelector('script');
      if (el) {
        el.dispatchEvent(new Event('error'));
      }
    });

    const [isLoadingAfter, errorAfter] = handle.result.current;

    expect(isLoadingAfter).toBe(false);
    expect(errorAfter).not.toBe(null);
  });

  it('should check for script existing on the page before rendering when shouldCheckForExisting is true', async () => {
    expect(document.querySelectorAll('script').length).toBe(0);

    const existingScript = document.createElement('script');
    existingScript.src = 'http://scriptsrc/';
    document.body.appendChild(existingScript);

    expect(document.querySelectorAll('script').length).toBe(1);

    const handle = renderHook(p => useScript(p), {
      initialProps: {
        src: 'http://scriptsrc/',
        shouldCheckForExisting: true,
      },
    });

    expect(document.querySelectorAll('script').length).toBe(1);
    handle.rerender();
    expect(document.querySelectorAll('script').length).toBe(1);
  });

  it('should handle null src and not append a script tag', async () => {
    expect(document.querySelectorAll('script').length).toBe(0);

    const { result } = renderHook(() => useScript({ src: null }));
    const [isLoading, error] = result.current;

    expect(isLoading).toBe(false);
    expect(error).toBeNull();
    expect(document.querySelectorAll('script').length).toBe(0);
  });

  it.todo('should return false if not running in the browser');
});
