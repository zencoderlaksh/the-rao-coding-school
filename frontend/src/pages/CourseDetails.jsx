import { useParams } from "react-router-dom"
import { courses } from "../data/courses"

const CourseDetails = () => {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)

  if (!course) return <div className="pt-40 px-20">Course not found</div>

  return (
    <section data-scroll className="pt-40 px-20 min-h-screen">
      <h1 className="text-5xl mb-6">{course.title}</h1>

      <p className="opacity-70 mb-10">
        Full course details page (syllabus, mentor, timeline)
      </p>

      <div className="flex gap-6 items-center">
        <span className="text-3xl font-bold">₹ {course.price}</span>
        <span className="line-through opacity-50">
          ₹ {course.originalPrice}
        </span>
        <span className="bg-white text-black px-3 py-1 rounded">
          {course.discount}
        </span>
      </div>
    </section>
  )
}

export default CourseDetails
