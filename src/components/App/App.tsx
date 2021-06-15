import React, { useState } from 'react';
import Container from '../../shared/Conteiner';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width="16px" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt= "search icon"/>
}

function App() {

  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <Container>
        
      </Container>
    </div>
  );
}

export default App;
