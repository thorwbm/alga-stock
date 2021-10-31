import React from 'react'
import LoginForm from '../../components/Autentication/LoginForm'
import './LoginView.css'

const LoginView = () => {
  return (
    <div className="login-view">
      <div className="login-view-form">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginView
