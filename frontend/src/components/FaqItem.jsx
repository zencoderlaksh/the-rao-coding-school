import { useState, useRef, useEffect } from "react"

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    // Notify Locomotive to recalc height
    window.dispatchEvent(new Event("resize"))
  }, [open])

  return (
    <div
      className="border border-white/10 rounded-2xl px-8 py-6 transition"
    >
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-medium">
          {faq.q}
        </h3>

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ⌃
        </span>
      </button>

      <div
        ref={contentRef}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm opacity-70 leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FaqItem
