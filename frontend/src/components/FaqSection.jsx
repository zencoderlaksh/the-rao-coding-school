import FaqItem from "./FaqItem"
import { faqs } from "../data/faqs"

const FaqSection = () => {
  return (
   <section
  data-scroll
  className="relative py-40 px-20 max-w-5xl mx-auto min-h-[600px]"
>

      {/* HEADING */}
      <div className="text-center mb-20">
        <h2 className="text-5xl mb-4">
          <span className="text-orange-500">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-2xl opacity-80">
          From our Students
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="flex flex-col gap-6">
        {faqs.map((faq, i) => (
          <FaqItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  )
}

export default FaqSection
