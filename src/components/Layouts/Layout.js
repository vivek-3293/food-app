import React from 'react'
import Header from '../../components/Layouts/Header';
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
        <Header />
        <div>{children}</div>
        <Footer />
    </>
  )
}

export default Layout