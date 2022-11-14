import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/NavHeader/Header'

const Layout = () => {
  return (
    <div id="/">
    <Header />
    <About />
    <Contact />
    </div>
  )
}

export default Layout