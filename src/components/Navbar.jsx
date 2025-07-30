import { useEffect, useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Fermer le menu quand on change de page
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Bloquer le scroll de la page quand le menu est ouvert (mobile)
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open)
    return () => document.body.classList.remove("no-scroll")
  }, [open])

  const linkClass = ({ isActive }) => "nav-link" + (isActive ? " active" : "")

  return (
    <header className="nav">
      <div className="nav-row">
        <Link to="/" className="brand" aria-label="Accueil">MonPortfolio</Link>

        <nav className="nav-desktop" aria-label="Navigation principale">
          <NavLink to="/" className={linkClass}>Accueil</NavLink>
          <NavLink to="/about" className={linkClass}>À propos</NavLink>
          <NavLink to="/projects" className={linkClass}>Projets</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <button
          className="burger"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu plein écran pour mobile/tablette */}
      <div className={"overlay " + (open ? "show" : "")} onClick={() => setOpen(false)} />

      <nav className={"nav-mobile " + (open ? "open" : "")} aria-label="Navigation mobile">
        <button className="close" aria-label="Fermer" onClick={() => setOpen(false)}>×</button>
        <NavLink to="/" className={linkClass}>Accueil</NavLink>
        <NavLink to="/about" className={linkClass}>À propos</NavLink>
        <NavLink to="/projects" className={linkClass}>Projets</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </header>
  )
}
