import DownloadButtons from '../components/DownloadButtons'
import { HERO, PROMO_VIDEO_ID } from '../content'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__meta">{HERO.meta}</p>

          <h1 className="hero__title">
            {HERO.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <hr className="rule rule--short" />

          {HERO.description.map((paragraph) => (
            <p key={paragraph} className="hero__description">
              {paragraph}
            </p>
          ))}

          <div className="hero__actions">
            <DownloadButtons />
          </div>

          <div className="hero__links">
            <a className="link" href="#how">
              {HERO.howLink}
            </a>
            <a className="link" href="#video">
              {HERO.videoLink}
            </a>
          </div>
        </div>

        <div id="video" className="hero__video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${PROMO_VIDEO_ID}?rel=0&playsinline=1`}
            title="Runiverse 소개 영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
