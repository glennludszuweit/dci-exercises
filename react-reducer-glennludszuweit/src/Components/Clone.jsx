import React, { useReducer } from 'react';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLONE':
      return payload;

    default:
      return state;
  }
};

function Clone() {
  const [state, dispatch] = useReducer(reducer, '');

  return (
    <div>
      <h2>Exercise 1</h2>
      <div>{state}</div>
      <input
        type='text'
        onChange={(e) => dispatch({ type: 'CLONE', payload: e.target.value })}
      />
    </div>
  );
}

export default Clone;
