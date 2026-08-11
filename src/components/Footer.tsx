import { Link } from 'react-router-dom'
import { asset, verticals } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand" aria-label="IAAN CONSULTANTSS home">
            <img className="footer-logo" src={asset('logo.png')} alt="IAAN CONSULTANTSS" />
          </Link>
          <p className="footer-tagline">
            Industrial inspection &amp; engineering consultancy · Chennai, Tamil Nadu
          </p>
        </div>
        <div>
          <h4>Services</h4>
          {verticals.map((item) => (
            <Link key={item.id} to={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Home</Link>
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
  )
}
