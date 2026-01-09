import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111] rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[240px] object-cover"
        />
        <span className="absolute top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full">
          {course.tag}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>

        <span className="text-xs bg-white/10 w-fit px-3 py-1 rounded">
          {course.language}
        </span>

        <div className="mt-auto">
          <p className="text-green-400 text-sm">Limited Time Discount</p>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-xl font-bold">₹ {course.price}</span>
            <span className="line-through opacity-50">
              ₹ {course.originalPrice}
            </span>
            <span className="bg-white text-black text-xs px-2 py-1 rounded">
              {course.discount}
            </span>
          </div>
        </div>
      </div>

      <Link
        to={`/courses/course-details/${course.slug}`}
        className="bg-[#2dd4bf] text-black text-center py-4 font-semibold"
      >
        View Details
      </Link>
    </motion.div>
  )
}

export default CourseCard
