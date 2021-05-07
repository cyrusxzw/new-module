import React from 'react';
import { storiesOf } from '@storybook/react';
import { P } from '~/components/Paragraph';
import { useHasMounted } from '~/customHooks';

storiesOf('Hooks/useHasMounted', module).add('Base hook', () => {
  const hasMounted = useHasMounted();

  return (
    <div>
      <P>
        The <code>useHasMounted</code> custom hook returns a boolean of{' '}
        <code>true</code> once the calling component has mounted, and false when
        the component unmounts.
      </P>
      <P>
        Component has mounted: <strong>{hasMounted.toString()}</strong>.
      </P>
    </div>
  );
});
