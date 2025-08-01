import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return  (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Développeur Web</p>
          <h1 className="title">Bonjour, je suis Zephir.</h1>
          <p className="subtitle">
            Je conçois des interfaces claires et performantes, avec une attention
            particulière portée à l’accessibilité, la qualité du code et l’expérience utilisateur.
          </p>

          <div className="actions">
            <Link to="/projects" className="btn btn-primary">Voir mes projets</Link>
            <Link to="/about" className="btn btn-secondary">À propos</Link>
            <Link to="/contact" className="link-ghost">Me contacter →</Link>
          </div>
        </div>
      </section>

      {/* PROJETS EN AVANT */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Projets en avant</h2>
            <Link to="/projects" className="see-all">Tout voir</Link>
          </div>

          <div className="grid">
            <article className="card">
              <h3 className="card-title">Quiz de drapeaux</h3>
              <p className="card-text">
                App React/Vite avec timer, manches et feedbacks visuels. Intégration d’une API pays.
              </p>
              <div className="card-actions">
                <Link to="/projects" className="chip">React</Link>
                <span className="chip">Vite</span>
              </div>
            </article>

            <article className="card">
              <h3 className="card-title">Guess the Country</h3>
              <p className="card-text">
                Jeu de géographie: 6 essais, indices dynamiques (population, surface, PIB, etc.).
              </p>
              <div className="card-actions">
                <span className="chip">React Router</span>
                <span className="chip">UX</span>
              </div>
            </article>

            <article className="card">
              <h3 className="card-title">Portfolio</h3>
              <p className="card-text">
                Site perso minimaliste pour présenter mon parcours, mes projets et mon CV.
              </p>
              <div className="card-actions">
                <span className="chip">Frontend</span>
                <span className="chip">Design Syst.</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* APERÇU À PROPOS */}
      <section className="section section-muted">
        <div className="container about-preview">
          <div>
            <h2>À propos</h2>
            <p className="about-text">
              Développeur web (React) avec une approche produit: clarté, performance et détails.
              J’aime apprendre vite et construire des interfaces utiles.
            </p>
            <div className="about-actions">
              <Link to="/about" className="btn btn-secondary">En savoir plus</Link>
              <a
                className="btn btn-ghost"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon CV
              </a>
            </div>
          </div>
          <ul className="stack">
            <li>React</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>API REST</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
