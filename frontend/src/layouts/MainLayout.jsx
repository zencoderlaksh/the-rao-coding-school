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
      {/* NAVBAR MUST STAY OUTSIDE */}
      <Navbar />

      {/* LOCOMOTIVE CONTAINER */}
      <main
        data-scroll-container
        ref={scrollRef}
        className="min-h-screen overflow-hidden"
      >
        {/* REQUIRED SCROLL SECTION */}
        <div data-scroll-section>
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default MainLayout
