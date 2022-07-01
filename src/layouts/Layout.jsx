import React from 'react'
import Header from './Header'
import Seo from '../components/seo';
import "../asserts/styles/common.scss";

const Layout = ({ wrapperClassName, title, children }) => {
  return (
    <div>
      <Seo title={title} />
      <Header />
      <main className={wrapperClassName}>
        {children}
      </main>
    </div>
  )
}

export default Layout