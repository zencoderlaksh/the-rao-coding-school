import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"
import Footer from "./Footer"
import useLocomotiveScroll from "../hooks/useLocomotiveScroll"
import useGsapScroll from "../hooks/useGsapScroll"

const MainLayout = () => {
  const scrollRef = useLocomotiveScroll()
  useGsapScroll(scrollRef)

  return (
    <>
      {/* FIXED NAVBAR OUTSIDE */}
      <Navbar />

      {/* ONLY SCROLL CONTENT INSIDE */}
     <main
  data-scroll-container
  ref={scrollRef}
  className="min-h-screen overflow-hidden"
>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
