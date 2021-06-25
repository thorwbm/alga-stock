import React, { useState } from 'react'

import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormPprops{
    onSubmit: (product: ProductCreator) => void
}

const ProductForm: React.FC<ProductFormPprops> = (props) => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form, [name]:value
        })
    }

    const handleFormSubmit = () => { 
        const productDto = {
            name: String(form.name),
            price:parseFloat(form.price),
            stock: Number(form.stock)
        }
        props.onSubmit(productDto)

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