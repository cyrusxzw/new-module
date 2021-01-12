import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { P } from '~/components/Paragraph';
import { useEscapeKeyListener } from '~/customHooks';

storiesOf('Hooks/useEscapeKeyListener', module).add('Base hook', () => {
  const [count, setCount] = useState(0);

  const handleEscapeOnKeyPress = () => setCount(count => count + 1);

  useEscapeKeyListener(handleEscapeOnKeyPress);

  return (
    <div>
      <P>
        The <code>useEscapeKeyListener</code> custom hook takes a callback as an
        argument that fires everytime the Esacpe key is pressed.
      </P>
      <P>
        Escape key pressed <strong>{count}</strong> times.
      </P>
    </div>
  );
});
