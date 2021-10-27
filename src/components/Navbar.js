import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../assets/logo.png'

const Navbar = () => {

  return (
    <>
      <nav className="navbar is-primary is-fixed-top">
        <div className="navbar-brand">
          <span role="img" className="title">
            <Link to="/"><img src={mainlogo} width="128" height="128"/></Link>
          </span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item has-text-white"><p>Home</p></Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar