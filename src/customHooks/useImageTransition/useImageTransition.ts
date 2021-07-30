import { useEffect, useRef, useState } from 'react';
import type { UseImageTransition } from './useImageTransition.types';

const windowIsDefined = typeof window !== 'undefined';

const useImageTransition: UseImageTransition = (
  image,
  ref,
  duration = 600,
  attributes = {},
) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    image?.sizes?.large,
    image?.sizes?.medium,
    image?.sizes?.small,
    image?.sizes?.xLarge,
    image?.sizes?.xSmall,
    ref,
  ]);

  return [currentImage, isImageActive];
};

export { useImageTransition };
