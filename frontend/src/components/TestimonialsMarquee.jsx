import { useEffect, useRef } from "react"
import gsap from "gsap"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "../data/testimonials"

const TestimonialsMarquee = () => {
  const row1 = useRef(null)
  const row2 = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(row1.current, {
        xPercent: -50,
        duration: 40,
        repeat: -1,
        ease: "linear",
      })

      gsap.to(row2.current, {
        xPercent: 50,
        duration: 40,
        repeat: -1,
        ease: "linear",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      data-scroll
      className="py-32 overflow-hidden"
    >
      <h2 className="text-5xl text-center mb-20">
        What Our Students Say
      </h2>

      {/* ROW 1 */}
      <div className="relative mb-10 overflow-hidden">
        <div
          ref={row1}
          className="flex gap-8 w-max"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="relative overflow-hidden">
        <div
          ref={row2}
          className="flex gap-8 w-max"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee
