import React from 'react';

function ControlledForm() {
  const [age, setAge] = React.useState(23);

  function changeAge({ target }) {
    setAge(target.value);
  }

  function submitHandler() {
    alert(age);
  }

  return (
    <div>
      <input type='number' value={age} onChange={changeAge} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default ControlledForm;
