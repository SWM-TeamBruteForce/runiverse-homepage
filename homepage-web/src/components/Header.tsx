import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__logo" href="#top">
          Runiverse
        </a>

        <nav className="header__nav" aria-label="주요 섹션">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--sm" href="#download">
          앱 다운로드
        </a>
      </div>
    </header>
  )
}
