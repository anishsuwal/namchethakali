import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'
import { VideoSection } from '../components/VideoSection'
import { VisitUs } from '../components/VisitUs'
import { Social } from '../components/Social'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Gallery />
        <VideoSection />
        <VisitUs />
        <Social />
      </main>
      <Footer />
    </>
  )
}
