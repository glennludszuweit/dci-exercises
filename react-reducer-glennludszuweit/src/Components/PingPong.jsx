import React, { useReducer } from 'react';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLONE':
      return payload;

    case 'UPPER_CASE':
      return payload;

    case 'LOWER_CASE':
      return payload;

    default:
      return state;
  }
};

function Pingpong() {
  const [state, dispatch] = useReducer(reducer, '');
  return (
    <div>
      <h2>Exercise 2</h2>
      <div>{state}</div>
      <input
        type='text'
        onChange={(e) => dispatch({ type: 'CLONE', payload: e.target.value })}
      />
      <button
        onClick={() =>
          dispatch({ type: 'UPPER_CASE', payload: state.toUpperCase() })
        }
      >
        Uppercase
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'LOWER_CASE', payload: state.toLowerCase() })
        }
      >
        Lowercase
      </button>
    </div>
  );
}

export default Pingpong;
