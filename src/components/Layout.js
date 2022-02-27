import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) =>{
return (
  <div className="h-screen flex flex-col">
    <Navbar />
    <div className="flex-1 px-5 py-7">
      { children }
    </div>
    <Footer />
  </div>
)
  }
export default Layout