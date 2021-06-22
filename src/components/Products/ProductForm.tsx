import React from 'react'


import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

const ProductForm = () => {
    return <Form onSubmit={console.log}>
         <Input
            label= "Name"
            placeholder= "ex. Cookies"
          />
          <Input
            label= "valor"
            type="number"
            step="0.01"
            min="0"
            placeholder= "ex. 1.25"
          />
          <Input
            label= "stock"
            type="number"
            min="0"
            placeholder= "ex. 10"
          />
          <Button>
            enviar
          </Button>
    </Form>
}

export default ProductForm