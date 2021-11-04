import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { login } from '../../redux/Authentication/Authentication.actions'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    user: '',
    pass: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const history = useHistory()

  const handleLogin = async () => {
    try {
      await dispatch(login(form))
      history.push('/')
    } catch (err) {
      Swal.fire(
        'Erro ao logar',
        err.response?.data?.message || err.message,
        'error'
      )
    }
  }

  return (
    <Form title="Login - AlgaStock" onSubmit={handleLogin}>
      <Input
        label="Usuário"
        name="user"
        value={form.user}
        onChange={handleInputChange}
        placeholder="E.g.: seu_usario_nome123"
      />

      <Input
        label="Senha"
        name="pass"
        value={form.pass}
        onChange={handleInputChange}
        type="password"
      />
      <Button>Login</Button>
    </Form>
  )
}

export default LoginForm
