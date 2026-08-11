import { useState } from 'react'
import { galleryImages } from '../data/restaurant'
import { Lightbox } from './Lightbox'
import './Gallery.css'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="gallery-intro">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">From our kitchen</h2>
          <p className="section-copy">
            A taste of what we serve — Thakali sets, momos, drinks, and the warmth of our table.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`gallery-item item-${index + 1}`}
              onClick={() => setActive(index)}
              aria-label={`View larger: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </section>
  )
}
