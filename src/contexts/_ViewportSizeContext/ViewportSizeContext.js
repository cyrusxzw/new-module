import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useViewportSizeStore } from './ViewportSizeStore';

const ViewportSizeContext = createContext();

const ViewportSizeContextProvider = ({ children, size }) => (
  <ViewportSizeContext.Provider value={useViewportSizeStore(size)}>
    {children}
  </ViewportSizeContext.Provider>
);

ViewportSizeContextProvider.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
};

const useViewportSizeContext = () => {
  const context = useContext(ViewportSizeContext);

  if (context === undefined) {
    throw new Error(
      'useViewportSizeContext must be used within a ViewportSizeContextProvider',
    );
  }

  return context;
};

export { ViewportSizeContextProvider, useViewportSizeContext };
