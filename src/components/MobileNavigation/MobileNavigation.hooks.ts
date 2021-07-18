import { useEffect, useState } from 'react';

const useVariableHeightStyle = (ref, isActive: boolean) => {
  const [height, setHeight] = useState();
  const [style, setStyle] = useState({ maxHeight: 'none' });

  useEffect(() => {
    if (ref?.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  useEffect(() => {
    if (ref?.current) {
      setStyle({ maxHeight: isActive ? `${height}px` : '0' });
    }
  }, [isActive, ref, height]);

  return { style };
};

export { useVariableHeightStyle };
