import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NameChange from './uday'

function App() {
  const [name, setName] = useState<number>(0)
  return (
    <div>
      <NameChange
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;
