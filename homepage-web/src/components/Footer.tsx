import { useState } from 'react'
import { GITHUB_URL } from '../content'
import ContactModal from './ContactModal'

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">Runiverse</p>

        <nav className="footer__links" aria-label="바깥 링크">
          <button type="button" onClick={() => setContactOpen(true)}>
            문의
          </button>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <p className="footer__copy">© {new Date().getFullYear()} Runiverse</p>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  )
}
