import React from 'react'
import {  Link } from 'gatsby'
const Navbar = () =>{
return (
  <nav className="flex justify-center mx-4 border-b border-gray-300">
      <Link className="py-2 mr-4" to="/">Home</Link>
      <Link className="py-2 mr-4" to="/about">About</Link>
      <Link className="py-2" to="/projects">Portfolios</Link>
  </nav>
)
  }
export default Navbar