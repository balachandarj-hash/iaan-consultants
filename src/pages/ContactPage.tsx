import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { asset, verticals } from '../data/content'
import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what your plant or building needs"
        lead="Share your requirement for solar, fire safety, compliance or ISO — and our team will respond with clear next steps."
        image={asset('hero.jpg')}
        imageAlt="Indian industrial plant campus"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <section className="section">
        <div className="container contact-page-grid">
          <div data-reveal>
            <p className="eyebrow">Reach IAAN</p>
            <h2 className="section-title">We respond with practical next steps</h2>
            <p className="prose">
              Whether you need a Competent Person inspection, a fire safety review for a
              large building, solar installation assurance or ISO readiness support —
              start with a short brief and we will guide the engagement path.
            </p>

            <ul className="contact-points spaced">
              <li>
                <strong>Headquarters</strong>
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li>
                <strong>Leadership</strong>
                <span>Rajamuthupandy Subramanian, Founder &amp; CEO</span>
              </li>
              <li>
                <strong>Focus sectors</strong>
                <span>Manufacturing, power, cement, oil &amp; gas, automobile, MSMEs</span>
              </li>
              <li>
                <strong>Service lines</strong>
                <span>Solar · Fire Safety · Compliance · ISO Audit &amp; Certification</span>
              </li>
            </ul>

            <div className="quick-links">
              <p className="eyebrow">Quick links</p>
              <div className="quick-link-row">
                {verticals.map((item) => (
                  <Link key={item.id} to={item.path} className="quick-link">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
