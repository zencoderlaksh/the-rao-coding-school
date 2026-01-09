import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "../pages/Home"
import Courses from "../pages/Courses"
import Contact from "../pages/Contact"
import MainLayout from "../layouts/MainLayout"
import CourseDetails from "../pages/CourseDetails"

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/course-details/:slug" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
