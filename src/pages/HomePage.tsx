import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset, clients, verticals } from '../data/content'

const SLIDE_MS = 5000

export function HomePage() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const slide = verticals[active]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion || paused) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % verticals.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, paused])

  const goTo = (index: number) => {
    setActive(index)
  }

  return (
    <>
      <section
        className="hero hero-light"
        aria-roledescription="carousel"
        aria-label="IAAN CONSULTANTSS service verticals"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setPaused(false)
          }
        }}
      >
        <div className="container hero-content">
          <div className="hero-copy-block">
            <p className="brand-lockup">
              <img
                className="brand-lockup-img"
                src={asset('logo.png')}
                alt="IAAN CONSULTANTSS"
              />
            </p>
            <h1 className="hero-headline" key={`title-${slide.id}`}>
              {slide.heroTitle}
            </h1>
            <p className="hero-copy" key={`lead-${slide.id}`}>
              {slide.heroLead}
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to={slide.path}>
                Explore {slide.navLabel}
              </Link>
              <Link className="btn btn-outline" to="/contact">
                Speak with us
              </Link>
            </div>
          </div>

          <div className="hero-slider" data-reveal>
            <p className="hero-slide-label" aria-live="polite">
              <span className="hero-slide-index">{slide.index}</span>
              {slide.title}
            </p>
            <div className="hero-aside">
              <div className="hero-slides" aria-live="polite" aria-atomic="true">
                {verticals.map((item, index) => (
                  <figure
                    key={item.id}
                    className={`hero-slide${index === active ? ' is-active' : ''}`}
                    aria-hidden={index !== active}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </figure>
                ))}
              </div>
            </div>
            <div
              className="hero-dots"
              role="tablist"
              aria-label="Choose service vertical"
            >
              {verticals.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className={`hero-dot${index === active ? ' is-active' : ''}`}
                  aria-selected={index === active}
                  aria-label={`Show ${item.title}`}
                  onClick={() => goTo(index)}
                />
              ))}
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

      <section className="section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">Our services</p>
            <h2 className="section-title">Four practices. One engineering standard.</h2>
            <p className="section-lead">
              Dedicated service lines for Indian factories, warehouses, process plants
              and large commercial buildings.
            </p>
          </div>

          <div className="service-grid">
            {verticals.map((item, index) => (
              <article
                key={item.id}
                className="service-tile"
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="service-tile-media">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </div>
                <div className="service-tile-body">
                  <p className="service-tile-index">{item.index}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link to={item.path} className="text-link">
                    View service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section expertise">
        <div className="container expertise-grid">
          <div data-reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">A single window for industrial assurance</h2>
            <p className="section-lead">
              From statutory inspections to fire safety and ISO programmes, we help
              Indian manufacturing stay safe, compliant and productive.
            </p>
            <Link to="/about" className="text-link">
              About the firm <span aria-hidden="true">→</span>
            </Link>
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

      <section className="section">
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
          <Link className="btn btn-primary" to="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
