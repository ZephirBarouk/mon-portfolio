import "./Contact.css"

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // En attendant un backend, on ouvre l'email prérempli :
    const form = new FormData(e.currentTarget)
    const name = encodeURIComponent(form.get("name") || "")
    const email = encodeURIComponent(form.get("email") || "")
    const subject = encodeURIComponent(form.get("subject") || "Contact portfolio")
    const message = encodeURIComponent(form.get("message") || "")

    const mailto = `mailto:contact@example.com?subject=${subject}&body=Nom:%20${name}%0AEmail:%20${email}%0A%0A${message}`
    window.location.href = mailto
  }

  return (
    <div className="page contact-page">
      <header className="container contact-head">
        <h1>Contact</h1>
        <p className="lead">Une idée, un projet, une opportunité&nbsp;? Écris-moi.</p>
      </header>

      <div className="page-scroll">
        <section className="container contact-grid">
          {/* Colonne formulaire */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Nom</label>
              <input id="name" name="name" type="text" autoComplete="name" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="field">
              <label htmlFor="subject">Sujet</label>
              <input id="subject" name="subject" type="text" placeholder="Portfolio / Mission / Autre" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required />
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">Envoyer</button>
              <a className="btn btn-secondary" href="mailto:contact@example.com">Écrire par email</a>
            </div>
          </form>

          {/* Colonne infos */}
          <aside className="contact-aside">
            <div className="card">
              <h2>Coordonnées</h2>
              <ul className="list">
                <li><span>📧</span><a href="mailto:contact@example.com">contact@example.com</a></li>
                <li><span>🌐</span><a href="https://github.com/ton-user" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><span>💼</span><a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>

            <div className="card">
              <h2>Disponibilités</h2>
              <p className="muted">Réponse sous 24–48h. Basé au Canada (UTC-5/-4).</p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
