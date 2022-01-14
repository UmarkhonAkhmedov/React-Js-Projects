import React from 'react'
import { Header } from './'
import Categories from './Categories'

const Layout = ({ children }) => {
  return (
    <>
     <Header/> 
     {children}
    </>
  )
}

export default Layout
