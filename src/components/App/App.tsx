import React, { useState } from 'react';

import './App.css';
import Header from '../Header';
import Container from '../../shared/Conteiner';
import Table, { TableHeader } from '../../shared/Table';
import Products, { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';



const headers: TableHeader[] = [
  {key: 'id', value: '#'},
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Avaliable Stock', right: true}
]

function App() {

  const [products, setProducts] = useState(Products)

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: Products.length + 1,
        ...product
      }
    ])
  }
    
    const handleProductUpdate = (newProduct: Product) => {
      setProducts(products.map(product => 
        product.id === newProduct.id 
          ? newProduct
          : product 
      ))
    }

  return (
    <div className="App">
      <Header title="Alga Stock"/>
      
      <Container>
        <Table 
          headers = {headers}
          data={products}
        />
        <ProductForm 
          form={products[0]}
          onUpdate={handleProductUpdate}
          onSubmit={handleProductSubmit}/>
      </Container>
    </div>
  );
}

export default App;
