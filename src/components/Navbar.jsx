import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Poster Art', href: '#poster-art' },
  { label: 'Illustrations', href: '#illustrations' },
  { label: 'Comic Art', href: '#comic-art' },
  { label: 'Traditional Drawings', href: '#traditional-drawings' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#" className="navbar-home" aria-label="Home">
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
      </a>

      <button
        className="navbar-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={`hamburger${menuOpen ? ' open' : ''}`} />
      </button>

      <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
