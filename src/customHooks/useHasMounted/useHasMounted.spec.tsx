import React from 'react';
import { render } from '@testing-library/react';
import { useHasMounted } from './useHasMounted';

describe('useHasMounted', () => {
  it('should return true after component mounts', () => {
    let hasMounted = false;

    const ComponentWithHook = () => {
      hasMounted = useHasMounted();

      return null;
    };

    expect(hasMounted).toBe(false);

    render(<ComponentWithHook />);

    expect(hasMounted).toBe(true);
  });
});
