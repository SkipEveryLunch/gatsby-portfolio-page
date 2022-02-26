import React from 'react'
import Navbar from './Navbar'
const Layout = ({children}) =>{
return (
  <div>
    <div>
      <Navbar />
      <div>
        { children }
      </div>
      <footer>
        <p>copyright by skipeverylunch</p>
      </footer>
    </div>
  </div>
)
  }
export default Layout