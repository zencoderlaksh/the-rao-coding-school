import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    })
    scrollRef.current.locomotive = scroll

    return () => scroll.destroy()
  }, [])

  return scrollRef
}

export default useLocomotiveScroll
