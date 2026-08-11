import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { LocationWithIndia } from '../components/IndiaFlag'
import { asset, capabilities, clients, verticals } from '../data/content'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Technical depth and ethical practice for Indian industry"
        lead="IAAN CONSULTANTSS is a Chennai-based industrial inspection and engineering consultancy established in 2014 by Rajamuthupandy Subramanian."
        image={asset('about-hero.jpg')}
        imageAlt="Indian engineering consultants in a professional meeting"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      <section className="section">
        <div className="container about-story-grid">
          <div data-reveal>
            <p className="eyebrow">Our firm</p>
            <h2 className="section-title">Built for factories, plants and large buildings</h2>
            <p className="prose">
              Founded by a Mechanical Engineer and Chartered Engineer, IAAN CONSULTANTSS
              serves process industries, power, cement, oil &amp; gas, automobile
              manufacturing and MSMEs across Tamil Nadu.
            </p>
            <p className="prose">
              We combine statutory competence with practical plant knowledge so clients
              stay <em>Safe, Compliant and Productive</em>. Our work spans solar plant
              installation assurance, industrial fire safety for large buildings,
              statutory compliance certifications and ISO audit readiness.
            </p>
          </div>
          <aside className="stat-panel" data-reveal>
            <div>
              <strong>2014</strong>
              <span>Year established</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Industrial clients served</span>
            </div>
            <div>
              <strong>2024–27</strong>
              <span>DISH Competent Person approval</span>
            </div>
            <div>
              <strong>Chennai</strong>
              <span>
                <LocationWithIndia>Headquarters, Tamil Nadu</LocationWithIndia>
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section band-surface">
        <div className="container">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">Leadership team</h2>
            <p className="section-lead">
              Experienced leaders guiding our inspection, solar and fire safety practice
              across Indian industry.
            </p>
          </div>
          <div className="leadership-grid" data-reveal>
            <article className="leader-card leader-card--ceo">
              <div className="leader-photo">
                <img
                  src={asset('ceo-rajamuthupandy.jpg')}
                  alt="Rajamuthupandy Subramanian, Founder and CEO of IAAN CONSULTANTSS"
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="leader-exp">30+ years</p>
              <h3>Rajamuthupandy Subramanian</h3>
              <p className="leader-role">
                Founder &amp; CEO · Chartered Engineer · Competent Person · Third Party
                Inspection Specialist
              </p>
              <p className="leader-bio">
                With 30+ years of experience in mechanical engineering, statutory
                inspections and industrial safety, he supports manufacturing industries,
                infrastructure projects, MSMEs, financial institutions and EPC
                contractors in achieving engineering compliance, operational safety and
                technical excellence.
              </p>
              <ul className="check-list leader-card-list">
                <li>Chartered Engineering services</li>
                <li>Competent Person certification</li>
                <li>Plant &amp; machinery valuation</li>
                <li>Building stability certification</li>
                <li>Industrial safety &amp; compliance audits</li>
              </ul>
            </article>
            <article className="leader-card">
              <p className="leader-exp">22+ years</p>
              <h3>Balachandar J</h3>
              <p className="leader-role">
                Head of Solar Division and Marketing
              </p>
              <p className="leader-bio">
                With over two decades in solar plant installation and marketing
                leadership, he guides IAAN&apos;s solar division from client
                engagement through project delivery—helping industries and
                commercial facilities adopt reliable renewable energy solutions
                while strengthening market presence across Tamil Nadu.
              </p>
              <ul className="check-list leader-card-list">
                <li>Solar plant installation oversight</li>
                <li>Renewable energy project delivery</li>
                <li>Client engagement &amp; business development</li>
                <li>Marketing strategy for engineering services</li>
                <li>Commercial &amp; industrial solar solutions</li>
              </ul>
            </article>
            <article className="leader-card">
              <p className="leader-exp">17+ years</p>
              <h3>Govindarajan</h3>
              <p className="leader-role">Head of Fire Safety</p>
              <p className="leader-bio">
                With more than seventeen years in fire safety for large buildings
                and industrial plants, he leads IAAN&apos;s fire safety practice—
                supporting factories, warehouses and commercial facilities in
                designing, assessing and maintaining effective fire protection
                systems that protect people, assets and operations.
              </p>
              <ul className="check-list leader-card-list">
                <li>Fire extinguishers</li>
                <li>Fire hydrant system</li>
                <li>Smoke detectors</li>
                <li>Industrial plant fire safety</li>
                <li>Large building fire protection</li>
                <li>Fire system assessment &amp; readiness</li>
                <li>Operational risk reduction</li>
                <li>Facility fire safety guidance</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container dual-lists">
          <div data-reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="mini-title">Core engineering strengths</h2>
            <ul className="check-list">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <p className="eyebrow">Service lines</p>
            <h2 className="mini-title">Four business verticals</h2>
            <ul className="link-list">
              {verticals.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section band-surface">
        <div className="container" data-reveal>
          <div className="section-intro center">
            <p className="eyebrow">PAY MASTERS</p>
            <h2 className="section-title">Organisations that work with us</h2>
          </div>
          <div className="clients-strip">
            {clients.map((client) => (
              <div key={client.name} className="client-logo" title={client.name}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner" data-reveal>
          <div>
            <p className="eyebrow">Work with IAAN</p>
            <h2>Partner with a Chennai engineering practice built for industry.</h2>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
