import React, { createContext, useState } from 'react';

const initialState = ['', '', '', '', '', '', '', '', '', ''];

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [symbol, setSymbol] = useState(true);

  const onBoxClick = (index) => {
    const boxes = [...state];
    if (boxes[index]) return;
    boxes[index] = symbol ? 'X' : 'O';
    setState(boxes);
    setSymbol(!symbol);
  };

  const createBoxes = (index) => {
    return (
      <button className='box' onClick={() => onBoxClick(index)}>
        {state[index]}
      </button>
    );
  };

  return (
    <BoxContext.Provider value={{ createBoxes }}>
      {children}
    </BoxContext.Provider>
  );
};
