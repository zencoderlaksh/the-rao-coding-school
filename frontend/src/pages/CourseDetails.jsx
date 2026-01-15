import { useParams, useLocation } from "react-router-dom"
import { courses } from "../data/courses"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useEffect } from "react"
import FloatingTools from "../components/FloatingTools"
import TestimonialsMarquee from "../components/TestimonialsMarquee"
import FaqSection from "../components/FaqSection"
import CourseHero from "../components/CourseHero"
import ProjectsHorizontal from "../components/ProjectsHorizontal"




const CourseDetails = () => {
  const { slug } = useParams()
  const location = useLocation()
  const course = courses.find((c) => c.slug === slug)

  useEffect(() => {
    gsap.from(".cd-animate", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    })
    
  }, [])

  if (!course) {
    return <div className="pt-40 px-20">Course not found</div>
  }

  return (
  <section data-scroll-section className="pt-40">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* HERO */}
      <section className="px-20 mb-24">
        <FloatingTools />

        <h1 className="text-6xl font-bold cd-animate">
          {course.title}
        </h1>

        <p className="mt-4 text-xl opacity-70 cd-animate">
          {course.subtitle}
        </p>

        <div className="flex items-center gap-6 mt-8 cd-animate">
          <span className="text-3xl font-bold">₹ {course.price}</span>
          <span className="line-through opacity-50">
            ₹ {course.originalPrice}
          </span>
          <span className="bg-[#2dd4bf] text-black px-4 py-1 rounded">
            {course.language}
          </span>
        </div>

        <button className="mt-10 bg-[#2dd4bf] text-black px-10 py-4 rounded-lg font-semibold cd-animate">
          Enroll Now
        </button>
      </section>
     <CourseHero
  title={course.hero?.title || ""}
  highlight={course.hero?.highlight || ""}
  leftIcon={course.hero?.leftIcon}
  rightIcon={course.hero?.rightIcon}
/>

      {/* TRUST STRIP */}
      <section className="px-20 mb-24 grid grid-cols-4 gap-10">
        {["Live Classes", "Job Ready", "Real Projects", "Mentorship"].map(
          (item) => (
            <div
              key={item}
              className="border border-white/10 p-6 text-center cd-animate"
            >
              {item}
            </div>
          )
        )}
      </section>

      {/* OVERVIEW */}
      <section className="px-20 mb-24 grid grid-cols-2 gap-20">
        <div className="cd-animate">
          <h2 className="text-4xl mb-6">Course Overview</h2>
          <p className="opacity-70 leading-relaxed">
            {course.overview}
          </p>
        </div>

        <div className="border border-white/10 p-8 cd-animate">
          <p>Duration: {course.duration}</p>
          <p className="mt-2">Mode: {course.mode}</p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="px-20 mb-24">
        <h2 className="text-4xl mb-10 cd-animate">
          What You Will Learn
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {course.learnings.map((item) => (
            <div
              key={item}
              className="border border-white/10 p-6 cd-animate"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="px-20 mb-24">
        <h2 className="text-4xl mb-10 cd-animate">
          Curriculum
        </h2>

        <div className="flex flex-col gap-6">
          {course.syllabus.map((module) => (
            <div
              key={module.title}
              className="border border-white/10 p-6 cd-animate"
            >
              <h3 className="text-xl mb-4">{module.title}</h3>
              <ul className="opacity-70 list-disc pl-6">
                {module.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsHorizontal projects={course.projects} />

    

      {/* TESTIMONIALS */}
      <TestimonialsMarquee />

      {/* FAQ */}
      <FaqSection />
    </motion.div>
  </section>
)

}

export default CourseDetails
