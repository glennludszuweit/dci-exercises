import React from 'react';
import AutoSuggest from './Components/AutoSuggest';
import Clone from './Components/Clone';
import PingPong from './Components/PingPong';

function App() {
  return (
    <React.Fragment>
      <Clone />
      <hr />
      <PingPong />
      <hr />
      <AutoSuggest />
    </React.Fragment>
  );
}

export default App;
