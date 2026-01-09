import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top -80",
      onEnter: () => navRef.current.classList.add("nav-glass"),
      onLeaveBack: () => navRef.current.classList.remove("nav-glass"),
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-20 py-5 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          Rao Coding School
        </Link>

        <div className="flex gap-10 text-sm">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/bootcamps">Bootcamps</Link>
          <Link to="/contact">Request Callback</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
