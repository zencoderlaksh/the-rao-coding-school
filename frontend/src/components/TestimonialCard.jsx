const TestimonialCard = ({ t }) => {
  return (
    <div className="testimonial-card w-[420px] shrink-0 p-8 rounded-2xl">
      <p className="text-base leading-relaxed opacity-85 mb-6">
        “{t.text}”
      </p>

      <div className="mt-auto">
        <p className="text-lg font-semibold">{t.name}</p>
        <p className="text-sm opacity-60">{t.role}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
