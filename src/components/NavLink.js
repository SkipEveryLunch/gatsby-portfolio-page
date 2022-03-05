import React from "react"
import { Link } from "gatsby"
const NavLink = ({ isActive, name, path }) => {
  return (
    <Link
      className={`py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-500 ${
        isActive ? "border-b-2 dark:border-gray-200 border-gray-400" : ""
      }`}
      to={path}
    >
      {name}
    </Link>
  )
}
export default NavLink
