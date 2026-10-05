import DownloadButtons from '../components/DownloadButtons'
import { CTA } from '../content'

export default function CallToAction() {
  return (
    <section id="download" className="cta">
      <div className="container cta__inner">
        <div className="cta__text">
          <p className="cta__title">{CTA.title}</p>
          <p className="cta__description">{CTA.description}</p>
        </div>
        <DownloadButtons />
      </div>
    </section>
  )
}
