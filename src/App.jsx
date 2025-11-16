import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar"
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";


function App() {
 

  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
