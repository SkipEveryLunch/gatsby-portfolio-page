import React from 'react'
import {  Link } from 'gatsby'
const Navbar = () =>{
return (
  <nav>
  <h1>Cool log</h1>
  <div className="links">
    <Link to="/">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Portfolios</Link>
  </div>
</nav>
)
  }
export default Navbar