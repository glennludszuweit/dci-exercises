import React from 'react';
import Button from './components/Button';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div>
      <h3>Exercise 1</h3>
      <Button />
      <h3>Exercise 2</h3>
      <UncontrolledForm />
      <h3>Exercise 3</h3>
      <ControlledForm />
    </div>
  );
}

export default App;
