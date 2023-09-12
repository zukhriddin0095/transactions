

import React, { Fragment } from 'react'
import Header from '../components/header/HeaderPage'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/FooterPage'



const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout