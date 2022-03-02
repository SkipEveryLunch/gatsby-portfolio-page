import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav className="flex justify-center mx-4 border-b border-gray-300">
      <Link className="py-2 px-3 hover:bg-gray-100" to="/">
        Home
      </Link>
      <Link className="py-2 px-3 hover:bg-gray-100" to="/about">
        About
      </Link>
      <Link className="py-2 px-3 hover:bg-gray-100" to="/projects">
        Portfolios
      </Link>
      <Link className="py-2 px-2 hover:bg-gray-100" to="/contact">
        Contact
      </Link>
    </nav>
  )
}
export default Navbar
