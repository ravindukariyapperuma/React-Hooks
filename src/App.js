import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCountThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCountThree /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;
