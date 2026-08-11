import { logoSrc, restaurant } from '../data/restaurant'
import './Header.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reels', label: 'Reels' },
  { href: '#menu', label: 'Menu' },
  { href: '#visit', label: 'Visit' },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#top" className="site-header-brand">
          <img
            className="brand-logo"
            src={logoSrc}
            alt="Namche Thakali Kitchen and Inn"
            width={60}
            height={60}
          />
          <span className="brand-text">
            <span className="brand-name">{restaurant.name}</span>
            <span className="brand-tag">{restaurant.tagline}</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-dark header-cta" href={restaurant.contact.phoneHref}>
          Call
        </a>
      </div>
    </header>
  )
}
