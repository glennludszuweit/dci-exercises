import React from 'react';

function Button() {
  function onClickHandler() {
    alert('You clicker');
  }

  return (
    <div>
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
}

export default Button;
