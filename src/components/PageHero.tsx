import { Link } from 'react-router-dom'

type Props = {
  eyebrow: string
  title: string
  lead: string
  image: string
  imageAlt: string
  crumbs?: { label: string; to?: string }[]
}

export function PageHero({ eyebrow, title, lead, image, imageAlt, crumbs }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero-media" aria-hidden="true">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="container page-hero-content">
        {crumbs && crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                {index < crumbs.length - 1 && <span className="crumbs-sep">/</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-lead">{lead}</p>
      </div>
    </section>
  )
}
