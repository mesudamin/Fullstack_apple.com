import React from 'react'
import Header from './HEADER/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>
      <Header/>
       <Outlet/>
      <Footer/>
     

    </>
  )
}
