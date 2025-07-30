import data from "../data/projects.json"
import ProjectCard from "../components/ProjectCard"
import "./Projects.css"

export default function Projects() {
  // Tri : les "featured" d'abord, puis par année desc
  const projects = [...data].sort((a, b) => {
    if (a.featured === b.featured) return (b.year ?? 0) - (a.year ?? 0)
    return a.featured ? -1 : 1
  })

  return (
    <div className="page">
      <div className="projects">
        <section className="container">
          <header className="projects-head">
            <h1>Projets</h1>
            <p className="lead">
              Une sélection de travaux : apps front, jeux de géographie et expérimentations UI.
            </p>
          </header>

          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
