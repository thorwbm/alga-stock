import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import Products, { Product } from '../../shared/Table/Table.mockdata';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  const [products, setProducts] = useState(Products)
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])

  
  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
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

    setUpdatingProduct(undefined)
  }

  const productDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }
  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: 'Você realmente deseja Deletar?',
      text: "Esta ação não poderá ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '##09f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode deletar!',
      cancelButtonText: 'Nãoooooo'
    }).then((result) => {
      if (result.isConfirmed) {
        productDelete(product.id)
        Swal.fire(
          'Deletado!',
          'O registro foi deletado.',
          'success'
        )
      }
    })
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Detalhe do Produto',
      `${product.name} custa ${product.price}. Temos ${product.stock} em stock.`,
      'info'
    )
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={handleProductDelete}
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}
        />

        <ProductForm
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate}
        />
      </Container>
    </div>
  );
}

export default App;
