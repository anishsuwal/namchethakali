import { restaurant } from '../data/restaurant'
import './VisitUs.css'

export function VisitUs() {
  const { contact } = restaurant

  return (
    <section className="section visit" id="visit">
      <div className="container visit-card">
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
            Get Directions
          </a>
          <a className="btn btn-outline" href={contact.phoneHref}>
            Call Us
          </a>
          <a
            className="btn btn-outline"
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
