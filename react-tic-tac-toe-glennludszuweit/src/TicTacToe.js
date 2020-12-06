import React, { useContext } from 'react';
import { BoxContext } from './Context';

function MainBox() {
  const { createBoxes } = useContext(BoxContext);

  return (
    <div>
      <div className='box-row'>
        {createBoxes(0)}
        {createBoxes(1)}
        {createBoxes(2)}
      </div>
      <div className='box-row'>
        {createBoxes(3)}
        {createBoxes(4)}
        {createBoxes(5)}
      </div>
      <div className='box-row'>
        {createBoxes(6)}
        {createBoxes(7)}
        {createBoxes(8)}
      </div>
    </div>
  );
}

export default MainBox;
