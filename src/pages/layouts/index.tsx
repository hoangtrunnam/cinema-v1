import React from 'react'
import Footer from 'src/component/footer'
import HeaderComponent from 'src/component/header'

const Layouts = () => {
  return (
    <div>
      <HeaderComponent/>
        <div>
          some code here
        </div>
      <div style={{position: 'fixed', bottom: 0}}>
        <Footer/>
      </div>
    </div>
  )
}

export default Layouts