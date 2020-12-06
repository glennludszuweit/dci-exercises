import React from 'react';

function UncontrolledForm() {
  const inputField = React.useRef(null);

  function submitHandler() {
    const inputValue = inputField.current.value;
    alert(inputValue);
  }

  return (
    <div>
      <input type='text' ref={inputField} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default UncontrolledForm;
