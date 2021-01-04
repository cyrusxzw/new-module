import React from 'react';
import { render } from '@testing-library/react';
import { useHasMounted } from './useHasMounted';

describe('useExecuteOnImpression', () => {
  it('should when return true after component mounts', () => {
    let hasMounted = false;

    const ComponentWithHook = () => {
      hasMounted = useHasMounted();

      return null;
    };

    expect(hasMounted).toBeFalsy();

    render(<ComponentWithHook />);

    expect(hasMounted).toBeTruthy();
  });
});
