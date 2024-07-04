import React from 'react'
import './NavbarStyles.scss'
import { Link } from "react-router-dom";
import { useLogout } from '../../Hooks/useLogoutHook'
import { useAuthContext } from '../../Hooks/useAutContext';

const Navbar = () => {
  const {user} = useAuthContext();
  const { logout } = useLogout()
  const handleClick = () => {
    logout();
  }
  return (
    <nav>
      <Link to='/'>Workout Buddy</Link>

    { user && (
      <div className="logout">
        <span>{user.email}</span>
        <button onClick={handleClick}>Logout</button>
      </div>
    )}
     { !user && (
      <div className="auth">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
     )}

    </nav>
  )
}

export default Navbar
