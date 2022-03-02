import React from "react"
import NavLink from "./NavLink"
import { useLocation } from "@reach/router"
const navs = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Portfolios" },
  { path: "/contact", name: "Contact" },
]
const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="flex justify-center mx-4 border-b border-gray-300">
      {navs.map(nav => {
        return (
          <NavLink
            name={nav.name}
            path={nav.path}
            isActive={location.pathname === nav.path}
          />
        )
      })}
    </nav>
  )
}
export default Navbar
