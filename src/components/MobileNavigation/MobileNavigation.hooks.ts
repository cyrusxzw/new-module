import { useEffect, useState } from 'react';

const useVariableHeightStyle = (ref, isActive: boolean) => {
  const [height, setHeight] = useState();
  const [style, setStyle] = useState({ maxHeight: 'none' });

  useEffect(() => {
    console.log('effect 1 ran');
    if (ref?.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  useEffect(() => {
    console.log('effect 2 ran');

    if (ref?.current) {
      setStyle({ maxHeight: isActive ? `${height}px` : '0' });
    }
  }, [isActive, ref, height]);

  return { style };
};

export { useVariableHeightStyle };
