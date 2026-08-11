import { restaurant } from '../data/restaurant'
import './Menu.css'

export function Menu() {
  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="menu-intro">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">Simple plates, real flavour</h2>
          <p className="section-copy">
            A selection of favourites from our table. Prices and full listings are easy to update
            anytime.
          </p>
          <p className="edit-note">
            [EDIT] Update dishes and prices in src/data/restaurant.ts — prices below are placeholders
          </p>
        </div>

        <div className="menu-categories">
          {restaurant.menu.map((category) => (
            <div className="menu-category" key={category.category}>
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="menu-item-top">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-rule" aria-hidden="true" />
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
