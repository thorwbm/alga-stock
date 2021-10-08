<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { createSingleProduct, 
         deleteSingleProduct, 
         getAllProducts, 
         updateSingleProduct } from '../../services/Products.service';
=======
import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import ProductsCRUD from '../Products/ProductsCRUD';
>>>>>>> 5eeade030132a658920a6f512a144e5739685089


<<<<<<< HEAD
function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

  async function fetchData() {
    const _products = await getAllProducts()
    setProducts(_products)
  }

  useEffect(() => {   
    fetchData()
  }, [])
  
  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      await createSingleProduct(product);
      fetchData()
    } catch (error) {
      Swal.fire('OOOpsss!', error.message, 'error');
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct)
      fetchData()
    } catch (error) {
      Swal.fire('OOOpsss!', error.message, 'error');
    }

    setUpdatingProduct(undefined)
  }

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id);
      fetchData();
      Swal.fire('UUhuuuuu!', 'Produto Deletado com Sucesso!', 'success');
    } catch (error) {
      Swal.fire('OOOpsss!', error.message, 'error');
    }
    
  }

  const handleProductDelete = (product: Product) => {
    Swal
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#09f',
        cancelButtonColor: '#d33',
        confirmButtonText: `Yes, delete ${product.name}!`
      })
      .then((result) => {
        if (result.value) {
          deleteProduct(product._id)
        }
      })
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }
=======

function App() {
  
>>>>>>> 5eeade030132a658920a6f512a144e5739685089

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </div>
  );
}

export default App;
