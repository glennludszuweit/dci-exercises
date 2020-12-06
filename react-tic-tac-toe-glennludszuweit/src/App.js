import React from 'react';
import TicTacToe from './TicTacToe';
import { BoxProvider } from './Context';

import './App.css';

function App() {
  return (
    <BoxProvider>
      <TicTacToe />
    </BoxProvider>
  );
}

export default App;
