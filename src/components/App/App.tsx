import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { createSingleProduct, deleteSingleProduct, getAllProducts, updateSingleProduct } from '../../services/Products.service';



function App() {
  

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        
      </Container>
    </div>
  );
}

export default App;
