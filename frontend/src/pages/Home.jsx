import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { featuredCourses } from "../data/featuredCourses"
import FeaturedCourseCard from "../components/FeaturedCourseCard"
import bannerImage from "../assets/images/Banner.jpg"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(".cta-box", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".cta-section",
          scroller: "[data-scroll-container]",
          start: "top 80%",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
      <section data-scroll-section className="pt-[96px]">
      {/* HERO */}
      <section className="min-h-[90vh] px-6 md:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="hero-title text-4xl md:text-7xl font-bold leading-tight">
            Learn Coding <br /> the Right Way
          </h1>

          <p className="hero-sub mt-6 text-lg md:text-xl opacity-70 max-w-xl">
            Industry-focused programs by Rao Coding School
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={bannerImage}
            alt="Coding classroom"
            className="w-full h-[320px] md:h-[480px] object-cover"
          />
        </div>
      </section>

      {/* COURSES */}
     <section className="courses-section px-6 md:px-20 py-32">
        <h2 className="text-3xl md:text-5xl mb-4">
          Featured Courses
        </h2>

        <p className="opacity-70 mb-14 max-w-2xl">
          Industry-focused programs to build strong fundamentals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCourses.map((course) => (
            <FeaturedCourseCard
              key={course.slug}
              course={course}
            />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section px-6 md:px-20 py-32">
        <h2 className="text-3xl md:text-5xl mb-10">
          Why Rao Coding School
        </h2>

        <p className="why-line text-lg md:text-xl mb-4">
          Practical, industry-focused teaching
        </p>
        <p className="why-line text-lg md:text-xl mb-4">
          Strong fundamentals + real projects
        </p>
        <p className="why-line text-lg md:text-xl">
          Personal mentorship & guidance
        </p>
      </section>

      {/* ENQUIRY CTA */}
  <section className="cta-section px-6 md:px-20 py-32 flex items-center justify-center">
        <div className="cta-box backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 w-full max-w-xl">
          <h2 className="text-3xl mb-8 text-center font-semibold">
            Student Enquiry
          </h2>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-white/30 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-white/30 py-3 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border-b border-white/30 py-3 outline-none"
            />

            {/* IMPORTANT FIX: DROPDOWN COLORS */}
            <select
              className="bg-black text-white border-b border-white/30 py-3 outline-none"
            >
              <option value="">Select Course</option>
              <option className="bg-black text-white">
                MERN Stack
              </option>
              <option className="bg-black text-white">
                C / C++ (DSA)
              </option>
              <option className="bg-black text-white">
                Java Backend
              </option>
            </select>

            <button
              type="submit"
              className="mt-8 border border-white py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Home
