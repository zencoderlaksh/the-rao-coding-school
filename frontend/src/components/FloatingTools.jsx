import { useEffect } from "react"
import gsap from "gsap"
import { courseTools } from "../data/courseTools"

const FloatingTools = () => {
  useEffect(() => {
    gsap.utils.toArray(".tool-bubble").forEach((bubble) => {
      gsap.to(bubble, {
        x: gsap.utils.random(-40, 40),
        y: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    })
  }, [])

  return (
    <div className="relative h-[260px] mt-20 flex justify-center items-center">
      {courseTools.map((tool, i) => (
        <div
          key={tool.name}
          className="tool-bubble absolute"
          style={{
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        >
          <div className="bubble-inner">
            <span className="text-2xl">{tool.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FloatingTools
