import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import type { Vertical } from '../data/content'
import { verticals } from '../data/content'

type Props = { vertical: Vertical }

export function ServicePage({ vertical }: Props) {
  const others = verticals.filter((item) => item.id !== vertical.id)

  return (
    <>
      <PageHero
        eyebrow={`Vertical ${vertical.index}`}
        title={vertical.heroTitle}
        lead={vertical.heroLead}
        image={vertical.image}
        imageAlt={vertical.imageAlt}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
          { label: vertical.title },
        ]}
      />

      <section className="section">
        <div className="container detail-split">
          <div data-reveal>
            <p className="eyebrow">Overview</p>
            <h2 className="section-title">{vertical.title}</h2>
            {vertical.overview.map((para) => (
              <p key={para.slice(0, 28)} className="prose">
                {para}
              </p>
            ))}
            <Link className="btn btn-dark" to="/contact">
              Discuss this service
            </Link>
          </div>
          <div className="detail-photo" data-reveal>
            <img src={vertical.detailImage} alt={vertical.detailAlt} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section band-surface">
        <div className="container">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">Scope of work</p>
            <h2 className="section-title">What this engagement covers</h2>
          </div>
          <div className="card-grid">
            {vertical.services.map((service, index) => (
              <article
                key={service.title}
                className="info-card"
                data-reveal
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div data-reveal>
            <p className="eyebrow">Delivery approach</p>
            <h2 className="section-title">How we execute</h2>
            <p className="section-lead">
              A disciplined three-stage method designed for Indian plant realities and
              decision timelines.
            </p>
          </div>
          <div className="process-steps" data-reveal>
            {vertical.process.map((item) => (
              <div key={item.step} className="process-step">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-surface">
        <div className="container dual-lists">
          <div data-reveal>
            <p className="eyebrow">Who we support</p>
            <h2 className="mini-title">Ideal for</h2>
            <ul className="check-list">
              {vertical.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <p className="eyebrow">Business outcomes</p>
            <h2 className="mini-title">What you gain</h2>
            <ul className="check-list">
              {vertical.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">Related services</p>
            <h2 className="section-title">Continue exploring</h2>
          </div>
          <div className="related-grid">
            {others.map((item) => (
              <Link key={item.id} to={item.path} className="related-card" data-reveal>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container contact-grid">
          <div data-reveal>
            <p className="eyebrow">Next step</p>
            <h2 className="section-title">Request a consultation</h2>
            <p className="section-lead">
              Share your plant context and we will respond with clear next steps for{' '}
              {vertical.title.toLowerCase()}.
            </p>
          </div>
          <div data-reveal>
            <ContactForm defaultVertical={vertical.id} compact />
          </div>
        </div>
      </section>
    </>
  )
}
