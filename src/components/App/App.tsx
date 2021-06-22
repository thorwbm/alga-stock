import React from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Conteiner';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Header from '../Header';
import './App.css';


const headers: TableHeader[] = [
  {key: 'id', value: '#'},
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Avaliable Stock', right: true}
]

function App() {
  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <Container>
        <Table 
          headers = {headers}
          data={Products}
        />
        <Form title="lista de produtos" onSubmit={console.table}>
          <Input
            label= "Name"
            placeholder= "ex. Cookies"
          />
          <Input
            label= "valor"
            type="number"
            step="0.01"
            min="0"
            placeholder= "ex. 1.25"
          />
          <Input
            label= "stock"
            type="number"
            min="0"
            placeholder= "ex. 10"
          />
          <Button>
            Submmit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
