import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

const verticals = [
  {
    id: 'solar',
    index: '01',
    title: 'Solar Plant Installation',
    summary:
      'Engineering oversight for industrial and commercial solar plants across Tamil Nadu — from rooftop arrays on factory sheds to ground-mount systems ready for commissioning.',
    image: asset('solar.jpg'),
    imageAlt: 'Rooftop solar panels on an industrial factory building in India',
    services: [
      'Industrial rooftop and ground-mount solar inspection',
      'Structural and mounting verification for factory roofs',
      'Installation integrity and safety review',
      'Commissioning documentation support',
    ],
  },
  {
    id: 'fire-safety',
    index: '02',
    title: 'Fire Safety',
    summary:
      'Industrial fire safety for large buildings, factories, warehouses and plant campuses — protecting people, assets and uninterrupted production.',
    image: asset('fire.jpg'),
    imageAlt: 'Large Indian industrial building with fire hydrant and safety infrastructure',
    services: [
      'Fire safety audits for factories and large buildings',
      'Hydrant, hose reel and fire-protection system checks',
      'Life-safety, exit and emergency preparedness review',
      'Industrial ventilation and high-risk area assessment',
    ],
  },
  {
    id: 'compliance',
    index: '03',
    title: 'Compliance',
    summary:
      'Statutory inspections and Chartered Engineering certifications for Indian factories, MSMEs, banks and institutions.',
    image: asset('compliance.jpg'),
    imageAlt: 'Indian engineer inspecting machinery inside a manufacturing plant',
    services: [
      'Competent Person inspections under Tamil Nadu Factories Rules',
      'Factory building stability certification',
      'Equipment fitness and machinery installation certificates',
      'Plant & machinery valuation',
    ],
  },
  {
    id: 'iso',
    index: '04',
    title: 'ISO Audit & Certification',
    summary:
      'Practical ISO assessment, internal audit preparation and certification guidance aligned to Indian industrial operations.',
    image: asset('iso.jpg'),
    imageAlt: 'ISO audit discussion with Indian professionals in an industrial office',
    services: [
      'ISO gap analysis and assessment',
      'Internal audit preparation',
      'Management system certification support',
      'Process documentation guidance',
    ],
  },
]

const clients = [
  'Sendhamarai Engineering',
  'Venkateshwara Fibre Glass',
  'IL&FS Tamil Nadu Power',
  'Hindustan Coca-Cola',
  'Aachi Masala Foods',
]

