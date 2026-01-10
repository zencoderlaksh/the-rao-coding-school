import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import TechIcon from "./TechIcon"

const FeaturedCourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="course-card rounded-2xl bg-[#0f0f0f] border border-white/10 p-8 flex flex-col"
    >
      <h3 className="text-2xl font-semibold mb-6">
        {course.title}
      </h3>

      <div className="flex gap-4 mb-10">
        {course.tech.map((t) => (
          <TechIcon key={t} name={t} />
        ))}
      </div>

      <Link
        to={`/courses/course-details/${course.slug}`}
        className="mt-auto inline-block bg-[#2dd4bf] text-black text-center py-3 rounded-lg font-semibold"
      >
        Know More
      </Link>
    </motion.div>
  )
}

export default FeaturedCourseCard
