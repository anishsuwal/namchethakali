import { restaurant } from '../data/restaurant'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>{restaurant.name}</strong>
          <span>{restaurant.tagline}</span>
        </div>
        <p className="footer-copy">
          © {year} Namche Thakali. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
