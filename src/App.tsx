import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const verticals = [
  {
    id: 'solar',
    index: '01',
    title: 'Solar Plant Installation',
    summary:
      'End-to-end engineering oversight for industrial and commercial solar plants — installation integrity, safety, and commissioning readiness.',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Solar plant installation inspection',
      'Rooftop and ground-mount system review',
      'Structural and mounting verification',
      'Commissioning documentation support',
    ],
  },
  {
    id: 'fire-safety',
    index: '02',
    title: 'Fire Safety',
    summary:
      'Industrial fire and life-safety programmes that protect people, plant assets, and uninterrupted production.',
    image:
      'https://images.unsplash.com/photo-1592838754746-4af9f09f526f?auto=format&fit=crop&w=1600&q=80',
    services: [
      'External safety audits',
      'Fall-arrest and lifeline inspection',
      'Industrial ventilation assessment',
      'Lifting equipment certification',
    ],
  },
  {
    id: 'compliance',
    index: '03',
    title: 'Compliance',
    summary:
      'Statutory inspections and Chartered Engineering certifications trusted by factories, MSMEs, banks, and institutions.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Competent Person inspections',
      'Factory building stability certification',
      'Equipment fitness certificates',
      'Plant & machinery valuation',
    ],
  },
  {
    id: 'iso',
    index: '04',
    title: 'ISO Audit & Certification',
    summary:
      'Structured ISO assessment, internal audit preparation, and certification guidance aligned to industrial operations.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
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
  const [activeVertical, setActiveVertical] = useState(verticals[0].id)

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
      { threshold: 0.16 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const active = verticals.find((item) => item.id === activeVertical) ?? verticals[0]

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
            <a href="#clients" onClick={closeMenu}>
              Clients
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
              alt=""
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy-block">
              <p className="brand-lockup">
                IAAN <em>CONSULTANTSS</em>
              </p>
              <h1 className="hero-headline">
                Engineering confidence for industry.
              </h1>
              <p className="hero-copy">
                A Chennai-based industrial consultancy delivering solar plant
                installation, fire safety, compliance, and ISO audit &amp;
                certification with precision and integrity.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#verticals">
                  Our verticals
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
              <span>Established</span>
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

        <section className="section verticals" id="verticals">
          <div className="container">
            <div className="section-intro" data-reveal>
              <p className="eyebrow">Business verticals</p>
              <h2 className="section-title">Four practices. One standard of excellence.</h2>
              <p className="section-lead">
                IAAN CONSULTANTSS is structured around four specialised verticals —
                each delivered with the same disciplined engineering approach.
              </p>
            </div>

            <div className="vertical-showcase" data-reveal>
              <div className="vertical-tabs" role="tablist" aria-label="Verticals">
                {verticals.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeVertical === item.id}
                    className={`vertical-tab${activeVertical === item.id ? ' active' : ''}`}
                    onClick={() => setActiveVertical(item.id)}
                  >
                    <span className="vertical-tab-index">{item.index}</span>
                    <span className="vertical-tab-title">{item.title}</span>
                  </button>
                ))}
              </div>

              <div className="vertical-panel" role="tabpanel">
                <div className="vertical-panel-media">
                  <img key={active.id} src={active.image} alt="" />
                </div>
                <div className="vertical-panel-copy">
                  <p className="eyebrow">Vertical {active.index}</p>
                  <h3>{active.title}</h3>
                  <p>{active.summary}</p>
                  <ul className="service-list">
                    {active.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                  <a className="text-link" href="#contact">
                    Request this service <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="vertical-mobile-list">
              {verticals.map((item, index) => (
                <article
                  key={item.id}
                  className="vertical-mobile-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <img src={item.image} alt="" loading="lazy" />
                  <div>
                    <p className="vertical-tab-index">{item.index}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="container expertise-grid">
            <div data-reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="section-title">A single window for industrial assurance</h2>
              <p className="section-lead">
                From statutory inspections to certification programmes, we help
                manufacturing and process industries remain safe, compliant, and
                productive.
              </p>
            </div>
            <div className="expertise-steps" data-reveal>
              <div className="step">
                <span>01</span>
                <h3>Assess</h3>
                <p>Site review, statutory mapping, and clear identification of gaps.</p>
              </div>
              <div className="step">
                <span>02</span>
                <h3>Certify</h3>
                <p>Competent Person inspections, audits, and documentation you can rely on.</p>
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
              <h2 className="section-title">Built on technical depth and ethical practice</h2>
              <p className="about-story">
                Founded in 2014 by Rajamuthupandy Subramanian, Mechanical Engineer and
                Chartered Engineer, IAAN CONSULTANTSS serves process industries, power,
                cement, oil &amp; gas, automobile manufacturing, and MSMEs across Tamil Nadu.
              </p>
              <p className="about-story">
                Our mission is simple: help industries stay <em>Safe, Compliant and
                Productive</em> through professional engineering expertise.
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
              <h2>Ready to strengthen your plant’s compliance posture?</h2>
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
                <select id="vertical" name="vertical" defaultValue="compliance">
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
                  placeholder="Site type, equipment, or certification needed."
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
              Industrial inspection &amp; engineering consultancy
            </p>
          </div>
          <div>
            <h4>Verticals</h4>
            <a href="#verticals">Solar Plant Installation</a>
            <a href="#verticals">Fire Safety</a>
            <a href="#verticals">Compliance</a>
            <a href="#verticals">ISO Audit &amp; Certification</a>
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