const capabilities = [
  'Chartered Engineering & Competent Person services',
  'Third-party inspection and NDT support',
  'Plant & machinery valuation for banks and MSMEs',
  'Structural stability and equipment fitness',
  'Safety, energy, and compliance audits',
  'Factory plans, layouts, and engineering advisory',
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
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
          <a href="#top" className="logo" onClick={closeMenu}>
            <span className="logo-mark">IAAN</span>
            <span className="logo-word">CONSULTANTSS</span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>

          <nav className={`nav${menuOpen ? ' open' : ''}`} aria-label="Primary">
            <a href="#verticals" onClick={closeMenu}>
              Verticals
            </a>
            <a href="#expertise" onClick={closeMenu}>
              Expertise
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Enquire
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src={asset('hero.jpg')} alt="" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy-block">
              <p className="brand-lockup">
                IAAN <em>CONSULTANTSS</em>
              </p>
              <h1 className="hero-headline">
                Industrial assurance for Indian plants and large buildings.
              </h1>
              <p className="hero-copy">
                Chennai-based consultancy for solar plant installation, industrial
                fire safety, statutory compliance and ISO audit &amp; certification.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#verticals">
                  View verticals
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Speak with us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Key credentials">
          <div className="container trust-grid">
            <div>
              <strong>2014</strong>
              <span>Established in Chennai</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Industrial clients</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Core verticals</span>
            </div>
            <div>
              <strong>DISH</strong>
              <span>Competent Person</span>
            </div>
          </div>
        </section>

        <section className="section verticals-intro" id="verticals">
          <div className="container section-intro" data-reveal>
            <p className="eyebrow">Business verticals</p>
            <h2 className="section-title">Built for Indian industry</h2>
            <p className="section-lead">
              Four specialised practices serving factories, warehouses, process plants
              and large commercial buildings across Tamil Nadu.
            </p>
          </div>
        </section>

        {verticals.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className={`vertical-band${index % 2 === 1 ? ' reverse' : ''}${index % 2 === 0 ? ' band-tint' : ''}`}
          >
            <div className="vertical-band-media" data-reveal>
              <img src={item.image} alt={item.imageAlt} loading="lazy" />
            </div>
            <div className="vertical-band-copy" data-reveal>
              <p className="eyebrow">Vertical {item.index}</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <ul className="service-list">
                {item.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <a className="btn btn-dark" href="#contact">
                Request this service
              </a>
            </div>
          </section>
        ))}

        <section className="section expertise" id="expertise">
          <div className="container expertise-grid">
            <div data-reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="section-title">A single window for industrial assurance</h2>
              <p className="section-lead">
                From statutory inspections to fire safety and ISO programmes, we help
                Indian manufacturing and process industries stay safe, compliant and
                productive.
              </p>
            </div>
            <div className="expertise-steps" data-reveal>
              <div className="step">
                <span>01</span>
                <h3>Assess</h3>
                <p>Site review, statutory mapping and clear identification of gaps.</p>
              </div>
              <div className="step">
                <span>02</span>
                <h3>Certify</h3>
                <p>Competent Person inspections, audits and documentation you can rely on.</p>
              </div>
              <div className="step">
                <span>03</span>
                <h3>Advise</h3>
                <p>Practical engineering guidance that strengthens operations and compliance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div data-reveal>
              <p className="eyebrow">About the firm</p>
              <h2 className="section-title">Technical depth for Indian industry</h2>
              <p className="about-story">
                Founded in 2014 by Rajamuthupandy Subramanian, Mechanical Engineer and
                Chartered Engineer, IAAN CONSULTANTSS serves process industries, power,
                cement, oil &amp; gas, automobile manufacturing and MSMEs across Tamil Nadu.
              </p>
              <p className="about-story">
                Our mission: help industries stay <em>Safe, Compliant and Productive</em>{' '}
                through professional engineering expertise.
              </p>
            </div>
            <aside className="about-panel" data-reveal>
              <h3>Core capabilities</h3>
              <ul>
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section clients" id="clients">
          <div className="container" data-reveal>
            <div className="section-intro center">
              <p className="eyebrow">Selected clients</p>
              <h2 className="section-title">Trusted across industry</h2>
            </div>
            <div className="clients-strip">
              {clients.map((client) => (
                <span key={client} className="client-chip">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner" data-reveal>
            <div>
              <p className="eyebrow">Engage IAAN</p>
              <h2>Need support for your plant or large building?</h2>
            </div>
            <a className="btn btn-primary" href="#contact">
              Begin a conversation
            </a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div data-reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Tell us about your requirement</h2>
              <p className="section-lead">
                Share the vertical and site context. Our team will respond with clear
                next steps.
              </p>
              <ul className="contact-points">
                <li>
                  <strong>Headquarters</strong>
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
                <li>
                  <strong>Sectors</strong>
                  <span>Manufacturing, power, cement, oil &amp; gas, automobile, MSMEs</span>
                </li>
                <li>
                  <strong>Leadership</strong>
                  <span>Rajamuthupandy Subramanian, Founder &amp; CEO</span>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} data-reveal>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="company">Organisation</label>
                  <input id="company" name="company" required placeholder="Company name" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="vertical">Vertical of interest</label>
                <select id="vertical" name="vertical" defaultValue="fire-safety">
                  <option value="solar">Solar Plant Installation</option>
                  <option value="fire-safety">Fire Safety</option>
                  <option value="compliance">Compliance</option>
                  <option value="iso">ISO Audit &amp; Certification</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Brief requirement</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Plant type, building, or certification needed."
                />
              </div>
              <button className="btn btn-primary" type="submit">
                {submitted ? 'Enquiry received' : 'Submit enquiry'}
              </button>
              <p className="form-note">
                {submitted
                  ? 'Thank you. Connect this form to your email or CRM for live enquiries.'
                  : 'Demo form — connect to your preferred inbox before going live.'}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">
              IAAN <em>CONSULTANTSS</em>
            </p>
            <p className="footer-tagline">
              Industrial inspection &amp; engineering consultancy · Chennai
            </p>
          </div>
          <div>
            <h4>Verticals</h4>
            <a href="#solar">Solar Plant Installation</a>
            <a href="#fire-safety">Fire Safety</a>
            <a href="#compliance">Compliance</a>
            <a href="#iso">ISO Audit &amp; Certification</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Credentials</h4>
            <p>Competent Person · DISH</p>
            <p>Chartered Engineer</p>
            <p>Established 2014</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} IAAN CONSULTANTSS. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
