import React, { useState, useEffect } from 'react'
import Table, { TableHeader } from '../../shared/Table'
import {
  updateSingleProduct,
  deleteSingleProduct,
} from '../../services/Products.service'
import { Product } from '../../shared/Table/table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import { insertNewProduct } from '../../redux/Products/Products.actions'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true },
]
declare interface ProductsCRUDProps {
  products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
  const dispatch = useDispatch()
  //const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    undefined
  )

  async function fetchData() {
    // const _products = await getAllProducts()
    // setProducts(_products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      dispatch(insertNewProduct(product))
      fetchData()
    } catch (error) {
      Swal.fire('OOOpsss!', error.message, 'error')
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct)
      fetchData()
    } catch (problema) {
      Swal.fire('OOOpsss!', problema.message, 'error')
    }

    setUpdatingProduct(undefined)
  }

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id)
      fetchData()
      Swal.fire('UUhuuuuu!', 'Produto Deletado com Sucesso!', 'success')
    } catch (error) {
      Swal.fire('OOOpsss!', error.message, 'error')
    }
  }

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`,
    }).then((result) => {
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

  return (
    <>
      <Table
        headers={headers}
        data={props.products}
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
    </>
  )
}

const mapStateToProps = (state: any) => ({
  products: state.products,
})
export default connect(mapStateToProps)(ProductsCRUD)
