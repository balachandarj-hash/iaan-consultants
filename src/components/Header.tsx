import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { asset, verticals } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const close = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Chennai, Tamil Nadu · Est. 2014</span>
          <span>Competent Person · DISH Approved 2024–2027</span>
        </div>
      </div>

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={close} aria-label="IAAN CONSULTANTSS home">
            <img className="logo-img" src={asset('logo.png')} alt="IAAN CONSULTANTSS" />
          </Link>

          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>

          <nav className={`nav${menuOpen ? ' open' : ''}`} aria-label="Primary">
            <NavLink to="/" end onClick={close}>
              Home
            </NavLink>

            <div className={`nav-dd${servicesOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="nav-dd-btn"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
              </button>
              <div className="nav-dd-menu">
                {verticals.map((item) => (
                  <NavLink key={item.id} to={item.path} onClick={close}>
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/about" onClick={close}>
              About
            </NavLink>
            <NavLink to="/contact" className="nav-cta" onClick={close}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
