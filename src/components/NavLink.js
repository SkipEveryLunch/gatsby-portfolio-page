import React from "react"
import { Link } from "gatsby"
const NavLink = ({ isActive, name, path }) => {
  return (
    <Link
      className={`block py-3 hover:bg-gray-100 dark:hover:bg-gray-500 text-sm md:text-base ${
        isActive ? "border-b-2 dark:border-gray-200 border-gray-400" : ""
      }`}
      to={path}
    >
      {name}
    </Link>
  )
}
export default NavLink
