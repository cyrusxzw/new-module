import React, { useEffect, useState, useRef } from 'react';

type StyleHeight = { maxHeight: string };

type UseVariableHeightStyle = {
  <Type = any>(isActive: boolean): {
    ref: React.MutableRefObject<Type>;
    style: StyleHeight;
  };
};

const useVariableHeightStyle: UseVariableHeightStyle = (isActive) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [style, setStyle] = useState<StyleHeight>({ maxHeight: 'none' });

  useEffect(() => {
    if (ref?.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  useEffect(() => {
    if (ref?.current) {
      setStyle({ maxHeight: isActive ? `${height}px` : '0' });
    }
  }, [isActive, height]);

  return { ref, style };
};

export { useVariableHeightStyle };
