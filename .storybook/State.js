import React from 'react';

const State = ({ children, initialState }) => {
  const [state, setState] = React.useState(initialState);

  return <div>{children(state, setState)}</div>;
};

export { State };
