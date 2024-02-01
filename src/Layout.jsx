import React from 'react'
import Header from './Components/header/Header.jsx'
import Footer from './Components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout