import React, { useState } from 'react';
import './App.css';
import UseContext from './components/UseContext';
import Task from './components/Task';

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(prevState => !prevState);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
      <Task />
    </ToggleTheme.Provider>
  );
}

export default App;
