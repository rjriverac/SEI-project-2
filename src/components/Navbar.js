import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../assets/logo.png'

const Navbar = () => {

  return (
    <nav className="navbar is-dark is-spaced">
      <div className="navbar-brand">
        <span role="img" className="title">
          <Link to="/"><img src={mainlogo} width="96" height="96"/></Link>
        </span>
      </div>
      <div className="navbar-menu is-dark is-active" id="nav-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item has-text-white is-size-3"><p><i className="fas fa-meteor"></i> Home</p></Link>
          <Link to="/characters" className="navbar-item has-text-white is-size-3"><p><i className="fas fa-users"></i> Characters</p></Link>
          <Link to="/episodes" className="navbar-item has-text-white is-size-3"><p><i className="fas fa-film"></i> Episodes</p></Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar