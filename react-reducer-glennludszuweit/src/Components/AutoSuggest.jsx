import React, { useReducer } from 'react';

const initialState = ['Cinnamon', 'Blueberries', 'Avocados', 'Coffee', 'Beef'];

const reducer = (state = initialState, { type, text }) => {
  console.log(text);

  switch (type) {
    case 'SEARCH':
      return initialState.filter((food) =>
        food.toLowerCase().includes(text.toLowerCase())
      );

    default:
      return state;
  }
};

function AutoSuggest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type='search'
        onChange={(e) =>
          dispatch({
            type: 'SEARCH',
            text: e.target.value,
          })
        }
      />

      <ul>
        {state.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default AutoSuggest;
