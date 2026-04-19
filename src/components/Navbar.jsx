import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Poster Art', to: '/gallery/poster-art' },
  { label: 'Illustrations', to: '/gallery/illustrations' },
  { label: 'Comic Art', to: '/gallery/comic-art' },
  { label: 'Traditional Drawings', to: '/gallery/traditional-drawings' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-home" aria-label="Home" onClick={closeMenu}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 12L12 3l9 9" />
          <path d="M9 21V12h6v9" />
        </svg>
        <span>Home</span>
      </NavLink>

      <button
        ref={toggleRef}
        className="navbar-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={`hamburger${menuOpen ? ' open' : ''}`} />
      </button>

      <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
        {navLinks.map(({ label, to }) => (
          <li key={to}>
            <NavLink to={to} onClick={closeMenu}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
