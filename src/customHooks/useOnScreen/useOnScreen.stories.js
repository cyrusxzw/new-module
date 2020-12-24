import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import { KitList } from '~/components/KitList';
import { P } from '~/components/Paragraph';
import { Transition } from '~/components/Transition';
import { useOnScreen } from './useOnScreen';

storiesOf('Hooks/useOnScreen', module).add('Base hook', () => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref, 0.25);

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <P>
          The <code>useOnScreen</code> custom hook takes a ref of a DOM Element
          and an offset, and returns a boolean of true when that referenced
          element is within the viewport.
        </P>
        <P>
          Scroll down to see the next element reveal, with an offset threshold
          of 25% (0.25).
        </P>
      </div>

      <Transition isActive={isOnScreen} type="shiftInDown">
        <KitList
          isVisible={isOnScreen}
          items={[
            { content: 'Parsley Seed Facial Cleansing Oil, 200 mL', id: '1' },
            {
              content: 'Parsley Seed Anti-Oxidant Facial Toner, 100 mL',
              id: '2',
            },
            { content: 'Parsley Seed Anti-Oxidant Serum, 100 mL', id: '3' },
            {
              content: 'Parsley Seed Anti-Oxidant Eye Cream, 10 mL',
              id: '4',
            },
          ]}
          ref={ref}
        />
      </Transition>
    </div>
  );
});
