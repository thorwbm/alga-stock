import React, { useState, useEffect } from 'react'
import Table, { TableHeader } from '../../shared/Table'
import { Product } from '../../shared/Table/table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import * as ProductAction from '../../redux/Products/Products.actions'
import { RootState, ThunkDispatch } from '../../redux'

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
  const dispatch: ThunkDispatch = useDispatch()

  const showErrorAlert = (err: Error) =>
    Swal.fire('Ooops!', err.message, 'error')

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    undefined
  )

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    dispatch(ProductAction.getProducts()).catch(showErrorAlert)
  }

  const handleProductSubmit = async (product: ProductCreator) => {
    dispatch(ProductAction.insertNewProduct(product)).catch(showErrorAlert)
  }

  const handleProductUpdate = async (newProduct: Product) => {
    dispatch(ProductAction.updateProduct(newProduct))
      .then(() => setUpdatingProduct(undefined))
      .catch(showErrorAlert)
  }

  const deleteProduct = async (id: string) => {
    dispatch(ProductAction.deleteProduct(id))
      .then(() => {
        Swal.fire('UUhuuuuu!', 'Produto Deletado com Sucesso!', 'success')
      })
      .catch(showErrorAlert)
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
    }).then(({ value }) => value && deleteProduct(product._id))
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  }

  return (
    <>
      <Table
        headers={headers}
        data={props.products}
        enableActions
        onDelete={handleProductDelete}
        onDetail={handleProductDetail}
        onEdit={setUpdatingProduct}
      />

      <ProductForm
        form={updatingProduct}
        onSubmit={handleProductSubmit}
        onUpdate={handleProductUpdate}
      />
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  products: state.products,
})
export default connect(mapStateToProps)(ProductsCRUD)
