const ProjectsHorizontal = ({ projects }) => {
  return (
    <section className="py-32 px-20">
      <div className="text-center mb-20">
        <p className="text-sm tracking-widest opacity-50 mb-4">
          SKILLS
        </p>
        <h2 className="text-5xl leading-tight">
          <span className="text-orange-500">
            Projects You Will Build
          </span>
          <br />
          Master Real-World Development
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-2xl p-8 bg-black/40"
          >
            <span className="opacity-40 text-sm">
              ({String(i + 1).padStart(2, "0")})
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-orange-500">
              {p}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsHorizontal
