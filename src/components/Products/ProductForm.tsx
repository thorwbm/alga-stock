import React, { useState } from 'react'

import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form, [name]:value
        })
    }

    return <Form title="lista de produtos" onSubmit={() => console.log(form)}>
    <Input
      onChange = {handleInputChange}
      name="name"
      label= "Name"
      placeholder= "ex. Cookies"
      required
    />
    <Input
      onChange = {handleInputChange}
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
      name="stock"
      label= "stock"
      type="number"
      min="0"
      placeholder= "ex. 10"
      required
    />
    <Button>
      Submmit
    </Button>
  </Form>
}

export default ProductForm