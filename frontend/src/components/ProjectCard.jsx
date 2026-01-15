const ProjectCard = ({ project }) => {
  return (
    <div className="border border-white/10 rounded-2xl p-8 bg-black/40">
      <span className="opacity-40 text-sm">
        ({project.id})
      </span>

      <h3 className="mt-6 text-2xl font-semibold text-orange-500">
        {project.title}
      </h3>
    </div>
  )
}

export default ProjectCard
