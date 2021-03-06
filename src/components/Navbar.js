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
    <nav className="flex gap-3 lg:gap-5 justify-center mx-4 mt-2 border-b border-gray-300 dark:border-gray-500">
      {navs.map((nav, idx) => {
        return (
          <NavLink
            key={idx}
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
