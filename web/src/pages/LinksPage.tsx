import { logoSrc, restaurant } from '../data/restaurant'
import './LinksPage.css'

const socials = [
  {
    label: 'Instagram',
    href: restaurant.social.instagram,
    icon: '/icons/instagram.svg',
    className: 'ig',
  },
  {
    label: 'Facebook',
    href: restaurant.social.facebook,
    icon: '/icons/facebook.svg',
    className: 'fb',
  },
  {
    label: 'TikTok',
    href: restaurant.social.tiktok,
    icon: '/icons/tiktok.svg',
    className: 'tt',
  },
] as const

export function LinksPage() {
  return (
    <div className="links-page">
      <div className="links-shell">
        <header className="links-header">
          <img
            className="links-logo"
            src={logoSrc}
            alt="Namche Thakali Kitchen and Inn official logo"
            width={112}
            height={112}
          />
          <h1>{restaurant.name}</h1>
          <p className="links-bio">{restaurant.linksBio}</p>

          <div className="links-icon-row" aria-label="Social media">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="links-icon-btn"
              >
                <img src={item.icon} alt="" width={18} height={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </header>

        <a
          className="links-btn links-btn-review"
          href={restaurant.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="links-btn-title">Leave a review</span>
          <span className="links-btn-sub">
            <span className="links-star" aria-hidden="true">
              ★
            </span>
            Google Reviews
          </span>
        </a>

        <p className="links-section-label">Socials</p>

        <div className="links-social-stack">
          {socials.map((item) => (
            <a
              key={item.label}
              className="links-btn links-btn-social"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`links-brand-badge ${item.className}`}>
                <img src={item.icon} alt="" width={20} height={20} aria-hidden="true" />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <footer className="links-footer">
          <a href="/">Visit full website</a>
        </footer>
      </div>
    </div>
  )
}
