import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/component/footer'
import HeaderComponent from 'src/component/header'

const Layouts = () => {
  return (
    <div>
      <HeaderComponent />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layouts