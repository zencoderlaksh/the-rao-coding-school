import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import TechIcon from "./TechIcon"
import { featuredCourses } from "../data/featuredCourses"

const FeaturedCourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="course-card rounded-2xl bg-[#0f0f0f] border border-white/10 p-8 flex flex-col"
    >
      {/* ICON IMAGE */}
      <img
        src={course.icon}
        alt={course.title}
        className="w-14 h-14 mb-6"
      />

      <h3 className="text-xl md:text-2xl font-semibold mb-6">
        {course.title}
      </h3>

      <div className="flex flex-wrap gap-4 mb-10">
        {course.tech.map((t) => (
          <TechIcon key={t} name={t} />
        ))}
      </div>

      <Link
        to={`/courses/course-details/${course.slug}`}
        className="mt-auto inline-block bg-[#2dd4bf] text-black text-center py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Know More
      </Link>
    </motion.div>
  )
}

export default FeaturedCourseCard
