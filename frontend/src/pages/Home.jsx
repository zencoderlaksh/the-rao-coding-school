import { motion } from "framer-motion"
import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { featuredCourses } from "../data/featuredCourses"
import FeaturedCourseCard from "../components/FeaturedCourseCard"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    // HERO (page load)
    gsap.from(".hero-title", {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })

    gsap.from(".hero-sub", {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power4.out",
    })

    // COURSES
    gsap.from(".course-card", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".courses-section",
        scroller: "[data-scroll-container]",
        start: "top 70%",
      },
    })

    // WHY US
    gsap.from(".why-line", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".why-section",
        scroller: "[data-scroll-container]",
        start: "top 75%",
      },
    })

    // CTA
    gsap.from(".cta-box", {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".cta-section",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    })
  }, [])

  return (
    <motion.section
      data-scroll
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-40"
    >
      {/* HERO */}
      <section
        data-scroll
        className="min-h-screen p-20 flex flex-col justify-center"
      >
        <h1 className="hero-title text-7xl font-bold leading-tight">
          Learn Coding <br /> the Right Way
        </h1>
        <p className="hero-sub mt-6 text-xl opacity-70">
          Industry-focused programs by Rao Coding School
        </p>
      </section>

      {/* COURSES */}
      <section
  data-scroll
  className="courses-section min-h-screen p-20"
>
  <h2 className="text-5xl mb-4">Featured Courses</h2>
  <p className="opacity-70 mb-14">
    Industry-focused programs to build strong fundamentals
  </p>

  <div className="grid grid-cols-4 gap-10">
    {featuredCourses.map((course) => (
      <FeaturedCourseCard
        key={course.slug}
        course={course}
      />
    ))}
  </div>
</section>

      {/* WHY US */}
      <section
        data-scroll
        className="why-section min-h-screen p-20 flex flex-col justify-center"
      >
        <h2 className="text-5xl mb-10">Why Rao Coding School</h2>

        <p className="why-line text-xl mb-4">
          Practical, industry-focused teaching
        </p>
        <p className="why-line text-xl mb-4">
          Strong fundamentals + real projects
        </p>
        <p className="why-line text-xl">
          Personal mentorship & guidance
        </p>
      </section>

      {/* ENQUIRY CTA */}
      <section
        data-scroll
        className="cta-section min-h-screen p-20 flex items-center justify-center"
      >
        <div className="cta-box border p-16 w-full max-w-xl">
          <h2 className="text-4xl mb-8 text-center">
            Student Enquiry
          </h2>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border p-4 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border p-4 outline-none"
            />

            <select className="bg-transparent border p-4 outline-none">
              <option value="">Select Course</option>
              <option>Web Development</option>
              <option>JavaScript</option>
              <option>DSA</option>
            </select>

            <button
              type="submit"
              className="border py-4 mt-4 hover:bg-white hover:text-black transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </motion.section>
  )
}

export default Home
