import { Link } from 'react-router-dom'
import { asset, clients, verticals } from '../data/content'

export function HomePage() {
  return (
    <>
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
              Chennai-based consultancy for solar plant installation, industrial fire
              safety, statutory compliance and ISO audit &amp; certification.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/services/fire-safety">
                Explore services
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Speak with us
              </Link>
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
            <Link to="/about" className="text-link light">
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
