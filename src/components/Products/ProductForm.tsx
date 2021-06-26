import React, { useState } from 'react'

import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'
import { Product } from '../../shared/Table/Table.mockdata'
declare interface  InitialFormState {
  id?: number
  name: string
  price: string
  stock: string
}
export interface ProductCreator {
    name: string
    price: number
    stock: number
}
declare interface ProductFormPprops{
    form?: Product
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: Product) => void
}

const ProductForm: React.FC<ProductFormPprops> = (props) => {
  
const initialFormState: InitialFormState = props.form
    ? {
        id: props.form.id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock)
    }
    : {
        name: '',
        price: '',
        stock: ''
    }


    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form, [name]:value
        })
    }

    const updateProduct = (product: InitialFormState) => {
      const productDto = {
        id: Number(product.id),
        name: String(product.name),
        price: parseFloat(product.price),
        stock: Number(product.stock)
      }

      props.onUpdate &&
      props.onUpdate(productDto)
    }

    const createProduct = (product: InitialFormState) => {
      const productDto = {
        name: String(product.name),
        price: parseFloat(product.price),
        stock: Number(product.stock)
      }

      props.onSubmit &&
      props.onSubmit(productDto)
    }

    const handleFormSubmit = () => { 
        form.id 
          ? updateProduct(form)
          : createProduct(form)

        setForm(initialFormState)
    }
    return <Form title="lista de produtos" onSubmit={handleFormSubmit}>
    <Input
      onChange = {handleInputChange}
      value = {form.name}
      name="name"
      label= "Name"
      placeholder= "ex. Cookies"
      required
    />
    <Input
      onChange = {handleInputChange}
      value = {form.price}
      name="price"
      label= "price"
      type="number"
      step="0.01"
      min="0"
      placeholder= "ex. 1.25"
      required
    />
    <Input
      onChange = {handleInputChange}      
      value = {form.stock}
      name="stock"
      label= "stock"
      type="number"
      min="0"
      placeholder= "ex. 10"
      required
    />
    <Button>
      Submit
    </Button>
  </Form>
}

export default ProductForm