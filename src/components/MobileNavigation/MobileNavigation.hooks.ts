import { useEffect, useState, useRef } from 'react';

const useVariableHeightStyle = (isActive: boolean) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
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
  }, [isActive, height]);

  return { ref, style };
};

export { useVariableHeightStyle };
