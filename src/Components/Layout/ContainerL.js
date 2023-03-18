import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

function ContainerL(props) {
  return (
    <div>
        <Header />
        <Navbar />
        {props.children}
        <Banner/>
        <Footer/>
    </div>
  )
}

export default ContainerL