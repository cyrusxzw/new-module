import { useEffect, useState } from 'react';

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    return function cleanup() {
      setHasMounted(false);
    };
  }, [hasMounted]);

  return hasMounted;
};

export { useHasMounted };
