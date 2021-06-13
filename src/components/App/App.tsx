import React from 'react';
import Button from '../Button';

import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width="16px" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt= "search icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <div className="Container">
        <Button
            onClick={() => window.alert('uiiiiu')}
            appendIcon={<TestComponent/>}
        >
          alert
        </Button>
      </div>
    </div>
  );
}

export default App;
