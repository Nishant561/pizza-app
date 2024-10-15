import React from 'react'
import {Nav , Footer} from './../index'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Nav />
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
