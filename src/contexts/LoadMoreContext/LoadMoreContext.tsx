import React, {
  createContext,
  useContext,
  FunctionComponent,
  MouseEventHandler,
} from 'react';
import { useLoadMoreStore } from './LoadMoreStore';

interface LoadMoreContextProviderProps {
  /**
    A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [LoadMoreButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.js)
    for an example. ___Required___
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const LoadMoreContext = createContext(undefined);

const LoadMoreContextProvider: FunctionComponent<LoadMoreContextProviderProps> = ({
  children,
  onClick,
}) => (
  <LoadMoreContext.Provider value={useLoadMoreStore(onClick)}>
    {children}
  </LoadMoreContext.Provider>
);

const useLoadMoreContext = () => {
  const context = useContext(LoadMoreContext);

  if (context === undefined) {
    throw new Error(
      'useLoadMoreContext must be used within a LoadMoreContextProvider',
    );
  }

  return context;
};

export { LoadMoreContextProvider, useLoadMoreContext };
