import { motion } from "framer-motion"

const floatAnim = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

const CourseHero = ({ title, highlight, leftIcon, rightIcon }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-white/10" />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10" />
      </div>

      {/* Floating Icons */}
      <motion.img
        src={leftIcon}
        alt=""
        className="absolute left-[12%] top-[25%] w-28"
        {...floatAnim}
      />

      <motion.img
        src={rightIcon}
        alt=""
        className="absolute right-[12%] bottom-[25%] w-28"
        {...floatAnim}
      />

      {/* Text */}
      <div className="relative text-center z-10">
        <h1 className="text-7xl font-bold leading-tight">
          <span className="text-white">{title}</span>{" "}
          <span className="text-orange-500">{highlight}</span>
        </h1>
      </div>
    </section>
  )
}

export default CourseHero
