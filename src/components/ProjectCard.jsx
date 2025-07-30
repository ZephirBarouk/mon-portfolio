import PropTypes from "prop-types"
import "./ProjectCard.css"

export default function ProjectCard({ project }) {
  const { title, description, tags, image, links, year } = project

  return (
    <article className="p-card" aria-labelledby={`${project.id}-title`}>
      <div className="p-thumb" aria-hidden="true">
        {image ? (
          <img src={image} alt="" loading="lazy" />
        ) : (
          <div className="p-thumb-placeholder" />
        )}
      </div>

      <div className="p-body">
        <div className="p-head">
          <h3 id={`${project.id}-title`} className="p-title">{title}</h3>
          {year && <span className="p-year">{year}</span>}
        </div>

        <p className="p-desc">{description}</p>

        <div className="p-tags">
          {tags?.map((t) => (
            <span key={t} className="p-chip">{t}</span>
          ))}
        </div>

        <div className="p-actions">
          {links?.demo && (
            <a className="btn btn-secondary" href={links.demo} target="_blank" rel="noreferrer">
              Démo
            </a>
          )}
          {links?.repo && (
            <a className="btn btn-ghost" href={links.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    links: PropTypes.shape({
      demo: PropTypes.string,
      repo: PropTypes.string
    }),
    year: PropTypes.number
  })
}
