import React from "react"
import { Link } from "gatsby"
const NavLink = ({ isActive, name, path }) => {
  return (
    <Link
      className={`py-2 px-3 hover:bg-gray-100 ${
        isActive ? "border-b-2 border-gray-400" : ""
      }`}
      to={path}
    >
      {name}
    </Link>
  )
}
export default NavLink
