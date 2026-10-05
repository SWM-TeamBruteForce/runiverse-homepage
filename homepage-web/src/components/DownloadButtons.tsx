import { DOWNLOAD_LINKS } from '../content'
import StoreIcon from './StoreIcon'

type Props = {
  size?: 'sm'
}

export default function DownloadButtons({ size }: Props) {
  const className = size === 'sm' ? 'button button--sm' : 'button'

  return (
    <div className="downloads">
      {DOWNLOAD_LINKS.map((link) => (
        <a key={link.platform} className={className} href={link.href}>
          <StoreIcon platform={link.platform} />
          {link.label}
        </a>
      ))}
    </div>
  )
}
