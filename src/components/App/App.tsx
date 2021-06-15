import React from 'react';
import Container from '../../shared/Conteiner';
import Table from '../../shared/Table';
import Header from '../Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
