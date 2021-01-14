import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';
import { useExecuteOnImpression } from './useExecuteOnImpression';

// eslint-disable-next-line react/prop-types
const ComponentToMakeAnImpression = ({ isExecutableOnReEntry, threshold }) => {
  const ref = useRef(null);

  // eslint-disable-next-line no-alert
  const callbackOnImpression = () => alert('I made an impression');
  useExecuteOnImpression(ref, callbackOnImpression, {
    threshold,
    isExecutableOnReEntry,
  });
  const styling = {
    height: '500px',
    width: '500px',
    backgroundColor: 'red',
  };

  return <div ref={ref} style={styling} />;
};

storiesOf('Hooks/useExecuteOnImpression', module).add('Base hook', () => {
  return (
    <React.Fragment>
      <div style={{ height: '100vh' }}>
        Scroll down to see the hook's behaviour
      </div>
      <ComponentToMakeAnImpression
        isExecutableOnReEntry={knobs.boolean(
          'isExecutableOnReEntry',
          false,
          'Hook options',
        )}
        threshold={knobs.number(
          'threshold',
          0.5,
          { min: 0, max: 1 },
          'Hook options',
        )}
      />
    </React.Fragment>
  );
});
