import { restaurant } from '../data/restaurant'
import './Social.css'

type SocialItem = {
  label: string
  href: string
  icon: string
}

const socials: SocialItem[] = [
  {
    label: 'Instagram',
    href: restaurant.social.instagram,
    icon: '/icons/instagram.svg',
  },
  {
    label: 'Facebook',
    href: restaurant.social.facebook,
    icon: '/icons/facebook.svg',
  },
  {
    label: 'TikTok',
    href: restaurant.social.tiktok,
    icon: '/icons/tiktok.svg',
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
          {socials.map((item) =>
            item.href ? (
              <a
                key={item.label}
                className="btn btn-outline social-btn"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-icon"
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </a>
            ) : (
              <span key={item.label} className="btn btn-outline social-btn is-placeholder">
                <img
                  className="social-icon"
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
                <span className="edit-note">[EDIT URL]</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
