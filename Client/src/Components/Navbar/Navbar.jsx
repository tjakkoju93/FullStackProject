import React from 'react'
import './NavbarStyles.scss'
import { Link } from "react-router-dom";
import { UseLogout } from '../../Hooks/UseLogoutHook'
import { UseAuthContext } from '../../Hooks/UseAuthContext';

const Navbar = () => {
  const {user} = UseAuthContext();
  const { logout } = UseLogout()
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
