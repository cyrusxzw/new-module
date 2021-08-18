import React from 'react';

const mergeRefs = <Type = any>(
  ...refs: Array<React.MutableRefObject<Type> | React.LegacyRef<Type>>
): React.RefCallback<Type> => {
  const filteredRefs = refs.filter(Boolean);

  return (value) => {
    filteredRefs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<Type | null>).current = value;
      }
    });
  };
};

export { mergeRefs };
