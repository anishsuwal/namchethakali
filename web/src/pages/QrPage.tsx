import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { restaurant } from '../data/restaurant'
import './QrPage.css'

function resolveLinksUrl() {
  const configured = restaurant.siteUrl?.trim().replace(/\/$/, '')
  if (configured) return `${configured}/links`
  if (typeof window !== 'undefined') return `${window.location.origin}/links`
  return '/links'
}

export function QrPage() {
  const linksUrl = useMemo(() => resolveLinksUrl(), [])
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=12&data=${encodeURIComponent(linksUrl)}`

  return (
    <div className="qr-page">
      <div className="qr-card">
        <p className="qr-eyebrow">Printable QR</p>
        <h1>Scan for review & socials</h1>
        <p className="qr-copy">
          Guests who scan this code open your links page — Leave a review, Instagram, Facebook, and
          TikTok.
        </p>

        <img className="qr-image" src={qrSrc} alt={`QR code linking to ${linksUrl}`} width={280} height={280} />

        <p className="qr-url">{linksUrl}</p>

        <div className="qr-actions">
          <a className="btn btn-primary" href={qrSrc} download="namche-thakali-links-qr.png" target="_blank" rel="noopener noreferrer">
            Download QR
          </a>
          <Link className="btn btn-outline" to="/links">
            Preview links page
          </Link>
          <Link className="btn btn-outline" to="/">
            Back to website
          </Link>
        </div>
      </div>
    </div>
  )
}
