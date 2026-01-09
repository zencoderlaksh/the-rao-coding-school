import { courses } from "../data/courses"
import CourseCard from "../components/CourseCard"

const Courses = () => {
  return (
    <section data-scroll className="min-h-screen pt-40 px-20">
      <h1 className="text-5xl mb-16">Courses</h1>

      <div className="grid grid-cols-3 gap-10">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
