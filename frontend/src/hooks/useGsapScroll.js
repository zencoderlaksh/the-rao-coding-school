import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useGsapScroll = (scrollRef) => {
  useEffect(() => {
    if (!scrollRef?.current) return

    const locoScroll = scrollRef.current.locomotive

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    })

    locoScroll.on("scroll", ScrollTrigger.update)
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.killAll()
    }
  }, [scrollRef])
}

export default useGsapScroll
