import { Outlet } from "react-router-dom"
import Footer from './components/Footer'
import Header from "./components/Navbar"

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

    </>
  )
}

export default Layout
