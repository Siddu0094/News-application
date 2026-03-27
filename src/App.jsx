import React from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import Category from './components/Category'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar classname={"sticky  top-0 z-20"}/>
     
      <Category classname="py-6 sticky z-10  top-8  bg-base-100  "/>

      
      <News classname="pb-10"/>
      <Footer/>
</>
  )
}

export default App
