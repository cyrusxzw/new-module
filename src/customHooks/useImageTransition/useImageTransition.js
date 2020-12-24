import { useEffect, useRef, useState } from 'react';

const windowIsDefined = typeof window !== 'undefined';

const useImageTransition = (image, ref, duration = 600, attributes = {}) => {
  const [currentImage, setCurrentImage] = useState({});
  const [isImageActive, setIsImageActive] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const currentRef = ref.current || null;
    setIsImageActive(false);

    const handleOnImageLoad = () => {
      setIsImageActive(true);
    };

    if (windowIsDefined && currentRef) {
      timeout.current = setTimeout(() => {
        setCurrentImage({ ...image, ...attributes });

        if (currentRef.complete) {
          handleOnImageLoad();
        } else {
          currentRef.addEventListener('load', handleOnImageLoad);
        }
      }, duration);
    }

    return function cleanup() {
      if (windowIsDefined) {
        clearTimeout(timeout.current);
      }

      if (currentRef) {
        currentRef.removeEventListener('load', handleOnImageLoad);
      }
    };
  }, [image, ref]); // eslint-disable-line react-hooks/exhaustive-deps

  return [currentImage, isImageActive];
};

export { useImageTransition };
