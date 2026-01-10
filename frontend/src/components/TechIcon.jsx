const icons = {
  java: "☕",
  spring: "🌱",
  react: "⚛️",
  html: "🟧",
  css: "🟦",
  js: "🟨",
  c: "🔵",
  cpp: "🟣",
  python: "🐍",
}

const TechIcon = ({ name }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
      {icons[name]}
    </div>
  )
}

export default TechIcon
