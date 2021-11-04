import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import { RootState } from '../../redux'
import { logout } from '../../redux/Authentication/Authentication.actions'
import { User } from '../../services/Authentication.service'
import './Header.css'

declare interface HeaderProps {
  title: string
  profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const isLoggedId = !!props.profile?._id

  const askToLogout = () => {
    Swal.fire({
      title: 'Você tem certeza que deseja sair?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
    }).then(({ value }) => value && dispatch(logout()))
  }

  const handleLoginLogout = () => {
    isLoggedId ? askToLogout() : history.push('/login')
  }

  return (
    <header className="AppHeader">
      <h1>{props.title}</h1>
      <div>
        <span onClick={handleLoginLogout}>
          {isLoggedId ? 'Logout' : 'Login'}
        </span>
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  profile: state.authentication.profile,
})

export default connect(mapStateToProps)(Header)
