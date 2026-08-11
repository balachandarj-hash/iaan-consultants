import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
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
              <span>Headquarters, Tamil Nadu</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section band-surface">
        <div className="container">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">Founder &amp; Chief Executive Officer</h2>
          </div>
          <div className="leader-block" data-reveal>
            <div>
              <h3>Rajamuthupandy Subramanian</h3>
              <p className="leader-role">
                Founder &amp; CEO · Chartered Engineer · Competent Person · Third Party
                Inspection Specialist
              </p>
              <p className="prose">
                With extensive experience in mechanical engineering, statutory
                inspections and industrial safety, he supports manufacturing industries,
                infrastructure projects, MSMEs, financial institutions and EPC
                contractors in achieving engineering compliance, operational safety and
                technical excellence.
              </p>
            </div>
            <ul className="check-list">
              <li>Chartered Engineering services</li>
              <li>Competent Person certification</li>
              <li>Plant &amp; machinery valuation</li>
              <li>Building stability certification</li>
              <li>Industrial safety &amp; compliance audits</li>
            </ul>
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
            <p className="eyebrow">Selected clients</p>
            <h2 className="section-title">Organisations that work with us</h2>
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
