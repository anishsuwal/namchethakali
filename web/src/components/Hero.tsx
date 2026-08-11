import { heroImage, logoSrc, restaurant } from '../data/restaurant'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Welcome">
      <img
        className="hero-media"
        src={heroImage}
        alt="Traditional Thakali khana served at Namche Thakali"
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content container">
        <img
          className="hero-logo"
          src={logoSrc}
          alt="Namche Thakali Kitchen and Inn official logo"
          width={180}
          height={220}
        />
        <h1 className="hero-title">
          <span className="hero-name">{restaurant.name}</span>
          <span className="hero-sub">{restaurant.tagline}</span>
        </h1>
        <p className="hero-welcome">{restaurant.welcome}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#menu">
            View Menu
          </a>
          <a className="btn btn-secondary" href={restaurant.contact.phoneHref}>
            Call Us
          </a>
          <a
            className="btn btn-secondary"
            href={restaurant.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn btn-secondary"
            href={restaurant.contact.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
