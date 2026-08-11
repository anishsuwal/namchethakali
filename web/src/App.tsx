import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LinksPage } from './pages/LinksPage'
import { QrPage } from './pages/QrPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/qr" element={<QrPage />} />
      </Routes>
    </BrowserRouter>
  )
}
