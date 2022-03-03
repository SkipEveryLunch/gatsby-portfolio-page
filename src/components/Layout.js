import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalContextProvider from "../context/GlobalContextProvider"
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <GlobalContextProvider>
        <Navbar />
        <div className="flex-1 px-5 py-14">{children}</div>
        <Footer />
      </GlobalContextProvider>
    </div>
  )
}
export default Layout
