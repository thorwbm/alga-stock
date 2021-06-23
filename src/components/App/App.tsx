import React from 'react';

import Container from '../../shared/Conteiner';

import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Header from '../Header';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import './App.css';


const headers: TableHeader[] = [
  {key: 'id', value: '#'},
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Avaliable Stock', right: true}
]

function App() {
  const handleProductSubmit = (product: ProductCreator) => {
    console.log(product)
  }

  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <Container>
        <Table 
          headers = {headers}
          data={Products}
        />
        <ProductForm onSubmit={handleProductSubmit}/>
      </Container>
    </div>
  );
}

export default App;
