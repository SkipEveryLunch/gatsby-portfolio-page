import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Modal from "./Modal"
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-5 py-14">{children}</div>
      <Footer />
      <Modal />
    </div>
  )
}
export default Layout
