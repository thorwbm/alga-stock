import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundView.css'

const NotFoundView = () => {
  return (
    <div className="view404">
      <h1>404</h1>
      <p>Não Encontrado</p>
      <Link to="/" className="link-none">
        Voltar para Home
      </Link>
    </div>
  )
}

export default NotFoundView
