import { restaurant } from '../data/restaurant'
import './VisitUs.css'

export function VisitUs() {
  const { contact } = restaurant

  return (
    <section className="section visit" id="visit">
      <div className="container visit-card">
        <div className="visit-copy">
          <div>
            <span className="section-label">Visit Us</span>
            <h2 className="section-title">Find Namche Thakali</h2>
            <p className="section-copy">
              Come for the Thakali set, stay for the welcome. We are in Jhochhen, Kathmandu.
            </p>
          </div>

          <dl className="visit-details">
            <div>
              <dt>Address</dt>
              <dd>{contact.address}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {contact.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt>Opening Hours</dt>
              <dd>
                {contact.hours.map((row) => (
                  <span className="hours-row" key={row.day}>
                    <strong>{row.day}</strong>
                    <span>{row.time}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="visit-actions">
            <a
              className="btn btn-primary"
              href={contact.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="visit-btn-icon"
                src="/icons/directions.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
              Get Directions
            </a>
            <a className="btn btn-outline" href={contact.phoneHref}>
              <img
                className="visit-btn-icon"
                src="/icons/phone.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
              Call Us
            </a>
            <a
              className="btn btn-outline visit-whatsapp"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="visit-btn-icon"
                src="/icons/whatsapp.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="visit-map">
          <iframe
            title="Namche Thakali location on Google Maps"
            src={contact.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
