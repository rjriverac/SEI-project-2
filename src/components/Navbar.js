import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../assets/logo.png'

const Navbar = () => {

  return (
    <>
      <nav className="navbar is-primary is-fixed-top is-spaced">
        <div className="navbar-brand">
          <span role="img" className="title">
            <Link to="/"><img src={mainlogo} width="128" height="128"/></Link>
          </span>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <Link to="/" className="navbar-item has-text-white"><p>Home</p></Link>
            <Link to="/characters" className="navbar-item has-text-white"><p>Characters</p></Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar