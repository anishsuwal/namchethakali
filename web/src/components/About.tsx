import { aboutImage, restaurant } from '../data/restaurant'
import './About.css'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="section-label">About</span>
          <h2 className="section-title">Flavour, comfort & hospitality</h2>
          {restaurant.about.map((paragraph) => (
            <p className="section-copy about-text" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <p className="edit-note">[EDIT] Add your restaurant story or rooms details in src/data/restaurant.ts</p>
        </div>
        <figure className="about-figure">
          <img
            src={aboutImage}
            alt="Warm interior of Namche Thakali Kitchen & Inn with prayer flags"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
