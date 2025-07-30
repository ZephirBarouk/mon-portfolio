import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">MonPortfolio</div>

        <button
          className="burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
