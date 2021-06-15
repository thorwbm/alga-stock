import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Conteiner';
import Input from '../../shared/Input';

import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width="16px" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt= "search icon"/>
}

function App() {
  const [street, setStreet] = useState('')

  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <Container>
        <Button
            onClick={() => window.alert('uiiiiu')}
            appendIcon={<TestComponent/>}
        >
          alert
        </Button>
        <Input 
          label="Street" 
          placeholder="digite o nome da sua rua"
          value = {street}
          onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
