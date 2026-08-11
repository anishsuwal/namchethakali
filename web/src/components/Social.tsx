import { restaurant } from '../data/restaurant'
import './Social.css'

type SocialItem = {
  label: string
  href: string
  icon: string
  brand: 'ig' | 'fb' | 'tt'
}

const socials: SocialItem[] = [
  {
    label: 'Instagram',
    href: restaurant.social.instagram,
    icon: '/icons/instagram.svg',
    brand: 'ig',
  },
  {
    label: 'Facebook',
    href: restaurant.social.facebook,
    icon: '/icons/facebook.svg',
    brand: 'fb',
  },
  {
    label: 'TikTok',
    href: restaurant.social.tiktok,
    icon: '/icons/tiktok.svg',
    brand: 'tt',
  },
]

export function Social() {
  return (
    <section className="section social" id="social" aria-label="Social media">
      <div className="container social-inner">
        <div>
          <span className="section-label">Follow Along</span>
          <h2 className="section-title">Stay connected</h2>
          <p className="section-copy">Daily specials, reels, and kitchen moments.</p>
        </div>
        <div className="social-buttons">
          {socials.map((item) => (
            <a
              key={item.label}
              className="social-btn"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`social-badge ${item.brand}`}>
                <img src={item.icon} alt="" width={16} height={16} aria-hidden="true" />
              </span>
              <span className="social-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
