import { useEffect, useId, useState } from 'react'
import './Lightbox.css'

type LightboxProps = {
  images: readonly { src: string; alt: string }[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const titleId = useId()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (index === null) return

    setLoaded(false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, images.length, onClose, onNavigate])

  if (index === null) return null

  const image = images[index]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="visually-hidden">
        Enlarged gallery image
      </p>
      <button className="lightbox-close" type="button" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button
        className="lightbox-nav prev"
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index - 1 + images.length) % images.length)
        }}
      >
        ‹
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className={`lightbox-image ${loaded ? 'is-loaded' : ''}`}
        onClick={(e) => e.stopPropagation()}
        onLoad={() => setLoaded(true)}
      />
      <button
        className="lightbox-nav next"
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index + 1) % images.length)
        }}
      >
        ›
      </button>
    </div>
  )
}
