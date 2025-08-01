import "./About.css"

export default function About() {
  return (
    <div className="page about-page">
      <div className="page-scroll">
        {/* UN SEUL container qui applique LA MÊME grille à tout */}
        <section className="container about-grid">
          {/* Header → occupe toute la largeur de la grille */}
          <header className="about-head">
            <h1>À propos</h1>
            <p className="lead">
              Développeur web orienté produit : clarté, performance et UX.
            </p>
          </header>

          {/* Colonne 1 */}
          <div className="about-photo">
            <img src="/images/me.jpg" alt="Portrait de Zephir" />
          </div>

          {/* Colonne 2 */}
          <div className="about-bio">
            <h2>Parcours</h2>
            <p>
              Après 6 mois de formation au développement web (Le Wagon), j’ai
              enchaîné des projets front en React/Vite : quiz de géographie,
              portfolio, et UI expérimentales. J’accorde une attention particulière
              à l’accessibilité, aux performances et à la qualité du code.
            </p>
            <p>
              Aujourd’hui au Canada, je continue d’apprendre vite en construisant des
              interfaces utiles et solides, avec une approche produit.
            </p>

            <div className="about-actions">
              <a className="btn btn-primary" href="/cv.pdf" target="_blank" rel="noreferrer">
                Voir mon CV
              </a>
              <a className="btn btn-secondary" href="mailto:contact@example.com">
                Me contacter
              </a>
            </div>
          </div>

          {/* Sections → s’étendent sur toute la grille */}
          <section className="about-section">
            <h2>Expériences & Projets</h2>
            <dl className="timeline">
              <div>
                <dt>2025 — Guess the Country</dt>
                <dd>Jeu React avec indices dynamiques (population, surface, PIB). UX, logique et routage.</dd>
              </div>
              <div>
                <dt>2025 — Quiz de drapeaux</dt>
                <dd>App React/Vite avec manches, timer, feedbacks visuels, intégration API pays.</dd>
              </div>
              <div>
                <dt>2024 — Formation Web (Le Wagon)</dt>
                <dd>Fondamentaux front/back, travail en équipe, bonnes pratiques de code.</dd>
              </div>
            </dl>
          </section>

          <section className="about-section">
            <h2>Compétences</h2>
            <ul className="skills">
              <li>React</li><li>Vite</li><li>React Router</li>
              <li>JavaScript</li><li>HTML/CSS</li><li>API REST</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  )
}
